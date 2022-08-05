const handler = document.querySelector(".handler");
const wrapper = handler.closest(".wrapper");
const boxA = wrapper.querySelector(".box");
let isHandlerDragging = false;

document.addEventListener("mousedown", function (e) {
    if (e.target === handler) {
        isHandlerDragging = true;
    }
});

document.addEventListener("mousemove", function (e) {
    if (!isHandlerDragging) {
        return false;
    }

    const containerOffsetLeft = wrapper.offsetLeft;

    const pointerRelativeXpos = e.clientX - containerOffsetLeft;

    // Arbitrary minimum width set on box A, otherwise its inner content will collapse to width of 0
    const boxAminWidth = 60;

    // Resize box A
    // * 8px is the left/right spacing between .handler and its inner pseudo-element
    // * Set flex-grow to 0 to prevent it from growing
    boxA.style.width = Math.max(boxAminWidth, pointerRelativeXpos - 8) + "px";
    boxA.style.flexGrow = 0;
});

document.addEventListener("mouseup", function (e) {
    isHandlerDragging = false;
});
