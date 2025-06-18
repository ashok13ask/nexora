import React, { useState, useCallback } from "react";
import { Query, Builder, Utils as QbUtils } from "react-awesome-query-builder";
import "react-awesome-query-builder/lib/css/styles.css";
import "react-awesome-query-builder/lib/css/compact_styles.css";
import { config } from "components/Quries/config";


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
        <div
          style={{
            padding: 20,
            border: "1px solid #ccc",
            borderRadius: "12px",
          }}
        >
          <Builder {...props} />
        </div>
      )}
    />
  );
}
