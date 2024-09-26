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
    meme.lines.forEach((line, idx) => {
      gCtx.font = `${line.size}px Arial`
      gCtx.fillStyle = line.color

      if (idx === meme.selectedLineIdx) {
        gCtx.lineWidth = 1
        gCtx.strokeStyle = 'red'
        gCtx.strokeText(line.txt, gElCanvas.width / 2, line.y)
      }
      gCtx.textAlign = 'center'
      gCtx.fillText(line.txt, gElCanvas.width / 2, line.y)
    })
  }
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

function onTextInput(text) {
  const meme = getMeme()
  meme.lines[meme.selectedLineIdx].txt = text
  renderMeme()
}
function onColorChange(color) {
  console.log('color', color)
  const meme = getMeme()
  meme.lines[meme.selectedLineIdx].color = color
  renderMeme()
}

function increaseFontSize() {
  const meme = getMeme()
  meme.lines[meme.selectedLineIdx].size += 4
  renderMeme()
}

function decreaseFontSize() {
  const meme = getMeme()
  if (meme.lines[meme.selectedLineIdx].size > 10) {
    meme.lines[meme.selectedLineIdx].size -= 4
  }
  renderMeme()
}

function switchLine() {
  const meme = getMeme()
  console.log('gMeme', gMeme)
  console.log('gMeme', gMeme.selectedLineIdx)
  meme.selectedLineIdx += 1
  if (meme.selectedLineIdx >= meme.lines.length) {
    meme.selectedLineIdx = 0
  }
  console.log('meme.line[selectedLineIdx]', meme.lines[selectedLineIdx])
  renderMeme()
}

function switchLine() {
  const meme = getMeme()

  meme.selectedLineIdx += 1

  if (meme.selectedLineIdx >= meme.lines.length) {
    meme.selectedLineIdx = 0
  }
  document.querySelector('.meme-text').value =
    meme.lines[meme.selectedLineIdx].txt

  renderMeme()
}
