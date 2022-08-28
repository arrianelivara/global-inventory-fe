import { Field } from "enums";
import Validation from "services/validation.service";


export const initialState = {
  email: {
    name: "email",
    placeholder: "Enter email address",
    value: "",
    type: Field.INPUT,
    validations: [
      Validation.required({ noMessage: true }),
      Validation.emailAddress({ noMessage: true }),
    ],
    maxLength: 75,
  },
  password: {
    name: "password",
    placeholder: "Password",
    value: "",
    type: Field.INPUT,
    validations: [Validation.required({})],
    maxLength: 75,
  },
};
