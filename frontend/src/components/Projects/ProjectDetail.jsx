import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { Slider } from '../Slider/Slider'
import { Loading } from '../Loading/Loading'

import styles from './ProjectDetail.module.css'

export const ProjectDetail = () => {
  const { projectId } = useParams()
  const url = import.meta.env.VITE_BASE_URI + '/projects/' + projectId
  const [projectDetail, setData] = useState(null)

  const fetchInfo = async () => {
    return axios.get(url).then((res) => setData(res.data))
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  if (!projectDetail) {
    return <Loading />
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Slider images={projectDetail.images} />
      </div>

      <p className={styles.title}>{projectDetail.title}</p>
      <p className={styles.description}>{projectDetail.description}</p>
      <ul className={styles.tags}>
        {projectDetail.tags.map((tag) => {
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
