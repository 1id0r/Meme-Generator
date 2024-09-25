'use strict'

var gElCanvas
var gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  renderMeme()
}

function renderMeme() {
  const imgSrc = 'img/2.jpg'
  const memeText = 'I sometimes eat Falafel'
  const textSize = 40
  const textColor = 'red'
  const img = new Image()
  img.src = imgSrc

  img.onload = function () {
    gElCanvas.width = img.width
    gElCanvas.height = img.height
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.font = `${textSize}px Arial`
    gCtx.fillStyle = textColor
    gCtx.textAlign = 'center'

    gCtx.fillText(memeText, gElCanvas.width / 2, 50)
  }
}
