"use strict"
let imageSection = document.querySelector(".wraper .image_section")
let QR = document.querySelector(".wraper .image_section img")
let generateBtn = document.querySelector("button")
let inputBtn = document.querySelector(`input[type="text"]`)
let downloadBtn = document.querySelector('#download')
let QrLink = null

generateBtn.addEventListener('click', ()=>{
    let QrValue = inputBtn.value
    if(!QrValue)
        return
    QrLink = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QrValue}`
    QR.setAttribute('src', QrLink)
    imageSection.classList.add("active")
})