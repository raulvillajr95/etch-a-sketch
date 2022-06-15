let container = document.querySelector('.container')

let sizeNum;

// Remove all child elements
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

let sizeBtn = document.querySelector('.size')

sizeBtn.addEventListener('click', () => {
  let size = prompt('Pick a size for your grid:')

  sizeNum = parseInt(size);

  removeAllChildNodes(container)

  let heightPercent = 100 / sizeNum;

  if (sizeNum > 100 || sizeNum < 1) {
    alert('Please enter number from 1 to 100')
  } else {
    for (let i = 1; i <= sizeNum; i++) {
      let divRow = document.createElement('div')
  
      for (let j = 1; j <= sizeNum; j++) {
        let divCol = document.createElement('div')
  
        divCol.setAttribute('style', `height: ${heightPercent}%`)
    
        divCol.addEventListener('mouseover', function() {
          this.classList.add('red')
        })
    
        divRow.appendChild(divCol)
      }
      container.appendChild(divRow)
    }
  }
})

/*
*/