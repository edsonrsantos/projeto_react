import TextoContatos from './textoContatos'
import contact from './img/contact.svg'

const contatos = () => {
  return (
    <div className='div-contatos'>
        <TextoContatos/>
        <figure className='figure-contatos'>
          <img src={contact} alt="Imagem do contato" className='imagem-contatos' /> {/*insere imagem no fim do componente Contatos */}
        </figure>
                
                
        
        </div>
  )
}

export default contatos 

