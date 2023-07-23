let myInPut = document.querySelector("#myinput");
let btn_the_number = document.querySelectorAll(".btn_the_number");
let notes = document.querySelector(".notes")

// function for btns loop
btn_the_number.forEach((btn)=>{
  btn.addEventListener("click", (data) => {
    myInPut.value += data.target.dataset.mynumbers;
    myInPut.style.color = "#e91e63"
  });
})


// function for btn equal
let myequal = document.querySelector("#myequal");
myequal.addEventListener("click", () => {
  console.log();
  if (
    myInPut.value &&
    !isNaN(myInPut.value.slice(-1)) &&
    !isNaN(myInPut.value.charAt(0))
  ) {
    myInPut.value = eval(myInPut.value);
    myInPut.style.color = "#23ff177a"
    notes.innerHTML = ""
  }else{
    notes.innerHTML = `
    <h1>Please make sure that the calculation is spelled correctly</h1>
    `
  }
});

// function for btn remove

let myremove = document.querySelector("#myremove");

myremove.addEventListener("click", (e) => {
  myInPut.value = e.target.dataset.remove;
});


// function for btn back
let RemoveAMyMark = document.querySelector(".remove-back");

RemoveAMyMark.addEventListener("click", () => {
    myInPut.value = myInPut.value.slice(0, -1);
    myInPut.style.color = "#e91e63"
});




