let btn = document.getElementById("generate-btn");
let ColorBox = document.getElementById("color-display");
let para = document.getElementById("rgb-code");


btn.addEventListener("click", function(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let opacity = Math.random().toFixed(2);

    ColorBox.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    para.innerHTML = `rgba(${red}, ${green}, ${blue}, ${opacity})`;  
})