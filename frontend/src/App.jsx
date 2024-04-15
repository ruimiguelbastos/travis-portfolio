import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Contact } from './components/Contact/Contact'
import { Homepage } from './components/Homepage/Homepage'
import { Projects } from './components/Projects/Projects'
import { ProjectDetail } from './components/Projects/ProjectDetail'

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/interior-design' element={<Projects category='INTERIOR_DECORATION' title='Interior Design' />} />
          <Route exact path='/weddings-events' element={<Projects category='WEDDING' title='Weddings and Events' />} />
          <Route exact path='/flower-arrangements' element={<Projects category='FLOWERS' title='Flower Arrangements' />} />
          <Route exact path='/handcraft' element={<Projects category='HANDCRAFT' title='Handcraft' />} />
          <Route exact path='/projects/:projectId' element={<ProjectDetail />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  )
}

export default App
