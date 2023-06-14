import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import styles from './ListaPartcipantes.module.scss'

const ListaParticipantes = () => {

  const participantes: string[] = useListaParticipantes()
  return (
    <ul className={styles.lista}>
      {participantes.map(participante => <li key={participante}>{participante}</li>)}
    </ul>
  )

}

export default ListaParticipantes