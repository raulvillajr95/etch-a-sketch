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
          //this.classList.add('red')
          //this.setAttribute('style', `height: ${heightPercent}%; background-color: rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`)
          //this.style.backgroundColor = `${randomColor}`
          // console.log(this.style.opacity)
          // this.style.opacity = toString(parseFloat(this.style.opacity) + 0.1)
          // console.log(this.style.opacity)
          // this.style.opacity = toString(this.style.opacity + 0.1)
          // console.log(this.style.opacity)

          let opacity = parseFloat(this.style.opacity) + 0.1

          this.style.opacity = `${opacity}`
        })
    
        divRow.appendChild(divCol)
      }
      container.appendChild(divRow)
    }
  }
})

/*
-make it so the new random background color only happens once
  I could assign it a random color from the start and display none
  When I mouse over it displays
-every time mouse is over, the opacity goes up by 10% 
  assing random color from the start
  every mouse over the 'a' in rgba gets upped one
*/