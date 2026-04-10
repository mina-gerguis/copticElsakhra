import { FaGithubSquare, FaBehanceSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiFreedesktopdotorg, SiYoutubeshorts, SiLinktree } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from './Footer.module.css';

const Pages = [
  { name: "الكتاب المقدس", href: "#" },
  { name: "الاجبية", href: "#" },
  { name: "طقس الكنيسة", href: "#" },
  { name: "مدايح الشهداء", href: "#" },
  { name: "الترانيم", href: "#" }
];

const Info = [
  { name: "عن الموقع", href: "#" },
  { name: "الأنضمام للخدمة", href: "#"},
  { name: "التبرعات", href: "#"},
  { name: "الاقتراحات", href: "#"},
  { name: "مركز المساعدة", href: "#"},
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <p className={styles.heading}>
            قال بطرس الرسول ــ <br /> علي هذة الصخرة أبني  <br /> كنيستي.💒
          </p>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>الصفحات</h3>
            <ul className={styles.linkList}>
              {Pages.map((page, i) => (
                <li key={i}>
                  <a href={page.href} className={styles.link}>
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>روابط مهمة</h3>
            <ul className={styles.linkList}>
              {Info.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>تم التصميم والتطوير بواسطة  <a
          target="_blank"
          href="https://www.facebook.com/mongerguis">فريق الصخرة القبطية</a> .</p>
      </div>
    </footer>
  );
};

export default Footer;
