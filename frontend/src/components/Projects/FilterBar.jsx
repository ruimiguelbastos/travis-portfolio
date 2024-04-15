import { useState } from 'react'
import styles from './FilterBar.module.css'

export const FilterBar = () => {
  const [filters, setFilters] = useState({
    name: '',
    email: ''
  })

  const handleInput = (field) => (event) => {
    const { value } = event.target

    setFilters({
      ...filters,
      [field]: value
    })

    switch (field) {
      case 'name':
        onNameFilter(value)
        break
      case 'email':
        onEmailFilter(value)
        break
      default:
        break
    }
  }

  return (
    <div className={styles.filterBar}>
      <div className={styles.title}>
        <h4>Filters</h4>
      </div>
      <div className={styles.filters}>
        <div className='col-sm-12 my-2'>
          <label>Category</label>
          <div className={styles.options}>
            <div className={styles.option}>
              <input type='checkbox' className='form-control' id='WEDDING' name='category' onChange={handleInput('name')} />
              <label htmlFor='WEDDING'>Wedding</label>
            </div>
            <div className={styles.option}>
              <input type='checkbox' className='form-control' id='INTERIOR_DECORATION' name='category' onChange={handleInput('name')} />
              <label htmlFor='INTERIOR_DECORATION'>Interior Decoration</label>
            </div>
            <div className={styles.option}>
              <input type='checkbox' className='form-control' id='HANDCRAFT' name='category' onChange={handleInput('name')} />
              <label htmlFor='HANDCRAFT'>Handcraft</label>
            </div>
            <div className={styles.option}>
              <input type='checkbox' className='form-control' id='FLOWERS' name='category' onChange={handleInput('name')} />
              <label htmlFor='FLOWERS'>Flower Arrengments</label>
            </div>
          </div>
        </div>

        <div className='col-sm-12 my-2'>
          <label>Tags</label>
          <div className={styles.options}>
            <div className={styles.option}>
              <input type='checkbox' className='form-control' id='holidays' name='tags' onChange={handleInput('name')} />
              <label htmlFor='holidays'>Holidays</label>
            </div>
            <div className={styles.option}>
              <input type='checkbox' className='form-control' id='summer' name='tags' onChange={handleInput('name')} />
              <label htmlFor='summer'>Summer</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
