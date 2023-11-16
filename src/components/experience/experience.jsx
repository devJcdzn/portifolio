import { expCards } from '../../jsons/experiences';
import { getImageUrl } from '../../utils';
import styles from './experience.module.css';

const Experience = () => {
  return (
    <section className={styles.expContainer} id='experience'>
        <h1 className={styles.sectionTitle}>experience</h1>
      <div className={styles.content}>
        {expCards.map((c, index) => <div key={index} className={styles.card}>
          <div className={styles.cardImage}>
            <img src={getImageUrl(c.path)} alt={c.alt} />
          </div>
          <h3>{c.title}</h3>
        </div>)}
      </div>
    </section>
  )
}

export default Experience
