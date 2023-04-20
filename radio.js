const radios = document.querySelectorAll("[id^='vacancy']");
const button = document.getElementById("button");
const progressBar = document.getElementById("file");
let progressValue = 0;

const boxes = document.querySelectorAll(".color-box");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((b) => b.classList.remove("selected"));
    box.classList.add("selected");
    button.classList.add("active");
    button.classList.remove("disabled");
  });
});

function handleRadioClick() {
  button.classList.add("active");
  button.classList.remove("disabled");
}

document.addEventListener("click", (event) => {
  if (event.target.matches("[id^='vacancy']")) {
    handleRadioClick();
    const radio = event.target.querySelector("input[type='radio']");
    // radio.checked = true;
    // radio.click();
  }
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  button.classList.remove("active");
  button.classList.add("disabled");
  progressValue += 8;

  progressBar.setAttribute("value", progressValue);
  progressBar.style.width = `${progressValue}%`;
  progressBar.textContent = `${progressValue}%`;
});

const steps = document.querySelectorAll(".step");

steps.forEach((el, i) => {
  if (i > 0) {
    el.style.display = "none";
  }
});
steps[0].classList.add("step-active");

button.addEventListener("click", () => {
  const nextStep = document.querySelector(".step-active").nextElementSibling;
  nextStep.style.display = "block";

  if (nextStep.classList.contains("step")) {
    steps.forEach((el) => {
      el.classList.remove("step-active");
      el.style.display = "none";
    });

    nextStep.classList.add("step-active");
    nextStep.style.display = "block";
  } else {
    window.location = "/";
  }
  /////

  if (nextStep.id === "step9") {
    setTimeout(() => {
      const finalStep = document.getElementById("step10");
      steps.forEach((el) => {
        el.classList.remove("step-active");
        el.style.display = "none";
      });
      finalStep.classList.add("step-active");
      finalStep.style.display = "block";
    }, 2000);
  } else {
    nextStep.style.display = "block";
  }
  /////
});
