'use strict'

var gElCanvas
var gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  renderMeme()
}

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
  renderMeme()
}

function onSelectImg(imgElement) {
  const imgId = +imgElement.dataset.id // Use the dataset property to access data-id
  console.log('imgId', imgId)
  const meme = getMeme()
  meme.selectedImgId = imgId // Set the selected image ID
  renderMeme() // Re-render the meme
}
