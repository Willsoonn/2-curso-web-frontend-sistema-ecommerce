//Inicialização das variáveis de escopo global
let precoProduto
let carrinho = []
let maisProdutos

//Array de produtos da loja
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

//Repetição para o usuário adicionar produtos ao carrinho quantas vezes desejar
do{
  //Função para verificar e validar qual produto o usuário deseja adicionar ao carrinho
  function verificarProduto(){
    let produto = prompt('Qual produto você deseja comprar? (Camisa, Calça, Sapato ou Boné')
    let produtoEscolhidoSemEspaco = produto.trim()
    let produtoEscolhidoMinusculo = produtoEscolhidoSemEspaco.toLocaleLowerCase()
    
    //Condicional para trativas de erro de digitação
    if(produtoEscolhidoMinusculo !== "camisa" && produtoEscolhidoMinusculo !== "calça" && produtoEscolhidoMinusculo !== "calca" && produtoEscolhidoMinusculo !== "sapato" && produtoEscolhidoMinusculo !== "boné" && produtoEscolhidoMinusculo !== "bone"){
        alert("Valor inválido! Por favor, digite uma das informações.")
        verificarProduto()
    }

    //Tratativa para o produto escolhido pelo usuário
    else{
      let produtoComAPrimeiraMaiuscula = produtoEscolhidoMinusculo.charAt(0).toUpperCase() 
      let restanteDaPalavra = produtoEscolhidoMinusculo.slice(1)
      let produtoCompleto = produtoComAPrimeiraMaiuscula + restanteDaPalavra
      if(produtoCompleto === "Calca"){
        produtoCompleto = "Calça"
      }

      else if(produtoCompleto === "Bone"){
        produtoCompleto = "Boné"
      }

      return produtoCompleto
    }
  }
  
  let produtosEscolhidos = verificarProduto()

  // Verifica se o produto escolhido está disponível
  for (let i = 0; i < produtosDisponiveis.length; i++) {
    if (produtosEscolhidos === produtosDisponiveis[i].nome) {
      console.log(`Produto ${produtosEscolhidos} encontrado!`);
      precoProduto = produtosDisponiveis[i].preco;
  }}

  //Exibir o valor do produto escolhido
  const qtdProduto = prompt (`O produto ${produtosEscolhidos} custa: R$ ${precoProduto.toFixed(2)}. Quantas unidades você deseja adicionar ao carrinho?`);

  //Adicionar o item escolhido ao carrinho(com seus atributos)
  carrinho.push({
    nome: produtosEscolhidos,
    preco: precoProduto,
    quantidade: qtdProduto,
  });
  
  alert(`Você adicionou ${qtdProduto} unidades do produto ${produtosEscolhidos} ao carrinho!`);

  maisProdutos = confirm(`Deseja adicionar mais produtos?`);
}while(maisProdutos === true)

//Estrtura para exibição das quantidades, itens e valores dos produtos adicionados ao carrinho
if(maisProdutos === false){
  let valorTotal = 0;
  let mensagemCarrinho = `Produtos no carrinho: \n`
  let subTotal = 0

  for (let i = 0; i < carrinho.length; i++) {
    let item = carrinho[i]
    subTotal = item.preco * item.quantidade    
    valorTotal += subTotal
    mensagemCarrinho += `  ${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade} = ${subTotal.toFixed(2)} \n`
  }
  alert(`
  ${mensagemCarrinho}.\n O valor total da compra é: R$${valorTotal.toFixed(2)}
  `)
}
    



