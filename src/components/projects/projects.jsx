import { project } from '../../jsons/project';
import { getImageUrl } from '../../utils';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projContainer} id='projects'>
      <h1 className={styles.sectionTitle}>PROJECTS</h1>
      <div className={styles.content}>
        {project.map((p) => <div key={p.id} className={styles.card}>
          <div className={styles.cardImage}>
            <img src={getImageUrl(p.path)} alt={p.alt} />
          </div>
          <div className={styles.cardInfo}>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
          </div>
          <div className={styles.cardSkills}>
            <span>{p.skills[0]}</span>
            <span>{p.skills[1]}</span>
            <span>{p.skills[2]}</span>
          </div>
          <div className={styles.cardButtons}>
            <a href={p.links[0]} target='_blank' className={styles.actionButton} rel="noreferrer">Demo</a>
            <a href={p.links[1]} target='_blank' className={styles.actionButton} rel="noreferrer">Code</a>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default Projects
