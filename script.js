// Mouse move effect for floating element
document.addEventListener("mousemove", function(event) {
    let floatElement = document.querySelector(".floating-element");
    floatElement.style.transform = `translate(${event.clientX - 25}px, ${event.clientY - 25}px)`;
});
