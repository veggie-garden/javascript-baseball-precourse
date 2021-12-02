const NUMS = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  MAX_LENGTH: 3,
};

const USER_INPUT_ERROR_MESSAGE = {
  INCLUDE_ZERO: "0은 사용할 수 없습니다.",
  DUPLICATED: "중복되는 숫자 없이 입력해주세요.",
  LENGTH_NOT_EXCEED: "세 자릿수 숫자를 입력해주세요.",
};

const RESULT_REPLY = {
  NO_CORRECT_ANSWER: "낫싱",
  CORRECT_ANSWER:
    "<p><span>🎉</span> <strong>정답을 맞추셨습니다!</strong> <span>🎉</span></p>",
  ASK_RESTART:
    "<p><span>게임을 새로 시작하겠습니까?</span> <button id='game-restart-button'>게임 재시작</button></p>",
};

const LOCALSTORAGE_RANDOM_NUMBER_KEY = "computerInputNumber";

export {
  NUMS,
  USER_INPUT_ERROR_MESSAGE,
  RESULT_REPLY,
  LOCALSTORAGE_RANDOM_NUMBER_KEY,
};
