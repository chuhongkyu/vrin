function lockScroll() {
    document.body.style.overflow = "hidden"
}
  
function unlockScroll() {
    document.body.style.overflow = "unset"
}

export { lockScroll, unlockScroll}