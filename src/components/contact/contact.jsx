import { getImageUrl } from '../../utils';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactContainer} id='contact'>
      <div className={styles.contactTitle}>
        <h1>Contact</h1>
        <h3>Feel free to reach out!</h3>
      </div>
      <div className={styles.contactMethods}>
        <a href="mailto:lopesjean81@gmail.com"
          target='_blank'
          rel="noreferrer">
          <img src={getImageUrl('gmail.svg')} alt="email" />
          <p>lopesjean81@gmail.com</p>
        </a>
        <a href="www.linkedin.com/in/jean-carlosdev"
          target='_blank'
          rel="noreferrer">
          <img src={getImageUrl('linkedin.svg')} alt="linkedin" />
          <p>Jean Carlos | Linkedin</p>
        </a>
        <a href="https://github.com/devJcdzn"
          target='_blank'
          rel="noreferrer">
          <img src={getImageUrl('github.svg')} alt="github-icon" />
          <p>DevJcDzn</p>
        </a>
      </div>
    </section>
  )
}

export default Contact
