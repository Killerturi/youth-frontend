import { useEffect } from "react";

function GoogleReviews() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div
            className="sk-ww-google-reviews"
            data-embed-id="25660065"
        ></div>
    );
}

export default GoogleReviews;