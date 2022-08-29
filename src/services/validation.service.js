import { isEmailValid } from "services";
import { formatNumberToMoney, parseMoneyToNumber } from "./money.service";
import { capitalize } from "./text.service";
import lang from "translations";

const Validation = {
  required: (custom = {}) => {
    const { customMessage = null, noMessage = false } = custom;
    return (field) => {
      const value = field?.value?.toString().trim();
      if (!value && !field.disabled) {
        if (noMessage) return { error: true };
        return { error: true, message: customMessage ? customMessage : lang.thisFieldIsRequired };
      }
      return { error: false, message: null };
    };
  },
  requiredIf: (expression, custom = {}) => {
    const { customMessage = null, noMessage = false } = custom;
    return (field) => {
      const value = field?.value?.toString().trim();
      if (!value && expression) {
        if (noMessage) return { error: true };
        return { error: true, message: customMessage ? customMessage : lang.thisFieldIsRequired };
      }
      return { error: false, message: null };
    };
  },
  requiredArray: (customMessage = null, noMessage = false) => {
    return (field) => {
      const value = field?.value;
      if (!value || !value.length) {
        if (noMessage) return { error: true };
        return { error: true, message: customMessage ? customMessage : lang.thisFieldIsRequired };
      }
      return { error: false, message: null };
    };
  },
  requiredMultiDropdown: (customMessage = null, noMessage = false) => {
    return (field) => {
      const value = field?.value;
      if (!value) {
        if (noMessage) return { error: true };
        return { error: true, message: customMessage ? customMessage : lang.thisFieldIsRequired };
      }
      return { error: false, message: null };
    };
  },
  maxlength: (length = 0, customMessage = null) => {
    return (field) => {
      if (field?.value?.toString().length > length) {
        return {
          error: true,
          message: customMessage
            ? customMessage
            : lang.populate(lang.maximumLengthCharacters, [`${length}`]),
        };
      }
      return { error: false, message: null };
    };
  },
  minlength: (length = 0, customMessage = null, showMessage = true) => {
    return (field) => {
      if (field.value && field.value.trim().length < length) {
        const message = customMessage
          ? customMessage
          : lang.populate(lang.minimumCharactersAllowed, [`${length}`]);
        return {
          error: true,
          message: showMessage ? message : "",
        };
      }
      return { error: false, message: null };
    };
  },
  emailAddress: (o) => {
    const { noMessage = false } = o || {};
    return (field) => {
      const { value: fieldValue } = field;
      if (fieldValue && !isEmailValid(fieldValue)) {
        if (noMessage) return { error: true };
        return {
          error: true,
          message: lang.thisEmailIsInvalid,
        };
      }
      return { error: false, message: "" };
    };
  },
  rangeValue: (min = 0, max = 1, customMessage = null) => {
    return (field) => {
      let cleanValue = `${field.value}`.replace(/,/g, "");
      if (parseFloat(cleanValue) < min || parseFloat(cleanValue) > max) {
        return {
          error: true,
          message: customMessage ? customMessage : lang.valueBetween`${min}-${max}`,
        };
      }
      return { error: false, message: null };
    };
  },
  maxValue: (max = 1, customMessage = null, amount) => {
    return (field) => {
      let cleanValue = `${field.value}`.replace(/,/g, "");
      if (amount) {
        cleanValue = parseMoneyToNumber(cleanValue).value;
      }
      if (parseFloat(cleanValue) > max) {
        return {
          error: true,
          message: customMessage
            ? customMessage
            : `${lang.maximumValueIs} ${amount ? formatNumberToMoney(max) : max}`,
        };
      }
      return { error: false, message: null };
    };
  },
  minValue: (min = 0, customMessage = null, amount) => {
    return (field) => {
      let cleanValue = `${field.value}`.replace(/,/g, "");
      if (amount) {
        cleanValue = parseMoneyToNumber(cleanValue).value;
      }
      if (parseFloat(cleanValue) < min) {
        return {
          error: true,
          message: customMessage
            ? customMessage
            : `${lang.minimumValueIs} ${amount ? formatNumberToMoney(min) : min}`,
        };
      }
      return { error: false, message: null };
    };
  },
  greaterThanZero: (customMessage = null, amount) => {
    return (field) => {
      let cleanValue = `${field.value}`.replace(/,/g, "");
      if (amount) {
        cleanValue = parseMoneyToNumber(cleanValue).value;
      }
      if (parseFloat(cleanValue) <= 0) {
        return {
          error: true,
          message: customMessage,
        };
      }
      return { error: false, message: null };
    };
  },
  number: (customMessage = null) => {
    return (field) => {
      let cleanValue = `${field.value}`.replace(/,/g, "");
      if (isNaN(cleanValue)) {
        return {
          error: true,
          message: customMessage ? customMessage : lang.shouldBeANumber,
        };
      }
      return { error: false, message: null };
    };
  },
  reserveWord: (words = [], customMessage = null) => {
    return (field) => {
      if (words.length > 0 && words.includes(field.value.toString().toLowerCase())) {
        return {
          error: true,
          message: customMessage
            ? customMessage
            : `${capitalize(field.value)} ${lang.isAreserveWord}`,
        };
      }
      return { error: false, message: null };
    };
  },
  minArrayValues: (min = 1, customMessage = null) => {
    return (field) => {
      if (field.value.length < min) {
        return {
          error: true,
          message: customMessage ? customMessage : `${lang.minimum} ${min} ${lang.values}`,
        };
      }
      return { error: false, message: null };
    };
  },
};

export default Validation;
