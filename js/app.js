let listaDeProdutos = document.getElementById('lista-produtos');
let totalGeral =  0;
let valorTotal = document.getElementById('valor-total');
limpar();


function adicionar(){


    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let nomeDoProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    let preco = quantidade * valorUnitario;
    if (quantidade <= 0) {
        alert('Você está tentando comprar uma quantidade de itens igual ou menor a 0, ajuste por favor');
        return
    }else{
        listaDeProdutos.innerHTML = listaDeProdutos.innerHTML  + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$ ${preco}</span></section>`;


        totalGeral = totalGeral + preco;   
        valorTotal.innerHTML = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = 0;
    }
}


function limpar(){
    listaDeProdutos.textContent = " ";
    valorTotal.innerHTML = " R$ 0";
    totalGeral = 0;
}


