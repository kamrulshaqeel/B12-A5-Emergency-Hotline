document.addEventListener("DOMContentLoaded", function () {
  //copy button feature
  let copyCount = 0;
  const copyCountElement = document.getElementById("copy-count");
  const copyBtns = document.querySelectorAll(".copy-btn");
  copyBtns.forEach((copyBtn) => {
    copyBtn.addEventListener("click", function (e) {
      const card = copyBtn.closest(".card");
      const numberElement = card.querySelector(".number");
      const numberText = numberElement.innerText;

      navigator.clipboard.writeText(numberText).then(function () {
        copyCount++;
        if (copyCountElement) {
          copyCountElement.innerText = copyCount;
        }
        alert("Copied number: " + numberText);
      });
    });
  });


});
//Loved icon Feature
let lovedNumCountElement = document.getElementById("love-count");
let lovedNumCount = 0;

const heartIcons = document.querySelectorAll(".heart-icon");
heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener("click", function (e) {
    if (lovedNumCountElement) {
      lovedNumCountElement.innerText = lovedNumCount;
    }
    lovedNumCount++;

    if (!heartIcon.classList.contains("loved")) {
      heartIcon.classList.add("loved");
    }
  });
});
