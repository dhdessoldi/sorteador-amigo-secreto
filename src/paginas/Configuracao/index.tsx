import Formulario from "../../components/Formulario"
import ListaParticipantes from "../../components/ListaParticipantes"
import Rodape from "../../components/Rodape"
import styles from './Configuracao.module.scss'

const Configuracao = () => {
  return (
    <main className={styles.container}>
      <Formulario />
      <ListaParticipantes />
      <Rodape />
    </main>
  )
}

export default Configuracao