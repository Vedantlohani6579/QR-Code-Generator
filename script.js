const inputBox = document.querySelector("#inputbox");
const generateQR = document.querySelector("#generate");
const downlodeQR = document.querySelector("#downlode");
const selectSize = document.querySelector("#size");
const selectColor = document.querySelector("#color");
const qrBox = document.querySelector("#code_box");
const alertBox = document.querySelector(".alert");

let size = selectSize.value;
let qrcolor = selectColor.value;

generateQR.addEventListener("click", (e) => {
    e.preventDefault();
    if(inputBox.value.length > 0 ){
        generateQRcode()
        color = "#008b00";
        message = "Successfully Generated.";
        icon = "fa-circle-check"
        alert(color, message, icon);
    }
    else{
        qrBox.innerHTML = "";
        color = "red";
        message = "Enter Text or Url.";
        icon = "fa-triangle-exclamation"
        alert(color, message, icon);
    }
});

selectSize.addEventListener("change", (e) => {
    size = e.target.value;
    if(inputBox.value.length > 0){
        generateQRcode()
        color = "green";
        message = "Size Changed Successfully.";
        icon = "fa-circle-check"
        alert(color, message, icon);
    }else{
        color = "red";
        message = "Generate QR Code.";
        icon = "fa-triangle-exclamation"
        alert(color, message, icon);
    }
});

selectColor.addEventListener("change", (e) => {
    qrcolor = e.target.value;
    if (qrcolor.value !== null){
        qrcolor = e.target.value;
    }else{
        qrcolor = "black"
    }
    if(inputBox.value.length > 0){
        generateQRcode()
        color = "green";
        message = "Color Changed Successfully.";
        icon = "fa-circle-check"
        alert(color, message, icon);
    }else{
        color = "red";
        message = "Generate QR Code.";
        icon = "fa-triangle-exclamation"
        alert(color, message, icon);
    }
});

downlodeQR.addEventListener("click", () => {
    let downlodImg = document.querySelector(".code_box img");
    if (downlodImg !== null) {
        let imgArr = downlodImg.getAttribute("src");
        downlodeQR.setAttribute("href", imgArr)
        color = "green";
        message = "Successfully Downloaded.";
        icon = "fa-circle-check"
        alert(color, message, icon);
    } else if(downlodImg === null) {
        color = "red";
        message = "Generate QR Code.";
        icon = "fa-triangle-exclamation"
        alert(color, message, icon);
    }
});

function generateQRcode() {
    qrBox.innerHTML = "";
    new QRCode(qrBox, {
        text: inputBox.value,
        width: size,
        height: size,
        colorDark: qrcolor,
        colorLight: "white",
        correctLevel: QRCode.CorrectLevel.H
    })
}

function alert(color, message, icon){
    alertBox.innerHTML = `<div class="message" style="border-color:${color};">
    <i class="fa-solid ${icon} fa-l" style="color:${color};"></i>
    <p style="color:${color};">${message}</p>
    </div>`
    setTimeout(() =>{
        alertBox.innerHTML = "";
    },900)
}

