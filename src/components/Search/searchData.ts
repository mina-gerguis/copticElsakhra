import { IconType } from "react-icons";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GiCalendarHalfYear, GiSplitCross } from "react-icons/gi";
import { FaBookMedical, FaCross } from "react-icons/fa";

import { FaRocket, FaWpforms, FaDownload, FaPuzzlePiece } from "react-icons/fa";

import { MdDarkMode } from "react-icons/md";

import { HiOutlineGlobeAlt } from "react-icons/hi";

export type SearchItem = {
  title: string;
  path: string;
  icon: IconType;
};

export type SearchCategory = {
  category: string;
  items: SearchItem[];
};

export const SEARCH_DATA: SearchCategory[] = [
  {
    category: "الأجبية",
    items: [
      {
        title: "صلوات السواعي",
        path: "/getting-started",
        icon: MdOutlineAccessTimeFilled,
      },
      {
        title: "الإبصلمودية السنوية",
        path: "/forms",
        icon: GiCalendarHalfYear,
      },
      {
        title: "الإبصلمودية الكيهكية",
        path: "/installation",
        icon: FaBookMedical,
      },
      {
        title: "دلال أسبوع الالام",
        path: "/installation",
        icon: FaCross,
      },
      {
        title: "السنكسار",
        path: "/installation",
        icon: GiSplitCross,
      },
    ],
  },
  {
    category: "الصفحات",
    items: [
      { title: "العهد الجديد", path: "/getting-started", icon: FaRocket },
      { title: "Forms", path: "/forms", icon: FaWpforms },
      { title: "Installation", path: "/installation", icon: FaDownload },
    ],
  },

  {
    category: "الصفحات",
    items: [
      { title: "العهد الجديد", path: "/getting-started", icon: FaRocket },
      { title: "Forms", path: "/forms", icon: FaWpforms },
      { title: "Installation", path: "/installation", icon: FaDownload },
    ],
  },

  {
    category: "الخدمات",
    items: [
      { title: "Registry", path: "/registry", icon: FaPuzzlePiece },
      { title: "Dark Mode", path: "/dark-mode", icon: MdDarkMode },
      { title: "RTL", path: "/rtl", icon: HiOutlineGlobeAlt },
    ],
  },
];
