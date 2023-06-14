import { useState } from "react"
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio"
import styles from './Sorteio.module.scss'

const Sorteio = () => {

  const participantes = useListaParticipantes()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const resultado = useResultadoSorteio()

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
      setTimeout(() => {
        setAmigoSecreto('')
      }, 3000)
    }
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.container__titulo}>Quem vai tirar o papelzinho?</h1>
      <form className={styles.container__formulario} onSubmit={sortear}>
        <select
          required
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={evento => setParticipanteDaVez(evento.target.value)}
        >
          <option>Selecione seu nome</option>
          {participantes.map(participante => <option key={participante}>{participante}</option>)}
        </select>
        <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
        <button>Sortear!</button>
      </form>
      {amigoSecreto && <p className={styles.container__nome} role="alert">{amigoSecreto}</p>}
      <img src="/assets/aviao.png" alt="Desenho de um avião de papel" />
    </section>
  )
}

export default Sorteio