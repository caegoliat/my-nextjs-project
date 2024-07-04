import styles from '../styles/About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <h2>About me</h2>
      <p>I am a Golden Retriever dog, with a great ability to sleep on the couch.
        Friendly, fun and romantic.
      </p>
    </section>
  );
};

export default About;
