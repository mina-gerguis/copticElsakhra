"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { BsHighlights, BsSun } from "react-icons/bs";
import styles from "./Navbar.module.css";
import SearchButton from "../Search/SearchButton";
import { useTheme } from "@/lib/ThemeContext";
import { BsBook, BsJournalText, BsPlayCircle, BsPencilSquare, BsLifePreserver } from "react-icons/bs";
import { Button } from "@/components/ui/button"

const navItems = [
    { label: "الكتاب المقدّس", href: "/products", icon: <BsBook /> },
    { label: "الاجبية", href: "/services", icon: <BsJournalText /> },
    { label: "الميديا", href: "/blog", icon: <BsPlayCircle /> },
    { label: "المدونة", href: "/about", icon: <BsPencilSquare /> },
    { label: "مركز المساعدة", href: "/contact", icon: <BsLifePreserver /> },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeMobile = useCallback(() => setMobileOpen(false), []);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);



    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    {/*Logo */}
                    <div className={styles.rightGroup}>
                        <Link href="/" className={styles.logo}>
                            الصخرة
                        </Link>

                        {/* Center: Nav Links */}
                        <ul className={styles.navLinks}>
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className={styles.navLink}>
                                        <span className={styles.icon}>{item.icon}</span>
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Left Side: Search + Dark Mode + Hamburger */}
                    <div className={styles.leftGroup}>
                        <div className={styles.buttonGroup}>
                            <button onClick={toggleTheme} className={styles.themeToggle}>
                                {theme === "dark" ? <BsSun /> : <BsHighlights />}
                            </button>
                            <div className={styles.desktopSearchButton}>
                                <SearchButton />
                            </div>
                        </div>
                        <button
                            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
                            aria-expanded={mobileOpen}
                        >
                            <span className={styles.hamburgerLine} />
                            <span className={styles.hamburgerLine} />
                            <span className={styles.hamburgerLine} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay */}
            <div
                className={`${styles.overlay} ${mobileOpen ? styles.overlayVisible : ""}`}
                onClick={closeMobile}
                aria-hidden="true"
            />

            {/* Mobile Menu */}
            <div
                className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
                dir="rtl"
                role="dialog"
                aria-modal={mobileOpen}
                aria-label="قائمة التنقل"
            >

                <ul className={styles.mobileNavLinks}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={styles.mobileNavLink}
                                onClick={closeMobile}
                            >
                                <span className={styles.icon}>{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                    <div className={styles.mobileSearchButton}>
                        <SearchButton/>
                    </div>
                </ul>
            </div>
        </>
    );
}
