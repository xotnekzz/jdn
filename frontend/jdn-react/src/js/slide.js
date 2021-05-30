// const steps = document.getElementsByClassName("process-info");
// const images = document.getElementsByClassName("process-frame");
// // const leftArrow = document.getElementById("left-arrow");
// // const rightArrow = document.getElementById("right-arrow");
// const total = steps.length;
// let stepsIndex = 0;
// let i = 0;

// // leftArrow.onClick = function () {
// //   next("prev");
// // };

// // rightArrow.onClick = function () {
// //   next("next");
// // };

// function next(direction) {
//   if (direction == "next") {
//     stepsIndex++;
//     if (stepsIndex == total) {
//       stepsIndex = 0;
//     }
//   } else {
//     if (stepsIndex == 0) {
//       stepsIndex = total - 1;
//     } else {
//       stepsIndex--;
//     }
//   }
//   for (i = 0; i < total; i++) {
//     steps[i].classList.remove("active");
//     images[i].classList.remove("active");
//   }
//   steps[stepsIndex].classList.add("active");
//   images[stepsIndex].classList.add("active");
// }
