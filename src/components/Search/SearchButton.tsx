"use client"

import { useEffect, useState } from "react"
import { MdKeyboardCommandKey } from "react-icons/md";
import styles from "../Navbar/Navbar.module.css"
import SearchOverlay from "./SearchOverlay"

export default function SearchButton() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault()
                setOpen(true)
            }
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [])

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className={styles.searchButton}
            >
                <span style={{
                    fontFamily: "Cairo, sans-serif",
                    fontSize: "14px",
                    color: "var(--searchColor)",
                    flex: "1",
                    textAlign: "right"
                }} >
                    عن ماذا تبحث ..؟
                </span>

                <span style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "11px",
                    border: "1px solid var(--buttonBorder)",
                    padding: "3px 7px",
                    borderRadius: "5px",
                    color: "var(--searchColor)"
                }}>
                    K <MdKeyboardCommandKey size={14} />
                </span>
            </button >

            <SearchOverlay
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    )
}
