import styles from './About.module.css'
import { getImageUrl } from '../../../utils'

export const Skill = ({ skill: { id, name, description } }) => {
  const iconMapper = {
    'Interior Decorator': 'about/furniture.png',
    'Wedding and event planner': 'about/wedding-arch.png',
    'Floral Design': 'about/flower-bouquet.png',
    Handcraft: 'about/wreath.png'
  }

  const urlMapper = {
    'Interior Decorator': '/interior-design',
    'Wedding and event planner': '/weddings-events',
    'Floral Design': '/flower-arrangements',
    Handcraft: '/handcraft'
  }

  return (
    <li key={id} className={styles.aboutItem}>
      <div className={styles.image}>
        <img src={getImageUrl(iconMapper[name])} alt={name} />
      </div>
      <div className={styles.aboutItemText}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.btn}>
        <img src={getImageUrl('about/right-arrow.png')} alt='View Projects' />
        <a href={urlMapper[name]}>Projects</a>
      </div>
    </li>
  )
}
