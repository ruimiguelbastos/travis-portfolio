import { useState, useEffect, useRef } from 'react'
import { getImageUrlFromBackend } from '../../utils'

import styles from './Slider.module.css'

const delay = 2500

export const Slider = ({ images }) => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)), delay)

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshowSlider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((image, index) => (
          <div className={styles.slide} key={index}>
            <img className={styles.image} src={getImageUrlFromBackend(image.src)} alt={image.title} />
          </div>
        ))}
      </div>

      <div className={styles.slideshowDots}>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.slideshowDot} ${index === idx ? styles.active : ''}`}
            onClick={() => {
              setIndex(idx)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
