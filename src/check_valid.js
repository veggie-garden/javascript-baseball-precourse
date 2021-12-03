import { NUMS, USER_INPUT_ERROR_MESSAGE } from "./constants.js";

const isNotExceedCondition = (userInput) => {
  return userInput.length !== NUMS.MAX_LENGTH;
};

const isZeroInclude = (userInput) => {
  return userInput.includes(0);
};

const isDuplicatedUserInput = (userInput) => {
  return [...new Set(userInput)].length !== NUMS.MAX_LENGTH;
};

export default function isCheckValidUserInput(userInput) {
  if (isNotExceedCondition(userInput)) {
    alert(USER_INPUT_ERROR_MESSAGE.LENGTH_NOT_EXCEED);
    return false;
  }
  if (isDuplicatedUserInput(userInput)) {
    alert(USER_INPUT_ERROR_MESSAGE.DUPLICATED);
    return false;
  }
  if (isZeroInclude(userInput)) {
    alert(USER_INPUT_ERROR_MESSAGE.INCLUDE_ZERO);
    return false;
  }
  return true;
}
