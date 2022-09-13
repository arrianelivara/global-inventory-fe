import { Field } from "enums";

const initialFormState = () => {
  return {
    warehouse: {
      name: "warehouse",
      value: 0,
      type: Field.DROPDOWN,
    },
  };
};

export default initialFormState;
