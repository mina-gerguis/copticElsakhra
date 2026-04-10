"use client";

import { useState } from "react";
import styles from "./Bible.module.css";
import Image from 'next/image';
import Link from "next/link";
import { GrAppsRounded } from "react-icons/gr";

import Navbar from "@/components/Navbar/Navbar";


const oldBooks = [
    { name: "تكوين", img: "1.jpg" },
    { name: "خروج", img: "2.jpg" },
    { name: "لاويين", img: "3.jpg" },
    { name: "عدد", img: "4.jpg" },
    { name: "تثنية", img: "5.jpg" },
    { name: "يشوع", img: "6.jpg" },
    { name: "قضاة", img: "7.jpg" },
    { name: "راعوث", img: "8.jpg" },
    { name: "صموئيل الأول", img: "9.jpg" },
    { name: "صموئيل الثاني", img: "10.jpg" },
    { name: "ملوك الأول", img: "11.jpg" },
    { name: "ملوك الثاني", img: "12.jpg" },
    { name: "أخبار الأيام الأول", img: "13.jpg" },
    { name: "أخبار الأيام الثاني", img: "14.jpg" },
    { name: "عزرا", img: "15.jpg" },
    { name: "نحميا", img: "16.jpg" },
    { name: "استير", img: "17.jpg" },
    { name: "أيوب", img: "18.jpg" },
    { name: "مزامير", img: "19.jpg" },
    { name: "أمثال", img: "20.jpg" },
    { name: "جامعة", img: "21.jpg" },
    { name: "نشيد الأنشاد", img: "22.jpg" },
    { name: "إشعياء", img: "23.jpg" },
    { name: "إرميا", img: "24.jpg" },
    { name: "مراثي إرميا", img: "25.jpg" },
    { name: "حزقيال", img: "26.jpg" },
    { name: "دانيال", img: "27.jpg" },
    { name: "هوشع", img: "28.jpg" },
    { name: "يوئيل", img: "29.jpg" },
    { name: "عاموس", img: "30.jpg" },
    { name: "عوبديا", img: "31.jpg" },
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
                                عدد الاسفار : <span>46</span>
                                عدد الأصحاحات : <span>929</span>
                            </p>
                        </div>
                        <div onClick={() => setShowAllOld(!showAllOld)}>
                            <GrAppsRounded className={styles.icon} />
                        </div>
                    </div>

                    <div className={styles.old}>
                        <div className={`${styles.bibleContainer} ${showAllOld ? styles.showAll : ""
                            }`}>
                            {oldBooks.map((book, i) => (
                                <Link key={i} href={`/old_bible/${book.name}/0`} className={styles.box}>
                                    <div className={styles.image}>
                                        <Image
                                            src={`/assets/Bible/oldCover/${book.img}`}
                                            alt={book.name}
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* العهد الجديد */}
                    <div className={styles.head}>
                        <div className={styles.title}>
                            <h3>العهد الجديد</h3>
                            <p>
                                عدد الاسفار : <span>27</span>
                                عدد الأصحاحات : <span>260</span>
                            </p>
                        </div>
                        <div onClick={() => setShowAllNew(!showAllNew)}>
                            <GrAppsRounded className={styles.icon} />
                        </div>
                    </div>

                    <div className={styles.new}>
                        <div className={`${styles.bibleContainer} ${showAllNew ? styles.showAll : ""
                            }`}>

                            {newBooks.map((book, i) => (
                                <Link key={i} href={`/new_bible/${book.name}/0`} className={styles.box}>
                                    <div className={styles.image}>
                                        <Image
                                            src={`/assets/Bible/newCover/${book.img}`}
                                            alt={book.name}
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BiblePage;