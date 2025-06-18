import { useActiveColor } from "context/activeColor";
import React from "react";
import { Button, Input } from "reactstrap";
import { fieldDefinitions } from "./quries";


const fieldGroups = [
  { group: "User property", fields: ["user.email", "user.phone"] },
  { group: "User Details", fields: ["user.dob", "user.name"] },
];

// Custom field selector with group
export const CustomFieldSelector = ({ value, setField }) => {
  const getGroupByField = (field) =>
    fieldGroups.find((g) => g.fields.includes(field))?.group || "";
  const [selectedGroup, setSelectedGroup] = React.useState(
    getGroupByField(value)
  );

  React.useEffect(() => {
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
      <Input
        value={selectedGroup}
        type="select"
        id="custom-select"
        onChange={(e) => handleGroupChange(e.target.value)}
        placeholder="Select group"
      >
        <option value="">Select Group</option>
        {fieldGroups.map((opt) => (
          <option key={opt.group} value={opt.group}>
            {opt.group}
          </option>
        ))}
      </Input>

      <Input
        type="select"
        id="custom-select"
        value={value}
        onChange={(e) => setField(e.target.value)}
      >
        <option value="">Select Field</option>
        {fieldGroups
          .find((g) => g.group === selectedGroup)
          ?.fields.map((f) => (
            <option key={f} value={f}>
              {fieldDefinitions[f]?.label || f}
            </option>
          ))}
      </Input>
    </div>
  );
};
export const CustomButton = (props) => {
  console.log("props", props);
  const { label, onClick, disabled, className, title, icon: Icon } = props;
  const { ActiveThemeColor } = useActiveColor();
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={className}
      title={title}
      size="sm"
      color={ActiveThemeColor}
    >
      {Icon && <Icon />} {/* Render the icon if it exists */}
      {label}
    </Button>
  );
};
export const CustomOperatorSelect = (props) => {
  const { selectedKey, items, setField, title } = props;
  return (
    <Input
      type="select"
      value={selectedKey}
      onChange={(e) => setField(e.target.value)}
      title={title}
      id="custom-select"
    >
      {items.map((item) => (
        <option key={item.key} value={item.key}>
          {item.label}
        </option>
      ))}
    </Input>
  );
};

export const CustomTextInput = ({ value, setValue, placeholder }) => {
  return (
    <Input
      type="text"
      value={value || ""}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};
