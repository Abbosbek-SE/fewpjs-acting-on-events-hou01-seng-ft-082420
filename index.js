
let dodger = document.getElementByID("dodger");

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else {
        moveDodgerRight();
    }

})

function moveDodgerLeft() {
    let leftNumber = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumber, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }
