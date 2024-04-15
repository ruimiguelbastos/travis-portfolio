import { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './Projects.module.css'

import { ProjectCard } from './ProjectCard'
import { Loading } from '../Loading/Loading'

export const Projects = ({ category = undefined, title = 'Projects' }) => {
  const url = import.meta.env.VITE_BASE_URI + '/projects/'
  const [projects, setData] = useState(null)
  const [endedLoading, setEndedLoading] = useState(false)

  const buildUrl = () => {
    const params = category
      ? new URLSearchParams({
          category: category,
          offset: !projects ? 0 : projects.length,
          limit: (!projects ? 0 : projects.length) + 4
        })
      : new URLSearchParams({
          offset: !projects ? 0 : projects.length,
          limit: (!projects ? 0 : projects.length) + 4
        })

    return url + '?' + params.toString()
  }

  const fetchInfo = async () => {
    return axios.get(buildUrl()).then((res) => setData(res.data))
  }

  const handleScrollEvent = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !endedLoading && projects !== null) {
      window.removeEventListener('scroll', handleScrollEvent)

      axios.get(buildUrl()).then((res) => {
        setEndedLoading(res.data.length === 0)
        setData([...projects, ...res.data])
      })
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  useEffect(() => {
    handleScrollEvent()
  })

  if (!endedLoading) {
    window.addEventListener('scroll', handleScrollEvent)
  }

  if (!projects) {
    return <Loading />
  }

  return (
    <div>
      <section className={styles.container} id='projects'>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.row}>
          <div className={styles.projects}>
            {projects.length > 0 ? (
              projects.map((project, id) => {
                return <ProjectCard key={id} project={project} />
              })
            ) : (
              <h2>No Results</h2>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
