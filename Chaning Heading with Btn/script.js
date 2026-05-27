let heading = document.getElementById("heading");
let btn = document.querySelector("button");
let btn2 = document.getElementById("og-btn");


btn.addEventListener("click", function () {
    heading.innerHTML = "Heading Changed!";
    heading.style.color = "blue";   
});

btn2.addEventListener("click", function () {
    heading.innerHTML = "Original Heading";
    heading.style.color = "black";
}); 