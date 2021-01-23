import React from 'react';
import './App.css';
import ComponenteProduto from './components/ComponenteProduto';

import banner from './img/banner-viagens-espaciais.png';
import viagemLua from "./img/viagem-lua.jpeg";
import viagemSaturno from "./img/viagem-aneis-de-saturno.jpg";
import viagemMarte from "./img/viagem-marte.jpg"

class App extends React.Component {
  state = {
    produtos: [{
        nomeProduto: "Viagem para a Lua",
        preco: "10x R$999",
        imagem: viagemLua
    },

    {
      nomeProduto: "Viagem para os Anéis de Saturno",
      preco: "10x R$999",
      imagem: viagemSaturno
    },
    {
      nomeProduto: "Viagem para Marte",
      preco: "10x R$999",
      imagem: viagemMarte
    }]
  };

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
        </footer>
      </div>
    );
  }
}

export default App;
