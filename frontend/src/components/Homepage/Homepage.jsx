import { lazy, useState, useEffect } from 'react'
import axios from 'axios'

import { Loading } from '../Loading/Loading'
const About = lazy(() => import('./About/About'))
const Person = lazy(() => import('./Person/Person'))

export const Homepage = () => {
  const url = import.meta.env.VITE_BASE_URI
  const [homePageData, setData] = useState(null)

  const fetchInfo = async () => {
    return axios.get(url).then((res) => setData(res.data))
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  if (!homePageData) {
    return <Loading />
  }

  return (
    <div>
      <Person data={homePageData} />
      <About skills={homePageData.skills ?? []} />
    </div>
  )
}
