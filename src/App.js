import React from 'react';
import './App.css';
import ComponenteProduto from './components/ComponenteProduto';

import banner from './img/banner-viagens-espaciais.png';
import viagemLua from "./img/viagem-lua.jpeg";
import viagemSaturno from "./img/viagem-aneis-de-saturno.jpg";
import viagemMarte from "./img/viagem-marte.jpg"

import iconeCarrinho from "./img/shopping_cart.svg"


class App extends React.Component {
  state = {
    produtos: [{
        id: 1,
        nomeProduto: "Viagem para a Lua",
        preco: "10x R$999",
        imagem: viagemLua
    },

    {
      id: 2,
      nomeProduto: "Viagem para os Anéis de Saturno",
      preco: "10x R$999",
      imagem: viagemSaturno
    },
    {
      id: 3,
      nomeProduto: "Viagem para Marte",
      preco: "10x R$999",
      imagem: viagemMarte
    }],
    produtosCarrinho: [{
        id: 1,
        nomeProduto: "Viagem para a Lua",
        preco: "10x R$999",
        imagem: viagemLua,
        quantidade: 2
    }]
  }

  /* onClickCarrinhodeCompras = (idProduto) => {
    let produtosCarrinho = this.state.produtosCarrinho.find(produto => idProduto === produto.id)

    if(produtosCarrinho) {
      let novoProdutoAdd = this.state.produtosCarrinho.map(produto => {
        if(idProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })

      this.setState({produtosCarrinho: novoProdutoAdd})
    } else {
      let produtoAdd = produtos.find(produto => idProduto === produto.id)

      let novoProdutoAdd = [...this.state.produtosCarrinho, {...produtoAdd, quantidade: 1}]

      this.setState({produtosCarrinho: novoProdutoAdd})
    }
  } */

  render() {

    let listaDeProdutos = this.state.produtos.map((produto) => {
      return (
        <ComponenteProduto 
          nomeProduto={produto.nomeProduto}
          preco={produto.preco}
          imagem={produto.imagem}
        />
    )})
  
    return (

      <div className="App">
        <header className="App-header">

          <img src={banner} className="App-banner" alt="banner lua e universo" />
          
          <nav className="menu">
            <li><a className="pagina-produtos" href="" target="blank">
              Produtos 
            </a></li>
            
            <li><a className="pagina-carrinho" href="" target="blank">
              Carrinho
            </a></li>
          </nav>
        </header>
        <main>
          <h3>
            Viagens Espaciais
          </h3>
          <p>Encontre aqui os melhores planos de viagens para conhecer planetas diversos</p>
          
          <div className="lista-de-produtos">
            {listaDeProdutos}
          </div>
        </main>

        <footer>
          <button onClick={this.onClickCarrinhodeCompras}>
            <img
            src={iconeCarrinho}
            />
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
