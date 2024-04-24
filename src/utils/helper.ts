import { useEffect, useState } from "react";

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


function useCheckwViewPort(maxWidth: number) {
    const [width, setWidth] = useState<boolean>(window.innerWidth < maxWidth);
  
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth < maxWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [maxWidth]);

    return width;
}

export { lockScroll, unlockScroll, setCookie, useCheckwViewPort}