'use-strict'

const gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, url: 'img/2.jpg', keywords: ['baby', 'funny'] },
  { id: 3, url: 'img/3.jpg', keywords: ['baby', 'funny'] },
  { id: 4, url: 'img/4.jpg', keywords: ['baby', 'funny'] },
  { id: 5, url: 'img/5.jpg', keywords: ['baby', 'funny'] },
  { id: 6, url: 'img/6.jpg', keywords: ['baby', 'funny'] },
]

let gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 1,
  lines: [
    { txt: 'hello', size: 30, color: 'black', x: 0, y: 50 },
    { txt: 'hello', size: 30, color: 'black', x: 0, y: 400 },
  ],
}
var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

function getMeme() {
  return gMeme
}
function setImg(id) {
  gMeme.selectedImgId = id
}
function downloadCanvas(elLink) {
  const dataUrl = gElCanvas.toDataURL()
  elLink.href = dataUrl
  elLink.download = 'my-img'
}
