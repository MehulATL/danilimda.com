import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for dani limda
      </footer>
    </>
  )
}
