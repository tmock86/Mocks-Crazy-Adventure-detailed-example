/* Declare variables below to save the different sections (divs) of your story*/
//first button options
let confrontButton = document.querySelector(".option-one");
let buildButton = document.querySelector(".option-two");
//two different first option screen
let confrontDiv = document.querySelector(".option-one-screen");
let buildDiv = document.querySelector(".option-two-screen");
//second button options
let ohNoButton = document.querySelector(".ohno");
let runButton = document.querySelector(".run");
//two different end option screens
let kidnappDiv = document.querySelector(".option-one-end");
let savedDiv = document.querySelector(".option-two-end");
//body
let body = document.querySelector("body");

confrontButton.onclick=function(){
    confrontDiv.style.display="block";
    body.style="background-color: #e64004";
};

buildButton.onmouseover=function(){
    buildDiv.style.display="block";
        body.style="background-color: lightblue";

};

ohNoButton.onclick=function(){
    kidnappDiv.style.display="block";
    body.style="background-image: url('https://gray-wluc-prod.cdn.arcpublishing.com/resizer/imENvXb9vMtYAlWpuUUfa_8wpMs=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/R6TNKFJZSZBHTPXBCDUQBLBMDQ.jpg')";
};
runButton.onclick=function(){
    savedDiv.style.display="block";
    body.style="background-image: url('https://ceoworld.biz/wp-content/uploads/2021/11/The-three-rules-of-a-peaceful-life-1.jpg')";
};



