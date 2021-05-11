var items = []

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome-produto]');
    var precoProduto = document.querySelector('input[name=valor-produto]');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    })

    /*
    <div class="lista-produtos-single">
                <h3>Redbull</h3>
                <h3 class="preco-produto"><span>R$ 12,00</span></h3>
            </div>
    */

    let listaProdutos = document.querySelector('.lista-produtos');
    listaProdutos.innerHTML = "";

    items.map(function(val){
        listaProdutos.innerHTML += `
            <div class="lista-produtos-single">
                <h3>`+val.nome+`</h3>
                <h3 class="preco-produto"><span>R$`+val.valor+`</span></h3>
            </div>
        `
    })

    nomeProduto.value = "";
    precoProduto.value = "";
})