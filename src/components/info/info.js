import style from "./info.module.css"

export default function Info() {
   return (
      <div className={style.info_container}>
         <h1 className={style.info_container_title}>Cedric Erhard</h1>
         <h2 className={style.info_container_subtitle}>Développeur front-end</h2>
      </div>
   );
}