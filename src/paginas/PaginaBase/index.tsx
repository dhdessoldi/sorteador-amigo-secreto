import { Outlet } from "react-router-dom"
import Cabecalho from "../../components/Cabecalho"
import Card from "../../components/Card"

const PaginaBase = () => {
  return (
    <>
      <Cabecalho />
      <Card>
        <Outlet />
      </Card>
    </>
  )
}

export default PaginaBase