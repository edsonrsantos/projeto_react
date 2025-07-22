import TextoHome from './textoHome'
import Development from './img/development.svg'


const Home = () => {
 
  return (
     <div className="div-home">
      <TextoHome />
      <figure className='figure-home'>
        <img src={Development} alt="Imagem de home" className='imagem1-home' />
         <img src={Development} alt="Imagem de home" className='imagem2-home' />
      </figure>
    </div>
  )
}

export default Home