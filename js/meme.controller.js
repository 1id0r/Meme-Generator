'use strict'

var gElCanvas
var gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  gElCanvas.addEventListener('click', onCanvasClick)
  renderGallery()
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
    meme.lines.forEach((line, idx) => {
      gCtx.font = `${line.size}px Impact`
      gCtx.fillStyle = line.color
      gCtx.textAlign = 'center'
      gCtx.lineWidth = 3
      gCtx.strokeStyle = 'black'

      ///draw text
      gCtx.strokeText(line.txt, gElCanvas.width / 2, line.y)
      gCtx.fillText(line.txt, gElCanvas.width / 2, line.y)

      // draw the frame
      if (idx === meme.selectedLineIdx) {
        const textWidth = gCtx.measureText(line.txt).width
        const textHeight = line.size
        const padding = 10
        const x = gElCanvas.width / 2 - textWidth / 2 - padding
        const y = line.y - textHeight
        const width = textWidth + padding * 2
        const height = textHeight + padding

        // Draw the frame (rectangle)
        gCtx.strokeStyle = 'grey'
        gCtx.lineWidth = 1
        gCtx.strokeRect(x, y, width, height)
      }
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
  meme.selectedLineIdx += 1
  if (meme.selectedLineIdx >= meme.lines.length) {
    meme.selectedLineIdx = 0
  }
  document.querySelector('.meme-text').value =
    meme.lines[meme.selectedLineIdx].txt
  renderMeme()
}

function onCanvasClick(event) {
  const meme = getMeme()
  const rect = gElCanvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  meme.lines.forEach((line, idx) => {
    gCtx.font = `${line.size}px Impact`
    const textWidth = gCtx.measureText(line.txt).width
    const textHeight = line.size
    const padding = 10

    const xStart = gElCanvas.width / 2 - textWidth / 2 - padding
    const xEnd = gElCanvas.width / 2 + textWidth / 2 + padding
    const yStart = line.y - textHeight
    const yEnd = line.y + padding

    if (x >= xStart && x <= xEnd && y >= yStart && y <= yEnd) {
      meme.selectedLineIdx = idx
      document.querySelector('.meme-text').value = line.txt

      renderMeme()
    }
  })
}

function moveLineUp() {
  const meme = getMeme()
  const line = meme.lines[meme.selectedLineIdx]
  line.y -= 10
  renderMeme()
}
function moveLineDown() {
  const meme = getMeme()
  const line = meme.lines[meme.selectedLineIdx]
  line.y += 10
  renderMeme()
}
