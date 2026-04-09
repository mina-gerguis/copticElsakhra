"use client";
import { useTheme } from "@/lib/ThemeContext";
import React, { useState, useEffect, useCallback } from "react";
import navBar from "./Navbar.module.css";
import { BsHighlights, BsSun } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";

import Link from "next/link";

export default function Navbar() {

    const { toggleTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className={`${navBar.container} ${isVisible ? navBar.fixed : navBar.static}`}
            >
                <div className={navBar.containerInner}>
                    {/* Logo */}
                    <div className={navBar.logo}>
                        <Link href="/">
                            <span className={navBar.logoText}>الصخرة</span>
                        </Link>
                    </div>
                    {/* Buttons Right */}
                    <div className={navBar.butsRight}>
                        {/* Dark Mood */}
                        <button onClick={toggleTheme} className={navBar.themeToggle}>
                            <BsHighlights />
                        </button>
                        <span className={navBar.dot}>|</span>
                        {/* Language Switch */}

                        <span className={navBar.dot}>|</span>
                        {/* Github */}

                        <span className={navBar.dot}>|</span>
                        {/* Linkedin */}
                        <a
                            className={navBar.linkedin}
                            href="https://www.linkedin.com/in/mina-gerguis"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                            <span>1k</span>
                        </a>
                        <span className={`${navBar.dot} ${navBar.dotEnd}`} >|</span>
                        <button
                            className={navBar.butContact}
                            onClick={() => {
                                window.location.href = 'mailto:mina_gerguis@hotmail.com';
                            }}
                        >
                            dd

                            <BsSendFill
                                size={12}
                                style={{
                                    margin: "0 0 0 5px"
                                }}
                            />

                        </button>
                    </div>
                </div>
            </div>
            {/* Bubble Menu */}
            <div>

            </div>
        </>
    );
}