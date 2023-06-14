import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import styles from './Rodape.module.scss'
import { useSorteador } from "../../state/hooks/useSorteador"

const Rodape = () => {

  const participantes = useListaParticipantes()
  const navegarPara = useNavigate()
  const iniciar = () => {
    sortear()
    navegarPara('/sorteio')
  }
  const sortear = useSorteador()

  return (
    <footer className={styles.footer}>
      <button className={styles.footer__botao} disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
      <div role="img" className={styles.footer__imagem}></div>
    </footer>
  )
}

export default Rodape