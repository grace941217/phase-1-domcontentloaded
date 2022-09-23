// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    updateDOM();
});

// function updateDOM() {
//     document.getElementById("text") 
//         .innerHTML = "This is really cool!";
// }

        
function updateDOM() {
    document.querySelector('p').textContent = "This is really cool!";
}
