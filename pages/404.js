import Layout from "../components/layout"
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layout
     title="Pagina no encontrada"

    >
        <p className="error">No encontrado</p>
        <Link href="/">
          <a className="error-enlace">Ir a inicio</a>
        </Link>

    </Layout>
    
  )
}
