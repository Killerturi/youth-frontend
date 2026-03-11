import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-S6XP9VF7BD");
};

export const trackPage = (path) => {
    ReactGA.send({
        hitType: "pageview",
        page: path,
    });
};