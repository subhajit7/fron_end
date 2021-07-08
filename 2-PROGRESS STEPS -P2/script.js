const progress = document.getElementById('progress');//access the id of the parent div
const prev = document.getElementById('prev');//this is the button id previous
const next = document.getElementById('next');//this is the next button
const circles = document.querySelectorAll('.circle');//selects all circle and bring them all in a nodlist similar to an array

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++//when click increase the currentActive variable
    // console.log(currentActive)
    if (currentActive > circles.length)//if the currentActive is grater than the circles nodelist or array 
     {//to prevent the currentactive from cross the circle number adding this statement
        currentActive = circles.length//stops the increment in the last number of the circles array length
    }
    // console.log(currentActive)
    update()//calling the update function

})

prev.addEventListener('click', () => {
    currentActive--//when click decrease the currentActive variable
    // console.log(currentActive)
    if (currentActive < 1)//if the currentActive is less than 1
     {//to prevent the currentactive from cross the circle number adding this statement
        currentActive = 1//stops the decrement in the first number of the circles array length
    }
    // console.log(currentActive)
    update()//czlling the  update function

})

function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const active = document.querySelectorAll('.active')
    //  console.log(active.length, circles.length)
    progress.style.width = ((active.length - 1) / (circles.length - 1)) * 100 + '%'
    // console.log(((active.length -1 ) / (circles.length - 1)) * 100 + '%')
    if (currentActive === 1) {
        prev.disabled = true
    }else if (currentActive === circles.length) {
        next.disabled = true
    }else {
        prev.disabled = false
        next.disabled = false
    }
}

