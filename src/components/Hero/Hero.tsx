import Image from 'next/image';
import clsx from 'clsx';
import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={clsx(styles.introduction, 'animate__animated', 'animate__fadeIn')}>
            <div className={styles.image}>
                <Image
                    src="/introduction.jpg"
                    alt=""
                    style={{ borderRadius: '15px' }}
                    width={340}
                    height={340}
                />
            </div>
            <div className={styles.title}>
                <div className={styles.titleHead}>
                    باسم الآب والابن والروح القدس، الإله الواحد، آمين ✝️
                </div>
                <h2>موقع الصخرة القبطية</h2>
                <p>دليل المسيحية اﻷرثوذكسية - عقيدة الاقباط</p>
                <div className={styles.titleSecond}>
                    <p>الصخرة القبطية الأرثوذكسية ✝️🤍</p>
                    <p>الكرازة بإسم يسوع المسيح 👑❤️</p>
                    <p>علَى هذِهِ الصَّخرَةِ أبني كنيسَتي ( متى ١٦ : ١٨ ) ⛪</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;