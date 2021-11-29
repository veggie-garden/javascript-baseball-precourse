import isCheckValidUserInput from "./check_valid.js";
import { MIN_NUMBER, MAX_NUMBER, MAX_LENGTH } from "./constants.js";

export default function BaseballGame() {
  const randomComputerInputNumber = () => {
    const flag = new Array(10).fill(0);
    let computerInputNumber = "";
    while (computerInputNumber.length < MAX_LENGTH) {
      let num = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      while (flag[num] === 1) {
        num = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      }
      flag[num] = 1;
      computerInputNumber += num;
    }
    return computerInputNumber;
  };

  const saveRandomComputerInputNumber = () => {
    const computerNumber = randomComputerInputNumber();
    localStorage.setItem("computerInputNumber", computerNumber);
  };

  const getRandomComputerInputNumber = () => {
    return localStorage.getItem("computerInputNumber");
  };

  const compareInputs = (computerInputNumbers, userInputNumbers) => {
    let [ball, strike] = [0, 0];
    for (let i = 0; i < MAX_LENGTH; i += 1) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike += 1;
      } else if (userInputNumbers.includes(computerInputNumbers[i])) {
        ball += 1;
      }
    }
    return [ball, strike];
  };

  const play = (computerInputNumbers, userInputNumbers) => {
    compareInputs(computerInputNumbers, userInputNumbers);
  };

  const getUserInput = () => {
    const userInputButton = document.getElementById("submit");
    const userInput = document.getElementById("user-input");
    userInputButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (!isCheckValidUserInput(userInput.value)) {
        userInput.value = "";
      } else {
        play(getRandomComputerInputNumber(), userInput.value);
      }
    });
  };

  const init = () => {
    saveRandomComputerInputNumber();
    getUserInput();
  };

  init();
}

BaseballGame();
