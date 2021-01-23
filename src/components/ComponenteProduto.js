import React from "react";
import "./ComponenteProduto.css";

import iconeAddProduto from "../img/add_shopping_cart.svg"
import iconeProdutoAdicionado from "../img/shopping_cart.svg"

class ComponenteProduto extends React.Component {
    state = {
        adicionado: false
      };
    
      onClickAdicionarCarrinho = () => {
        
       /* let carrinhoCompras
    
        if(this.state.adicionado) {
          carrinhoCompras = carrinhoCompras.push(props.produto)
        }*/
    
        this.setState({
          adicionado:true
        })
      }
    
      render() {
    
        let iconeCarrinho;
    
        if (this.state.adicionado) {
          iconeCarrinho = iconeProdutoAdicionado; 
        } else {
          iconeCarrinho = iconeAddProduto;
        }
    
        return (
    
            <div className={"produto-container"}>
    
              <div className={"produto-main"}>
                <img
                  className={"imagem-viagem"}
                  src={this.props.imagem}
                />
              </div>

              <div className="produto-footer">
                <p>{this.props.nomeProduto}</p>
                <p>{this.props.preco}</p>
                
                <button onClick={this.onClickAdicionarCarrinho}>
                  <img
                    className={"icone-carrinho"}
                    src={iconeCarrinho}
                  />
                </button>
              </div>
              
            </div>
        );
      }
    }
    
    export default ComponenteProduto;