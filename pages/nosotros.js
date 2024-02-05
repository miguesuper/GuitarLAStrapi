import Image from "next/future/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"
 


export default function Nosotros() {
  return (
    <Layout
    title={"Nosotros"}
    description={"Tienda de musica"}
   >

    <main className="contenedor">
      <h2 className="heading">Nosotros</h2>

      <div className={styles.contenido}>
      
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue sapien, posuere quis nisl eget,
             faucibus fringilla quam. Quisque convallis sodales justo quis accumsan. Maecenas lobortis, arcu non 
             pretium interdum, augue nulla sodales tellus, non rhoncus mi nisi ac arcu. </p>

             <p>Donec nec luctus metus. Vestibulum vestibulum aliquet leo ut eleifend. Curabitur placerat tortor ipsum, in feugiat libero tincidunt in. Curabitur imperdiet dictum nibh, eget sodales purus elementum in. Sed turpis tortor, 
              malesuada bibendum velit malesuada, blandit ullamcorper odio. Sed vel justo vel velit posuere lobortis tempor et felis.</p>
          </div>

      </div>

    </main>
 
   </Layout>



  )
}
