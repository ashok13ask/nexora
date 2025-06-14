import React, { useState, useCallback, useEffect } from "react";
import { Query, Builder, Utils as QbUtils } from "react-awesome-query-builder";
import BasicConfig from "react-awesome-query-builder/lib/config/basic";
import "react-awesome-query-builder/lib/css/styles.css";
import "react-awesome-query-builder/lib/css/compact_styles.css";

// Define fields once, and reuse
const fieldDefinitions = {
  "user.email": {
    label: "Email",
    type: "text",
    valueSources: ["value"],
    operators: ["equal", "not_equal", "contains"],
  },
  "user.phone": {
    label: "Phone",
    type: "text",
    valueSources: ["value"],
    operators: ["equal", "not_equal", "contains"],
  },
  "user.age": {
    label: "Age",
    type: "number",
    valueSources: ["value"],
    operators: ["equal", "greater_or_equal", "less_or_equal"],
  },
  "user.dob": {
    label: "Date of birth",
    type: "date",
    valueSources: ["value"],
    operators: ["equal", "greater_or_equal", "less_or_equal"],
  },
  "user.name": {
    label: "Name",
    type: "text",
    valueSources: ["value"],
    operators: ["equal", "contains"],
  },
};

const fieldGroups = [
  { group: "User property", fields: ["user.email", "user.phone"] },
  { group: "User Details", fields: ["user.dob", "user.name"] },
];

// Custom field selector with group
const CustomFieldSelector = ({ value, setField }) => {
  const getGroupByField = (field) =>
    fieldGroups.find((g) => g.fields.includes(field))?.group || "";
  const [selectedGroup, setSelectedGroup] = useState(getGroupByField(value));

  useEffect(() => {
    const currentGroup = getGroupByField(value);
    if (currentGroup !== selectedGroup) {
      setSelectedGroup(currentGroup);
    }
  }, [value]);

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
    const firstField = fieldGroups.find((g) => g.group === group)?.fields[0];
    setField(firstField || "");
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <select
        value={selectedGroup}
        onChange={(e) => handleGroupChange(e.target.value)}
      >
        <option value="">Select Group</option>
        {fieldGroups.map((opt) => (
          <option key={opt.group} value={opt.group}>
            {opt.group}
          </option>
        ))}
      </select>

      <select value={value} onChange={(e) => setField(e.target.value)}>
        <option value="">Select Field</option>
        {fieldGroups
          .find((g) => g.group === selectedGroup)
          ?.fields.map((f) => (
            <option key={f} value={f}>
              {fieldDefinitions[f]?.label || f}
            </option>
          ))}
      </select>
    </div>
  );
};

const config = {
  ...BasicConfig,
  fields: fieldDefinitions,
  settings: {
    ...BasicConfig.settings,
    canReorder: false,
    showNot: false,
    renderField: (props) => <CustomFieldSelector {...props} />,
  },
  operators: {
    ...BasicConfig.operators,
    equal: { ...BasicConfig.operators.equal, label: "Equals" },
    not_equal: { ...BasicConfig.operators.not_equal, label: "Not Equals" },
    contains: { ...BasicConfig.operators.contains, label: "Contains" },
    greater_or_equal: {
      ...BasicConfig.operators.greater_or_equal,
      label: "Greater",
    },
    less_or_equal: {
      ...BasicConfig.operators.less_or_equal,
      label: "Less than",
    },
  },
};

export default function RuleBuilder() {
  const [tree, setTree] = useState(
    QbUtils.checkTree(
      QbUtils.loadTree({ id: QbUtils.uuid(), type: "group" }),
      config
    )
  );

  const onChange = useCallback((immutableTree, config) => {
    setTree(immutableTree);
    // console.log("JSONLogic:", QbUtils.jsonLogicFormat(immutableTree, config));
  }, []);

  return (
    <Query
      {...config}
      value={tree}
      onChange={onChange}
      renderBuilder={(props) => (
        <div className="query-builder-container" style={{ padding: 20 }}>
          <Builder {...props} />
        </div>
      )}
    />
  );
}
