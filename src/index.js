import "./style.css";

window.addEventListener("keydown", (e) => main(e));
window.addEventListener("click", (e) => main(e));

function main(e) {
  let code;

  if (e.keyCode) {
    code = e.keyCode;
  } else if (e.target.attributes[1].value) {
    code = e.target.attributes[1].value;
  } else if (e.target.attributes[1].value == undefined) {
    return;
  }

  const audio = document.querySelector(`audio[data-key = "${code}"]`);
  const key = document.querySelector(`.key[data-key = "${code}"]`);
  if (!key || !audio) {
    return;
  }
  playSound(audio);
  playAnimation(key);

  key.addEventListener("transitionend", removeTransition);
}

function removeTransition() {
  this.classList.remove("playing", "red", "blue", "green");
}

function playSound(audio) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function playAnimation(key) {
  if (!key) return;
  const random = Math.random();

  key.classList.add("playing");

  if (random <= 0.33) {
    key.classList.add("red");
  }
  if (random > 0.33 && random <= 0.66) {
    key.classList.add("blue");
  }
  if (random > 0.66) {
    key.classList.add("green");
  }
}
