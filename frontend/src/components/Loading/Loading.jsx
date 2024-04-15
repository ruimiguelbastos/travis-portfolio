import styles from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.screenFiller}>
      <section className={styles.container}>
        <div className={styles.margin}></div>
        <div className={styles.content}>
          <div className={styles.loader}></div>
        </div>
      </section>
    </div>
  )
}
