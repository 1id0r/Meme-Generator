'use strict'

var gElCanvas
var gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  renderGallery()
  renderMeme()
}

function renderGallery() {}

function renderMeme() {
  const meme = getMeme()
  const img = gImgs.find((img) => img.id === meme.selectedImgId)
  const elImage = new Image()
  elImage.src = img.url
  elImage.onload = function () {
    gElCanvas.width = elImage.width
    gElCanvas.height = elImage.height
    gCtx.drawImage(elImage, 0, 0, gElCanvas.width, gElCanvas.height)
    meme.lines.forEach((line) => {
      gCtx.font = `${line.size}px Arial`
      gCtx.fillStyle = line.color
      gCtx.textAlign = 'center'

      gCtx.fillText(line.txt, gElCanvas.width / 2, line.y)
    })
  }
}

function onTextInput(text) {
  const meme = getMeme()
  meme.lines[meme.selectedLineIdx - 1].txt = text

  console.log('memme', meme)
  renderMeme()
}

function onSelectImg(imgElement) {
  const imgId = +imgElement.dataset.id
  setImg(imgId)
  renderMeme()
  document.querySelector('.gallery-container').classList.add('hidden')
  document.querySelector('.editor').classList.remove('hidden')
}
function onBackToGallery() {
  document.querySelector('.editor').classList.add('hidden')
  document.querySelector('.gallery-container').classList.remove('hidden')
}
