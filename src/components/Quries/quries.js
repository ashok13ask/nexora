export const fieldDefinitions = {
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
