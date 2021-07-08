const boxes = document.querySelectorAll('.box')
 window.addEventListener('scroll', checkBoxes)

 checkBoxes() //remove this if don't want to show the boxes until you start scrolling

 function checkBoxes() {
     //console.log(window.innerHeight)
     const triggerBottom = window.innerHeight / 4 * 3
     boxes.forEach(box => {
         const boxTop = box.getBoundingClientRect().top
         if(boxTop < triggerBottom) {
             box.classList.add('show')
         } else{
             box.classList.remove('show')
         }
     })
 }