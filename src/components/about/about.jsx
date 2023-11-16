import { getImageUrl } from '../../utils'
import styles from './about.module.css'

const About = () => {
  return (
    <section className={styles.aboutContainer} id='about'>
      <div className={styles.content}>
      <h1 className={styles.sectionTitle}>ABOUT</h1>
        <li>
          <img src={getImageUrl("arrow.svg")} alt="arrow-mouse" />
          <div>
            <h4>Frontend Developer</h4>
            <p>I&apos;m a front-end developer with experience in building
            responsive and optimized sites and web applications.
            </p>
          </div>
        </li>
        <li>
          <img src={getImageUrl("back-end.svg")} alt="arrow-mouse" />
          <div>
            <h4>Database in learning</h4>
            <p>I&apos;m have focused my time and studies in to learn about
            database and relationated things, i too have fullstack apllications in developement.
            </p>
          </div>
        </li>
        <li>
          <img src={getImageUrl("ui-ux.svg")} alt="arrow-mouse" />
          <div>
            <h4>UI/UX Desing</h4>
            <p>I&apos;m have a biggest experience in UX and UI design, in the past
            have much freelancers works in area.
            </p>
          </div>
        </li>
      </div>
    </section>
  )
}

export default About
