'use-strict'

const gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, url: 'img/2.jpg', keywords: ['baby', 'funny'] },
  { id: 3, url: 'img/3.jpg', keywords: ['baby', 'funny'] },
  { id: 4, url: 'img/4.jpg', keywords: ['baby', 'funny'] },
  { id: 5, url: 'img/5.jpg', keywords: ['baby', 'funny'] },
]

let gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [{ txt: 'Enter your text', size: 20, color: 'red' }],
}
