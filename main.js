let circleIcon = document.querySelector(".circle");
let idNum = document.getElementById("id-num");
let advice = document.querySelector("h3");



fetch("https://api.adviceslip.com/advice")
.then((data)=>{
    return data.json();
}).then((allData)=>{
    idNum.textContent = allData.slip.id;
    advice.textContent = `"${allData.slip.advice}"` ;
    circleIcon.addEventListener("click",function() {
        window.location.reload();
    })
})