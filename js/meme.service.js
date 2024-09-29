'use-strict'

const gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['politic', 'cat'] },
  { id: 2, url: 'img/2.jpg', keywords: ['dog', 'happy'] },
  { id: 3, url: 'img/3.jpg', keywords: ['baby', 'dog'] },
  { id: 4, url: 'img/4.jpg', keywords: ['cat', 'funny'] },
  { id: 5, url: 'img/5.jpg', keywords: ['baby', 'angry'] },
  { id: 6, url: 'img/6.jpg', keywords: ['man', 'funny'] },
  { id: 7, url: 'img/7.jpg', keywords: ['baby', 'laugh'] },
  { id: 8, url: 'img/8.jpg', keywords: ['man', 'hat'] },
  { id: 9, url: 'img/9.jpg', keywords: ['baby', 'laugh'] },
  { id: 10, url: 'img/10.jpg', keywords: ['politic', 'man'] },
  { id: 11, url: 'img/11.jpg', keywords: ['kiss', 'man'] },
  { id: 12, url: 'img/12.jpg', keywords: ['serious', 'man'] },
  { id: 13, url: 'img/13.jpg', keywords: ['famous', 'actor'] },
  { id: 14, url: 'img/14.jpg', keywords: ['actor', 'famous'] },
  { id: 15, url: 'img/15.jpg', keywords: ['actor', 'famous'] },
  { id: 16, url: 'img/16.jpg', keywords: ['actors', 'famous'] },
  { id: 17, url: 'img/17.jpg', keywords: ['politic', 'famous'] },
  { id: 18, url: 'img/18.jpg', keywords: ['cartoon', 'funny'] },
]

let gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    { txt: 'hello', size: 30, color: 'white', x: 0, y: 50 },
    { txt: 'hello', size: 30, color: 'white', x: 0, y: 450 },
  ],
}
var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

function getMeme() {
  return gMeme
}
function getAllImages() {
  return gImgs
}
function setImg(id) {
  gMeme.selectedImgId = id
}
function downloadCanvas(elLink) {
  const dataUrl = gElCanvas.toDataURL()
  elLink.href = dataUrl
  elLink.download = 'my-img'
}

function deleteLine() {
  if (gMeme.lines.length === 0) return
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
  if (gMeme.lines.length === 0) {
    gMeme.selectedLineIdx = -1
  } else {
    gMeme.selectedLineIdx = Math.max(0, gMeme.selectedLineIdx - 1)
  }
}
//removes dupli
function getAllKeywords() {
  const allKeywords = gImgs.flatMap((img) => img.keywords)
  return [...new Set(allKeywords)]
}

function filterImagesByKeyword(keyword) {
  return gImgs.filter((img) => img.keywords.includes(keyword))
}
