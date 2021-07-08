const textarea = document.getElementById('textarea');
const tagsEL = document.getElementById('tags');

textarea.focus()
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value) //createTags is a function.which will take the input 

})
function createTags(input) {
    //console.log(input) // you can see the input in thr console 
    const tag = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) //split the inputs and store it into an array
    //console.log(tag) // can see the splitting in the console 
    console.log(tag)
}