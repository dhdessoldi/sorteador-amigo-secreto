import { useNavigate } from 'react-router-dom'
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {

  const navegarPara = useNavigate()
  const navegar = () => {
    navegarPara('/')
  }
  return (
    <header className={styles.cabecalho}>
      <div onClick={navegar} className={styles.cabecalho__logo} role="img" aria-label='Logo do Sorteador'></div>
      <img className={styles.cabecalho__participante} src="/assets/participante.png" alt="Participante com um presente na mão" />
    </header>

  )
}
