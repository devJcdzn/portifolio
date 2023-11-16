import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Oliveira<span>Dev</span></a>
      <div className={styles.menu}>
        <ul
          className={styles.menuItems}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Portifólio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar