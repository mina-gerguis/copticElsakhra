'use client';
import Image from "next/image";
import { useState } from "react";
import styles from "./dailyVerse.module.css";

const showVerse = [
    "تَوَكَّلْ عَلَى الرَّبِّ بِكُلِّ قَلْبِكَ، وَعَلَى فَهْمِكَ لاَ تَعْتَمِدْ. (أمثال 3:5)",
    "تَوَكَّلْ عَلَى الرَّبِّ بِكُلِّ قَلْبِكَ، وَعَلَى فَهْمِكَ لاَ تَعْتَمِدْ. (أمثال 3:5)",
    "تَوَكَّلْ عَلَى الرَّبِّ بِكُلِّ قَلْبِكَ، وَعَلَى فَهْمِكَ لاَ تَعْتَمِدْ. (أمثال 3:5)",
];

function DailyVerse() {
    const [verse] = useState<string>(() => {
        return showVerse[Math.floor(Math.random() * showVerse.length)];
    });

    return (
        <section className={styles.verseSection}>
            <div className={styles.container}>
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
                        هذه الآية لك أنت{" "}
                        <i
                            className="bx bx-smile"
                            style={{ color: "#f50062", transform: "rotate(-40deg)" }}
                        />
                    </h2>

                    <p className={styles.verse}>{verse}</p>
                </div>
            </div>
        </section>
    );
}

export default DailyVerse;