"use client"

import { useEffect, useState } from "react"
import { SEARCH_DATA } from "./searchData"
import styles from "./SearchOverlay.module.css"
import { Search } from "lucide-react"
import { MdKeyboardCommandKey } from "react-icons/md";
import { useRouter } from "next/navigation"

type Props = {
  open: boolean
  onClose: () => void
}

export default function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("")
  const router = useRouter()
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "x") {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  useEffect(() => {
    if (open) setQuery("")
  }, [open])

  if (!open) return null

  const filtered = SEARCH_DATA
    .map(cat => ({
      ...cat,
      items: cat.items.filter(i =>
        i.title.toLowerCase().includes(query.toLowerCase())
      )
    }))
    .filter(cat => cat.items.length > 0)

  const go = (path: string) => {
    router.push(path)
    onClose()
  }


  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <div className={styles.inputWrap}>

          <Search size={18} className={styles.searchIcon} />

          <input
            autoFocus
            placeholder="عن ماذا تبحث ..؟"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.input}
          />

          <button
            onClick={onClose}
            className={styles.closeBtn}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "11px",
              border: "1px solid var(--buttonBorder)",
              padding: "3px 7px",
              borderRadius: "5px",
              color: "var(--searchColor)",
              background: "transparent",
            }}
          >
            X <MdKeyboardCommandKey size={14} />
          </button>
        </div>


        <div className={styles.results}>
          {filtered.map(cat => (
            <div key={cat.category} className={styles.category}>

              <div className={styles.catTitle}>
                {cat.category}
              </div>

              {cat.items.map(item => {
                const Icon = item.icon

                return (
                  <button
                    key={item.title}
                    className={styles.item}
                    onClick={() => go(item.path)}
                  >
                    <span className={styles.icon}><Icon/></span>
                    <span>{item.title}</span>
                  </button>
                )
              })}

            </div>
          ))}

          {filtered.length === 0 && (
            <div className={styles.empty}>
              لا توجد نتائج
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
