'use strict'

renderGallery()

function renderGallery(images = gImgs) {
  const galleryContainer = document.querySelector('.grid-container')
  const imagesHTML = images
    .map((img) => {
      return `<img src="${img.url}" data-id="${img.id}" onclick="onSelectImg(this)" alt="meme image">`
    })
    .join('')

  galleryContainer.innerHTML = imagesHTML
}
