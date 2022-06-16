let container = document.querySelector('.container')

let sizeNum;

// Remove all child elements
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// Get random number
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
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
  
        let randomColor = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`

        divCol.setAttribute('style', `height: ${heightPercent}%; background-color: ${randomColor}; opacity: 0`)
    
        divCol.addEventListener('mouseover', function() {
          if (this.style.opacity < 1) {
            let opacity = parseFloat(this.style.opacity) + 0.1

            this.style.opacity = `${opacity}`
            console.log(this.style.opacity)
          }
        })
    
        divRow.appendChild(divCol)
      }
      container.appendChild(divRow)
    }
  }
})