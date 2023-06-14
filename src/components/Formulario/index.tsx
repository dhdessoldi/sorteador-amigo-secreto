import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante"
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro"
import styles from './Formulario.module.scss'


const Formulario = () => {

  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()

  const mensagemDeErro = useMensagemDeErro()

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form className={styles.formulario} onSubmit={adicionarParticipante}>
      <h1 className={styles.formulario__titulo}>Vamos começar!</h1>
      <div className={styles.formulario__container}>
        <input
          className={styles.formulario__campo}
          ref={inputRef}
          value={nome}
          onChange={evento => setNome(evento.target.value)}
          type="text"
          placeholder='Insira os nomes dos participantes' />

        <button className={styles.formulario__botao} disabled={!nome}>Adicionar</button>
      </div>
      {mensagemDeErro && <p className={styles.formulario__erro} role="alert">{mensagemDeErro}</p>}
    </form>
  )
}

export default Formulario