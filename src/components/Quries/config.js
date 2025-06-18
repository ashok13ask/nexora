import { BasicConfig } from "react-awesome-query-builder";
import { CustomButton, CustomFieldSelector, CustomOperatorSelect, CustomTextInput } from"./customQurieFields";
import { fieldDefinitions } from "./quries";

export const config = {
  ...BasicConfig,
  fields: fieldDefinitions,
  settings: {
    ...BasicConfig.settings,
    canReorder: false,
    showNot: false,
    renderField: (props) => <CustomFieldSelector {...props} />,
    renderButton: (props) => <CustomButton {...props} />,
    renderOperator: (props) => <CustomOperatorSelect {...props} />,
  },
  widgets: {
    ...BasicConfig.widgets,
    text: {
      ...BasicConfig.widgets.text,
      factory: (props) => <CustomTextInput {...props} />,
    },
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