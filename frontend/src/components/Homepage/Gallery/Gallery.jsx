import styles from './Gallery.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { getImageUrl } from '../../../utils'

export const Gallery = () => {
  return (
    <section className={styles.container} id='gallery'>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.content}>
        <Carousel autoPlay interval='5000' transitionTime='1000' infiniteLoop className={styles.gallery}>
          <div>
            <img src={getImageUrl('gallery/christmas2.jpg')} alt='' />
            <p className='legend'>My Photo 1</p>
          </div>
          <div>
            <img src={getImageUrl('gallery/centerpiece1.jpg')} alt='' />
            <p className='legend'>My Photo 2</p>
          </div>
          <div>
            <img src={getImageUrl('gallery/christmas1.jpg')} alt='' />
            <p className='legend'>My Photo 2</p>
          </div>
          <div>
            <img src={getImageUrl('gallery/centerpiece2.jpg')} alt='' />
            <p className='legend'>My Photo 2</p>
          </div>
        </Carousel>
      </div>
    </section>
  )
}
