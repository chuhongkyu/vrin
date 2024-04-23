import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
import Section05 from "./Section05";
import Section06 from "./Section06";
import Section07 from "./Section07";

function ScrollContainer() {
    
    return(
        <>
            {/* first-section */}
            <Section01/>
            {/* video-section */}
            <Section02/>
            <Section03/>
            <Section04/>
            {/* static-section */}
            <Section05/>
            <Section06/>
            <Section07/>
        </>
    )
}

export default ScrollContainer;