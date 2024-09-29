'use strict'
function addEventListener() {
  const filterForm = document.querySelector('.filterForm')
  filterForm.addEventListener('submit', onFilterSubmit)

  const clearFilterBtn = document.querySelector('.clearFilter')
  clearFilterBtn.addEventListener('click', onClearFilter)
}
function renderKeywords() {
  const dataList = document.getElementById('keywords')
  console.log('datalist', dataList)
  const keywords = getAllKeywords()

  keywords.forEach((keyword) => {
    const option = document.createElement('option')
    option.value = keyword
    dataList.appendChild(option)
  })
}

function onFilterSubmit(event) {
  event.preventDefault()
  const keywordInput = document.querySelector('.keywordInput').value.trim()

  const filteredImages = keywordInput
    ? filterImagesByKeyword(keywordInput)
    : getAllImages()

  renderGallery(filteredImages)
}

function onClearFilter() {
  document.querySelector('.keywordInput').value = ''
  renderGallery(gImgs)
}
