let modelName = "XYZ";
let duration = 0;

function recalculate() {
  let costLabel = document.getElementById("calculated-cost");
  let cost = 0;

  if (modelName === "XYZ") {
    cost = duration * 100;
  } else if (modelName === "CPRG") {
    cost = duration * 213;
  }

  costLabel.innerHTML = cost.toFixed(2);
}

let modelButton = document.getElementById("model-button");

function changeModel() {
  let modelText = document.getElementById("model-text");

  if (modelName === "XYZ") {
    modelName = "CPRG";
    modelText.innerHTML = "Model CPRG";
  } else {
    modelName = "XYZ";
    modelText.innerHTML = "Model XYZ";
  }

  recalculate();
}

modelButton.addEventListener("click", changeModel);

let durationButton = document.getElementById("duration-button");

function changeDuration() {
  let durationText = document.getElementById("duration-text");
  let userInput = prompt("Enter number of days to rent:");

  if (userInput !== null) {
    let newDuration = parseInt(userInput);
    if (!isNaN(newDuration) && newDuration >= 0) {
      duration = newDuration;
      durationText.innerHTML = duration;
      recalculate();
    } else {
      alert("Please enter a valid non-negative number.");
    }
  }
}

durationButton.addEventListener("click", changeDuration);
