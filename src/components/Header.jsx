import { useEffect } from "react";
import "../scripts/israel-landing-header.js";
import "../scripts/israel-wa-widget";

const Header = () => {
    useEffect(() => {
        if (typeof window.mountHeader === "function") {
            const waWidget = window.mountWaWidget("#wa-widget", { fixed: true });

            mountHeader("#header", "israel", {  
                disableBottomPanel: true,
                hideMenu: true,
                tool: "eye",
                onToolClick: () => waWidget.open(),
                actionButton: {
                    title: "Explore",
                    tagName: "a",
                    href: "https://tripleten.com/",
                    className: "custom-action-button",
                    newTab: true,
                },
            });
        }
    }, []);

    return (
        <>
            <header id="header" style={headerStyle}></header>
            <div id="wa-widget" data-v-app=""></div>
        </>
    );
};

const headerStyle = {
    height: "66px",
    backgroundColor: "#FF976B",
};

export default Header;
