let heading = document.getElementById("heading");
let btn = document.querySelector("button");


btn.addEventListener("click", function () {
    heading.innerHTML = "Heading Changed!";
    heading.style.color = "blue";   
});