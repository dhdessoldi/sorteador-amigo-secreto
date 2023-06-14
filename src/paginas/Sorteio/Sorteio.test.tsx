import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import Sorteio from ".";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";

jest.mock('../../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

jest.mock('../../state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn()
  }
})

describe('Na página de sorteio', () => {
  const participantes = [
    'Ana',
    'Catarina',
    'Joel'
  ]
  const resultado = new Map([
    ['Ana', 'Jorel'],
    ['Catarina', 'Ana'],
    ['Jorel', 'Catarina']
  ])

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
  })

  beforeEach(() => {
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado)
  })

  test('todos os participantes podem exibir seu amigo secreto', () => {
    render(<RecoilRoot><Sorteio /></RecoilRoot>)
    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(participantes.length + 1) //porque ja vem uma option por padrão
  })
  test('o amigo secreto é exibido quando solicitado', () => {
    render(<RecoilRoot><Sorteio /></RecoilRoot>)
    const select = screen.getByPlaceholderText('Selecione o seu nome')
    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    })

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole('alert')

    expect(amigoSecreto).toBeInTheDocument()
  })
})