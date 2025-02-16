// script.js
document.addEventListener("mousemove", (e) => {
    let floatingElement = document.querySelector(".floating-element");
    
    let moveX = (e.clientX / window.innerWidth - 0.5) * 40;
    let moveY = (e.clientY / window.innerHeight - 0.5) * 40;
    
    floatingElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
