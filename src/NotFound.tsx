import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div>
            <div>
                <span>404</span>
                <span>Page Not Found</span>
                <Link to="/" aria-label="Go Back to Homepage">Get Back to HomePage</Link>
            </div>
        </div>
    )
}