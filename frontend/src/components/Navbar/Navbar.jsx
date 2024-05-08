import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        Portfolio
      </a>
      <input className={styles.menuBtn} type='checkbox' id='menuBtn' name='menuBtn' />
      <label className={styles.menuIcon} htmlFor='menuBtn'>
        <span className={styles.navicon} aria-label="Hamburger menu 'icon'" />
      </label>
      <ul className={styles.menuItems}>
        <a href='/#about'>Services</a>
        <li className={styles.dropdown}>
          <a className={styles.dropbtn}>Projects</a>
          <div className={styles.dropdownContent}>
            <a href='/interior-design'>Interior Decoration</a>
            <a href='/weddings-events'>Weddings and Events</a>
            <a href='/flower-arrangements'>Floral Arrangments</a>
            <a href='/handcraft'>Handcraft</a>
          </div>
        </li>
        <li className={styles.mobileMenuItem}>
          <a href='/interior-design'>Interior Decoration</a>
        </li>
        <li className={styles.mobileMenuItem}>
          <a href='/weddings-events'>Weddings and Events</a>
        </li>
        <li className={styles.mobileMenuItem}>
          <a href='/flower-arrangements'>Floral Arrangments</a>
        </li>
        <li className={styles.mobileMenuItem}>
          <a href='/handcraft'>Handcraft</a>
        </li>
        <li>
          <a href='/#contacts'>Contacts</a>
        </li>
      </ul>
    </nav>
  )
}
