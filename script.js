// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//   if (started == false) {
//     console.log("Game is started");
//     started = true;

//     levelUp("Game Over");
//   }
// });

// function gameFlash(btn) {
//   btn.classList.add("flash");
//   setTimeout(function () {
//     btn.classList.remove("flash");
//   }, 250);
// }

// function userFlash(btn) {
//   btn.classList.add("userflash");
//   setTimeout(function () {
//     btn.classList.remove("userflash");
//   }, 250);
// }

// function levelUp() {
//   userSeq = [];
//   level++;
//   h2.innerText = "level " + level;

//   let randIdx = Math.floor(Math.random() * 3);
//   let randColor = btns[randIdx];
//   let randBtn = document.querySelector(`.${randColor}`);
//   gameSeq.push(randColor);
//   console.log(gameSeq);
//   gameFlash(randBtn);
// }

// function checkAns(idx) {
//   if (userSeq[idx] === gameSeq[idx]) {
//     if (userSeq.length == gameSeq.length) {
//       setTimeout(levelUp, 1000);
//     }
//   } else {
//     h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
//     document.querySelector("body").style.backgroundColor = "red";
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "white";
//     }, 150);
//     reset();
//   }
// }

// function btnPress() {
//   let btn = this;
//   userFlash(btn);

//   userColor = btn.getAttribute("id");
//   userSeq.push(userColor);

//   checkAns("userSeq.length - 1");
// }

// let allBtns = document.querySelectorAll(".btn");
// for (btns of allBtns) {
//   btns.addEventListener("click", btnPress);
// }

// function reset() {
//   started = false;
//   gameSeq = [];
//   userSeq = [];
//   level = 0;
// }

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  if (!btn) {
    console.error("gameFlash: btn is null");
    return;
  }
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  if (!btn) {
    console.error("userFlash: btn is null");
    return;
  }
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = "level " + level;

  let randIdx = Math.floor(Math.random() * 4); // Should be 4 to include all colors
  let randColor = btns[randIdx];
  console.log(`levelUp: Selected color is ${randColor}`);
  let randBtn = document.querySelector(`.${randColor}`);
  if (!randBtn) {
    console.error(`levelUp: No button found with class ${randColor}`);
  }
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1); // Corrected to use the value of the length
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  // Fixed the loop
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
