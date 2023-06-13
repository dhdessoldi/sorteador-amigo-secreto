import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.cabecalho__logo} role="img" aria-label='Logo do Sorteador'></div>
      <img className={styles.cabecalho__participante} src="/assets/participante.png" alt="Participante com um presente na mão" />
    </header>

  )
}
