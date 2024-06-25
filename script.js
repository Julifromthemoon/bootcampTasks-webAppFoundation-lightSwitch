const btnEL = document.querySelector(".dark-mode");
const body = document.querySelector("body");
const btnElLightMode = document.querySelector(".light-mode");

// btnEL.addEventListener("click", function () {
//   body.style.backgroundColor = "black";
// });

// btnElLightMode.addEventListener("click", function () {
//   body.style.backgroundColor = "rgb(250, 235, 215)";
// });

// btnEL.addEventListener("click", function () {
//   console.log(body.style.backgroundColor);
//   if (body.style.backgroundColor === "rgb(250, 235, 215)") {
//     console.log("click");
//     body.style.backgroundColor = "black";
//   } else if (body.style.backgroundColor === "black") {
//     body.style.backgroundColor = "rgb(250, 235, 215)";
//     console.log("click2");
//   }
// });

btnEL.addEventListener("click", function () {
  if (body.style.backgroundColor === "rgb(250, 235, 215)") {
    console.log("click");
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "rgb(250, 235, 215)";
  }
});

// if (body.style.backgroundColor == "rgb(250, 235, 215)") {
//   btnEL.addEventListener("click", function () {
//     console.log("Switch to dark-mode");
//     body.style.backgroundColor = "black";
//   });
// } else {
//   btnEL.addEventListener("click", function () {
//     console.log("Switch to light-mode");
//     body.style.backgroundColor = "black";
//   });
// }
