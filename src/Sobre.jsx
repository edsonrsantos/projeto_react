import {Link} from 'react-router-dom'
import TextoSobre from './textoSobre'
import Person from './img/person.svg'

const Sobre = () => {
  return (
    <div className='div-sobre'>
      <TextoSobre />
        <figure className='figure-sobre'>
          <img src={Person} alt="Imagem de sobre" className='imagem-sobre' />
       </figure>
     </div>
  )

}

export default Sobre

