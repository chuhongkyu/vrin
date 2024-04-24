function lockScroll() {
    document.body.style.overflow = "hidden"
}
  
function unlockScroll() {
    document.body.style.overflow = "unset"
}

function setCookie() {
    const today = new Date();
    const todayDate = today.getDate();
    const tomorrow = new Date(today.setDate(todayDate + 1));
    document.cookie = `ces_cookie=true; path=/; expires=${tomorrow.toUTCString()}; secure`;
}

export { lockScroll, unlockScroll, setCookie}