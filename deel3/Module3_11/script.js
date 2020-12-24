//opdracht1
document.getElementById('mybutton').addEventListener('click', () => {
    alert('button clicked');
});
//opdracht2
document.getElementById('bgbutton').addEventListener('click', (e) => {
    e.target.parentElement.classList.add("blue-background");
});
//opdracht3
document.getElementById('bgbutton').addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle("red-background");
});
//opdracht3 (met een andere opvatting)
function toggleColor() {
    document.getElementById('bgbutton').addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle("red-background");
    });
};
toggleColor();