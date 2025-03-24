import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        const loadScripts = async () => {
            try {
                await loadScript("/js/israel-wa-widget.js", { type: "module" });
                await loadScript("/js/israel-landing-header.js");

                if (typeof window.mountWaWidget === "function" && typeof window.mountHeader === "function") {
                    const waWidget = window.mountWaWidget("#wa-widget", { fixed: true });

                    window.mountHeader("#header", "israel", {
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
            } catch (error) {
                console.error("Ошибка загрузки скриптов:", error);
            }
        };

        loadScripts();

        return () => {
            removeScript("/js/israel-wa-widget.js");
            removeScript("/js/israel-landing-header.js");
        };
    }, []);

    return (
        <>
            <header id="header" style={headerStyle}></header>
            <div id="wa-widget" data-v-app=""></div>
        </>
    );
};

const loadScript = (src, options = {}) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        Object.keys(options).forEach(key => script.setAttribute(key, options[key]));

        script.onload = resolve;
        script.onerror = reject;

        document.body.appendChild(script);
    });
};

const removeScript = (src) => {
    document.querySelectorAll(`script[src="${src}"]`).forEach(script => script.remove());
};

const headerStyle = {
    height: "66px",
    backgroundColor: "#FF976B",
};

export default Header;
