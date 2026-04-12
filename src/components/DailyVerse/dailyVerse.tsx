'use client';
import Image from "next/image";
import { useState } from "react";
import styles from "./dailyVerse.module.css";
import { dailyContent } from "@/content/daily";
import ShinyText from "@/components/ShinyText/ShinyText";
import Link from "next/link";

// ! : Daily Verse
const showVerse = [
    "تَوَكَّلْ عَلَى الرَّبِّ بِكُلِّ قَلْبِكَ، وَعَلَى فَهْمِكَ لاَ تَعْتَمِدْ. (أمثال 3:5)",
    "لأَنَّ الرَّبَّ هُوَ إِلَهُ الْحَقِّ، وَهُوَ يَحْدِثُ الْمَعْرِفَةَ وَالْحِكْمَةَ لِلصِّدِّيقِينَ. (دانيال 2:21)",
];

// ! : Function to get month short name (e.g., Jan, Feb, Mar, etc.) ==> Daily Synaxarium
function getMonthShortName(monthIndex: number) {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return months[monthIndex];
}

function DailyVerse() {
    // ? : Get a random verse from the showVerse array
    const [verse] = useState<string>(() => {
        return showVerse[Math.floor(Math.random() * showVerse.length)];
    });
    // ? : Get today's date and format it as "month-day" (e.g., "jan-12") to fetch the corresponding content from dailyContent ==> Daily Synaxarium
    const today = new Date();
    const month = getMonthShortName(today.getMonth()).toLowerCase();
    const day = today.getDate();
    const formattedDate = `${month}-${day}`;
    const todayContent = dailyContent[formattedDate];
    return (
        // * : Daily Verse Component
        <div className={styles.container}>
            <div className={styles.content}>
                {/* : Verse Section */}
                <div className={styles.verseSection}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src="/assets/dailyVerseImage.png"
                            width={250}
                            height={250}
                            alt=""
                        />
                    </div>
                    <div className={styles.verses}>
                        <h2 className={styles.title}>
                            هذه الآية لك أنت
                        </h2>
                        <p className={styles.verse}>{verse}</p>
                    </div>
                </div>
                {/* : Daily Synaxarium Section */}
                <div className={styles.dailySection}>
                    <div className={styles.dailyContent}>
                        <div className={styles.flex}>
                        <p className={styles.mainTitle}>
                            <ShinyText
                                text="السنكسار اليومي ⚡"
                                speed={2}
                                delay={0}
                                color="var(--themeEl)"
                                shineColor="var(--themeBg)"
                                spread={120}
                                direction="right"
                                yoyo={false}
                                pauseOnHover={false}
                                disabled={false}
                            />
                        </p>

                        <p className={styles.contentText}>نحتفل اليوم بذكرى <span className={styles.dot}>:</span></p>
                        </div>
                        <Link href={`/daily/${formattedDate}`} className={styles.contentLink}>
                            {todayContent ? todayContent.title : "📭 لا يوجد محتوى اليوم"}
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DailyVerse;