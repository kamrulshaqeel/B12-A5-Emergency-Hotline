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

  // Call History Feature
  const callBtns = document.querySelectorAll(".call-btn");
  callBtns.forEach((callBtn) => {
    callBtn.addEventListener("click", function (e) {
      const card = callBtn.closest(".card");
      const serviceName = card.querySelector(".service-name").innerText;
      const number = card.querySelector(".number").innerText;
      const callHistory = document.getElementById("call-history");

      const div = document.createElement("div");
      div.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="w-[352px] h-[83px] mt-4">
          <h1 class="font-semibold">${serviceName}</h1>
          <p class="text-gray-500">${number}</p>
        </div>
        <div>
          <h4>${new Date().toLocaleTimeString()}</h4>
        </div>
      </div>
    `;
      callHistory.appendChild(div);

      //Reduce coins functionality
      const coinsElement = document.getElementById("coins");
      let currentCoins = parseInt(coinsElement.innerText);
      if (currentCoins > 0) {
        currentCoins -= 20;
        coinsElement.innerText = currentCoins;
      } else {
        alert("You don't have enough coin to make a call.");
      }
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
