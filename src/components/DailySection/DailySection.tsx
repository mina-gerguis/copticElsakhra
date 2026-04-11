'use client';

import styles from "./dailySection.module.css";
import Link from "next/link";

function getMonthShortName(monthIndex: number) {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return months[monthIndex];
}

export default function DailySection() {

    const today = new Date();

    const month = getMonthShortName(today.getMonth()).toLowerCase();
    const day = today.getDate();

    const formattedDate = `${month}-${day}`; return (
        <section className={styles.dailySection}>
            <div className={styles.content}>
                <h6>سنكسار .. وفعاليات .. ومسابقات</h6>

                <h4>سنكسار مع سؤال وترشيحات اليوم</h4>

                <Link href={`/daily/${formattedDate}`}>
                    عرض محتوى اليوم
                </Link>
            </div>
        </section>
    );
}