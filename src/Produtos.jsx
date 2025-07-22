import Textoprodutos from './textoprodutos'
import products from './img/products.svg'

const Produtos = () => {
  return (
    <div className='div-produtos'>
        <Textoprodutos/>
        <figure className='figure-produtos'>
             <img src={products} alt="Imagem de produtos" className='imagem-produtos' />
         </figure>
        
        
      </div>
)
}


export default Produtos