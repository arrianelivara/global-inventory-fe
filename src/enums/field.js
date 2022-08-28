import enumeration from "./enumeration";

const Field = {
  INPUT: "TEXTBOX",
  DROPDOWN: "DROPDOWN",
  MULTIPLE_DROPDOWN: "Multiple Dropdown",
  CHECKBOX: "CHECKBOX",
  MULTIPLE_CHECKBOX: "Multiple Checkbox",
  RADIO: "RADIO_BUTTON",
  ANY: "Any",
  DATE_TIME: "Date Time",
  LABEL: "Label",
  DATE_RANGE: "Date Range",
  NUMBER: "Number",
  COUNTRY: "COUNTRY",
  NATIONALITY: "NATIONALITY",
};

export default enumeration(Field);
