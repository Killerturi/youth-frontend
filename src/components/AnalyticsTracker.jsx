import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPage } from "../utils/analytics";

function AnalyticsTracker() {

    const location = useLocation();

    useEffect(() => {
        trackPage(location.pathname);
    }, [location]);

    return null;
}

export default AnalyticsTracker;