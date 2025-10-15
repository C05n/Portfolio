import Link from "next/link";
import style from './profiles.module.css';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Profiles ({ isVisible }) {
   if (!isVisible) return null;
   return (
      <section className={style.profiles_container}>
         <Link href="https://github.com/C05n" target="_blank" className={style.profiles_container_icon}>
            <IoLogoGithub size="100%" />
         </Link>
         <Link href="https://linkedin.com/in/c05n" target="_blank" className={style.profiles_container_icon}>
            <IoLogoLinkedin size="100%" />
         </Link>
      </section>
   )
}
