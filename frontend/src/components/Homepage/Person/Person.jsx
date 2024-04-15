import styles from './Person.module.css'
import { getImageUrl } from '../../../utils'

export default function Person({ data: { title, description } }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <a className={styles.contactBtn} href={'mailto:' + import.meta.env.VITE_CREATOR_EMAIL}>
          Contact me!
        </a>
      </div>
      <img src={getImageUrl('hero/heroImage.png')} alt='Avatar' className={styles.avatarImg} />
    </section>
  )
}
