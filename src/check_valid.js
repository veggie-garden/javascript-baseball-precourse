import {
  MAX_LENGTH,
  USER_INPUT_NUMBER_DUPLICATED,
  USER_INPUT_NUMBER_LENGTH_NOT_EXCEED,
} from "./constants.js";

const isNotExceedCondition = (userInput) => {
  return userInput.length !== MAX_LENGTH;
};

const isDuplicatedUserInput = (userInput) => {
  return new Set([...userInput]).length !== MAX_LENGTH;
};

export default function isCheckValidUserInput(userInput) {
  if (isNotExceedCondition(userInput)) {
    alert(USER_INPUT_NUMBER_LENGTH_NOT_EXCEED);
    return false;
  }
  if (isDuplicatedUserInput(userInput)) {
    alert(USER_INPUT_NUMBER_DUPLICATED);
    return false;
  }
  return true;
}
