import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";


const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);


    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <div className="relative">

            {showTopBtn && (
                <FaAngleDoubleUp
                    className="sm:fixed sm:right-24 sm:bottom-20 z-20 cursor-pointer animate-pulse hover:animate-bounce w-0 h-0 sm:w-14 sm:h-14 text-yellow-300 hover:text-yellow-400"
                    onClick={goToTop}
                />
            )}
        </div>
    );
};

export default ScrollToTop;