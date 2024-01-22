let memory = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fithteen",
  "sixteen",
];
let newMemory = [];

do {
  var a = Math.floor(Math.random() * memory.length);
  vmi(a);
  function vmi(a) {
    for (item of newMemory) {
      if (memory[a] == item) {
        return a;
      }
    }
    newMemory.push(memory[a]);
  }
} while (newMemory.length <= memory.length - 1);

console.log(newMemory);

let divs = document.querySelectorAll(".flip-card-back");
// let backs = document.querySelectorAll(".selected .flip-card-back")
let dOne = document.querySelector(".d-one");
let flipCardInners = document.querySelectorAll(".flip-card-inner");

let btn = document.querySelector(".btn");
let pair = document.querySelector(".hide");
let start = document.querySelector(".start");

function newClass() {
  for (let i = 0; i < divs.length; i++) {
    for (let j = 0; j < newMemory.length; j++) {
      if (divs[i].classList.length < 2 && i == j) {
        divs[i].classList.add(newMemory[j]);
      }
    }
  }
  start.style.display = "none";
}

btn.addEventListener("click", newClass);

let i = 0;
for (let flipCardInner of flipCardInners) {
  flipCardInner.onclick = function () {
    if (this.classList.toggle("selected")) {
      i++;

      let selected = document.querySelectorAll(".flip-card-inner.selected");
      if (selected.length == 2) {
        let backs = document.querySelectorAll(
          ".flip-card-inner.selected .flip-card-back"
        );


for (let i=1; i< backs.length; i++){
   switch (true){
      case backs[0].className == "flip-card-back two" &&
      backs[1].className == "flip-card-back one" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
      break;
      case backs[1].className == "flip-card-back two" &&
      backs[0].className == "flip-card-back one" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
       break;
   }
}

for (let i=1; i< backs.length; i++){
   switch (true){
      case backs[0].className == "flip-card-back three" &&
      backs[1].className == "flip-card-back six" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
      break;
      case backs[0].className == "flip-card-back six" &&
      backs[1].className == "flip-card-back three" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
       break;
   }
}
for (let i=1; i< backs.length; i++){
   switch (true){
      case backs[0].className == "flip-card-back four" &&
      backs[1].className == "flip-card-back eleven" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
      break;
      case backs[0].className == "flip-card-back eleven" &&
      backs[1].className == "flip-card-back four" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
       break;
   }
}
for (let i=1; i< backs.length; i++){
   switch (true){
      case backs[0].className == "flip-card-back five" &&
      backs[1].className == "flip-card-back nine" :
      for (let sel of selected) {
         sel.classList.add("hide");
       };
      break;
      case backs[0].className == "flip-card-back nine" &&
      backs[1].className == "flip-card-back five" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
       break;
   }
}
for (let i=1; i< backs.length; i++){
   switch (true){
      case backs[0].className == "flip-card-back seven" &&
      backs[1].className == "flip-card-back eight" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
      break;
      case backs[0].className == "flip-card-back eight" &&
      backs[1].className == "flip-card-back seven" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
       break;
   }
}
for (let i=1; i< backs.length; i++){
   switch (true){
      case backs[0].className == "flip-card-back ten" &&
      backs[1].className == "flip-card-back fourteen" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
      break;
      case backs[0].className == "flip-card-back fourteen" &&
      backs[1].className == "flip-card-back ten" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
       break;
   }
}
for (let i=1; i< backs.length; i++){
   switch (true){
      case backs[0].className == "flip-card-back twelve" &&
      backs[1].className == "flip-card-back sixteen" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
      break;
      case backs[0].className == "flip-card-back sixteen" &&
      backs[1].className == "flip-card-back twelve" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
       break;
   }
}
for (let i=1; i< backs.length; i++){
   switch (true){
      case backs[0].className == "flip-card-back thirteen" &&
      backs[1].className == "flip-card-back fithteen" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
      break;
      case backs[0].className == "flip-card-back fithteen" &&
      backs[1].className == "flip-card-back thirteen" :
      for (let sel of selected) {
        sel.classList.add("hide");
       };
       break;
   }
}

  
        
         }
    }
    let selected = document.querySelectorAll(".flip-card-inner.selected");
    if (selected.length > 2) {
      for (let flip of flipCardInners) {
        flip.classList.remove("selected");
        let = 0;
      }
    }


    let hides= document.querySelectorAll(".flip-card-inner.hide");

let again = document.querySelector(".start-again");
for ( let hide of hides){
  if (hides.length >= 16){
    console.log(hides.length)
      again.style.display = "flex"
  }
}
  };
}


let againBtn = document.querySelector(".again");


againBtn.addEventListener("click", function () {
   location.reload();

});
