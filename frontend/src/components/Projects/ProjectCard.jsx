import { Slider } from '../Slider/Slider'

import styles from './ProjectCard.module.css'

export const ProjectCard = ({ project: { id, title, images, description, tags } }) => {
  return (
    <div className={styles.container}>
      <Slider images={images} />
      <div className={styles.infoSection}>
          <a href={`/projects/${id}`}>
            <p className={styles.title}>{title}</p>
          </a>
        <p className={styles.description}>{description}</p>
      </div>
      <ul className={styles.tags}>
          {tags.map((tag) => {
            return (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            )
          })}
        </ul>
    </div>
  )
}
