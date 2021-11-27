import { MIN_NUMBER, MAX_NUMBER, MAX_LENGTH } from "./constants.js";

export default function BaseballGame() {
  function randomComputerInputNumber() {
    const flag = new Array(10).fill(0);
    let res = "";
    while (res.length < MAX_LENGTH) {
      let num = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      while (flag[num] === 1) {
        num = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      }
      flag[num] = 1;
      res += num;
    }
    return res;
  }

  function saveRandomComputerInputNumber() {
    const computerNumber = randomComputerInputNumber();
    localStorage.setItem("computerInputNumber", computerNumber);
  }

  saveRandomComputerInputNumber();
}

BaseballGame();
