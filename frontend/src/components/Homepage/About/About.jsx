import styles from './About.module.css'
import { Skill } from './Skill'

export default function About({ skills = [] }) {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>Services</h2>
      <div className={styles.content}> 
        <ul id='aboutItems' className={styles.aboutItems}>
          {skills.map((skill) => {
            return <Skill skill={skill} key={skill.id} />
          })}
        </ul>
      </div>
    </section>
  )
}
