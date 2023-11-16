import { getImageUrl } from "../../utils"
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.imageContent}>
        <img src={getImageUrl("Profile.png")} alt="me-image" />
      </div>
      <div className={styles.description}>
        <h1>Hello, i&apos;m Jean Carlos</h1>
        <p>I&apos;m front-end developer with 3 years of exeperience using React, Next and others
        frameworks. Reach out if you&apos;d like to learn more!</p>
        <a href="mailto:lopesjean81@gmail.com">Contact Me</a>
      </div>
    </section>
  )
}

export default Hero
