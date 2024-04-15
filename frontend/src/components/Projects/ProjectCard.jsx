import { Slider } from '../Slider/Slider'

import styles from './ProjectCard.module.css'

export const ProjectCard = ({ project: { id, title, images, description, tags } }) => {
  return (
    <div className={styles.container}>
      <Slider images={images} />
      <div className={styles.title}>
        <a href={`/projects/${id}`}>
          <h3>{title}</h3>
        </a>
      </div>
      <p className={styles.description}>{description}</p>
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
