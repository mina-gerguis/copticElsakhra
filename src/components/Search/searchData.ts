import { IconType } from "react-icons"
import {
  FaRocket,
  FaWpforms,
  FaDownload,
  FaPuzzlePiece,
  FaPalette
} from "react-icons/fa"

import {
  MdDarkMode
} from "react-icons/md"

import {
  HiOutlineGlobeAlt
} from "react-icons/hi"


export type SearchItem = {
  title: string
  path: string
  icon: IconType
}

export type SearchCategory = {
  category: string
  items: SearchItem[]
}

export const SEARCH_DATA: SearchCategory[] = [
  {
    category: "الصفحات",
    items: [
      { title: "العهد الجديد", path: "/getting-started", icon: FaRocket },
      { title: "Forms", path: "/forms", icon: FaWpforms },
      { title: "Installation", path: "/installation", icon: FaDownload },
    ]
  },

  {
    category: "الخدمات",
    items: [
      { title: "Registry", path: "/registry", icon: FaPuzzlePiece },
      { title: "Dark Mode", path: "/dark-mode", icon: MdDarkMode },
      { title: "RTL", path: "/rtl", icon: HiOutlineGlobeAlt },
    ]
  },
]

