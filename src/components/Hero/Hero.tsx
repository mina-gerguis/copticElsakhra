"use client";
import Image from 'next/image';
import styles from './Hero.module.css';
import ShinyText from '@/components/ShinyText/ShinyText';

import RotatingText from '@/components/RotatingText/RotatingText';
const items = [
    'assets/Hero/1.jpg',
    'assets/Hero/2.jpg',
    'assets/Hero/3.jpg',
    'assets/Hero/4.jpg',
    'assets/Hero/5.jpg',
];
function Hero() {
    return (
        <>
            <section className={styles.introduction}>
                {/* <div className={styles.image}>
                     <Image
                    src="/introduction.jpg"
                    alt=""
                    style={{ borderRadius: '15px' }}
                    width={340}
                    height={340}
                /> 
                </div> */}

                <div className={styles.imagesContainer}>
                    <RotatingText items={items}
                        planeWidth={320}
                        planeHeight={320}
                        distortion={3}
                        scrollEase={0.01}
                        cameraFov={45}
                        cameraZ={20}
                    />
                </div>
                <div className={styles.title}>
                    <div className={styles.titleHead}>
                        <ShinyText
                            text=" باسم الآب والابن والروح القدس، الإله الواحد، آمين ✨"
                            speed={2.3}
                            delay={1.4}
                            color="var(--themeEl)"
                            shineColor="var(--themeBg)"
                            spread={120}
                            direction="right"
                            yoyo={false}
                            pauseOnHover
                            disabled={false}
                        />
                    </div>
                    <h1 className={styles.mainTitle}>موقع الصخرة القبطية</h1>

                    <p className={styles.secondTitle}>دليل المسيحية اﻷرثوذكسية - عقيدة الاقباط</p>
                    <div className={styles.secondTitle}>
                        <p>الصخرة القبطية الأرثوذكسية ✝️🤍</p>
                        <p>الكرازة بإسم يسوع المسيح 👑❤️</p>
                        <p>علَى هذِهِ الصَّخرَةِ أبني كنيسَتي ( متى ١٦ : ١٨ ) ⛪</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;