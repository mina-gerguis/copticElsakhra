"use client";

import { useState } from "react";
import styles from "./Bible.module.css";
import Image from 'next/image';
import Link from "next/link";
import { GrAppsRounded } from "react-icons/gr";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const oldBooks = [
    { name: "تكوين", link: "o1", img: "1.jpg" },
    { name: "خروج", link: "o2", img: "2.jpg" },
    { name: "لاويين", link: "o3", img: "3.jpg" },
    { name: "عدد", link: "o4", img: "4.jpg" },
    { name: "تثنية", link: "o5", img: "5.jpg" },
    { name: "يشوع", link: "o6", img: "6.jpg" },
    { name: "قضاة", link: "o7", img: "7.jpg" },
    { name: "راعوث", link: "o8", img: "8.jpg" },
    { name: "صموئيل الأول", link: "o9", img: "9.jpg" },
    { name: "صموئيل الثاني", link: "o10", img: "10.jpg" },
    { name: "ملوك الأول", link: "o11", img: "11.jpg" },
    { name: "ملوك الثاني", link: "o12", img: "12.jpg" },
    { name: "أخبار الأيام الأول", link: "o13", img: "13.jpg" },
    { name: "أخبار الأيام الثاني", link: "o14", img: "14.jpg" },
    { name: "عزرا", link: "o15", img: "15.jpg" },
    { name: "نحميا", link: "o16", img: "16.jpg" },
    { name: "استير", link: "o17", img: "17.jpg" },
    { name: "أيوب", link: "o18", img: "18.jpg" },
    { name: "مزامير", link: "o19", img: "19.jpg" },
    { name: "أمثال", link: "o20", img: "20.jpg" },
    { name: "جامعة", link: "o21", img: "21.jpg" },
    { name: "نشيد الأنشاد", link: "o22", img: "22.jpg" },
    { name: "إشعياء", link: "o23", img: "23.jpg" },
    { name: "إرميا", link: "o24", img: "24.jpg" },
    { name: "مراثي إرميا", link: "o25", img: "25.jpg" },
    { name: "حزقيال", link: "o26", img: "26.jpg" },
    { name: "دانيال", link: "o27", img: "27.jpg" },
    { name: "هوشع", link: "o28", img: "28.jpg" },
    { name: "يوئيل", link: "o29", img: "29.jpg" },
    { name: "عاموس", link: "o30", img: "30.jpg" },
    { name: "عوبديا", link: "o31", img: "31.jpg" },
]

const newBooks = [
    { name: "متى", img: "1.jpg" },
    { name: "مرقس", img: "2.jpg" },
    { name: "لوقا", img: "3.jpg" },
    { name: "يوحنا", img: "4.jpg" },
    { name: "أعمال الرسل", img: "5.jpg" },
    { name: "الرسالة إلى الأهل", img: "6.jpg" },
    { name: "الرسالة إلى العبرانيين", img: "7.jpg" },
    { name: "الرسالة إلى التيموثي الأول", img: "8.jpg" },
    { name: "الرسالة إلى التيموثي الثاني", img: "9.jpg" },
    { name: "الرسالة إلى تيطس", img: "10.jpg" },
    { name: "الرسالة إلى فيليبسيين", img: "11.jpg" },
    { name: "الرسالة إلى كولسيين", img: "12.jpg" },
    { name: "الرسالة إلى غلاسيين", img: "13.jpg" },
    { name: "الرسالة إلى إشمونية", img: "14.jpg" },
    { name: "الرسالة إلى تيموثي الأول", img: "15.jpg" },
    { name: "الرسالة إلى تيموثي الثاني", img: "16.jpg" },
    { name: "الرسالة إلى تيطس", img: "17.jpg" },
    { name: "الرسالة إلى فيليبسيين", img: "18.jpg" },
    { name: "الرسالة إلى كولسيين", img: "19.jpg" },
    { name: "الرسالة إلى غلاسيين", img: "20.jpg" },
    { name: "الرسالة إلى إشمونية", img: "21.jpg" }
];


function BiblePage() {
    const [showAllOld, setShowAllOld] = useState(false);
    const [showAllNew, setShowAllNew] = useState(false);


    return (
        <div className={styles.page}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.bg}>
                    <Image
                        src="/assets/Bible/bibleBg.jpg"
                        alt="الكتاب المقدّس"
                        className={styles.bgImage}
                        width={1920}
                        height={1080}
                    />
                </div>



                {/*! */}

                <div className={styles.content}>
                    {/* العهد القديم */}
                    <div className={styles.head}>
                        <div className={styles.title}>
                            <h3>العهد القديم</h3>
                            <p>
                                يتكون من 46 سفراً، ويحتوي على 929 أصحاحاً.
                            </p>
                        </div>
                        <div onClick={() => setShowAllOld(!showAllOld)}>
                            <GrAppsRounded className={styles.icon} />
                        </div>
                    </div>

                    <div className={`${styles.bibleContainer} ${showAllOld ? styles.showAll : ""
                        }`}>
                        {oldBooks.map((book, i) => (
                            <Link key={i} href={`../Bible/book/old/${book.link}`} className={styles.box}>
                                <Image
                                    className={styles.image}
                                    src={`/assets/Bible/oldCover/${book.img}`}
                                    alt={book.name}
                                    width={200}
                                    height={200}
                                    blurDataURL="data:image/jpeg;base64,..."
                                    placeholder="blur"
                                />
                            </Link>
                        ))}
                    </div>

                    {/* العهد الجديد */}
                    <div className={styles.head}>
                        <div className={styles.title}>
                            <h3>العهد الجديد</h3>
                            <p>
                                يحتوي علي 27 انجيل و 260 اصحاحاً.
                            </p>
                        </div>
                        <div onClick={() => setShowAllNew(!showAllNew)}>
                            <GrAppsRounded className={styles.icon} />
                        </div>
                    </div>

                    <div className={`${styles.bibleContainer} ${showAllNew ? styles.showAll : ""
                        }`}>

                        {newBooks.map((book, i) => (
                            <Link key={i} href={`/new_bible/${book.name}/0`} className={styles.box}>
                                <Image
                                    className={styles.image}
                                    src={`/assets/Bible/newCover/${book.img}`}
                                    alt={book.name}
                                    width={200}
                                    height={200}
                                    blurDataURL="data:image/jpeg;base64,..."
                                    placeholder="blur"
                                />
                            </Link>
                        ))}

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BiblePage;