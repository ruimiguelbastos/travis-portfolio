import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  const phoneNumber = import.meta.env.VITE_CREATOR_PHONE_NUMBER
  const email = import.meta.env.VITE_CREATOR_EMAIL
  const linkedIn = import.meta.env.VITE_CREATOR_LINKED_IN

  return (
    <footer id='contacts' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href={'tel:' + phoneNumber}>
            <img src={getImageUrl('contact/phoneIcon.png')} alt='Phone icon' style={{ filter: 'invert(1)' }} />
          </a>
          <a href={'tel:' + phoneNumber} className={styles.linkText}>
            {phoneNumber}
          </a>
        </li>
        <li className={styles.link}>
          <a href={'mailto:' + email}>
            <img src={getImageUrl('contact/emailIcon.png')} alt='Email icon' />
          </a>
          <a href={'mailto:' + email} className={styles.linkText}>
            {email}
          </a>
        </li>
        <li className={styles.link}>
          <a href={linkedIn}>
            <img src={getImageUrl('contact/linkedinIcon.png')} alt='LinkedIn icon' />
          </a>
          <a href={linkedIn} className={styles.linkText}>
            My LinkedIn Profile
          </a>
        </li>
      </ul>
    </footer>
  )
}
