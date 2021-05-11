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
    let soma = 0;

    items.map(function(val){
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML += `
            <div class="lista-produtos-single">
                <h3>`+val.nome+`</h3>
                <h3 class="preco-produto"><span>R$`+val.valor+`</span></h3>
            </div>
        `
    })

    soma = soma.toFixed(2);
    let somaProdutos = document.querySelector('.soma-total');
    somaProdutos.innerHTML = `
        <h3>Total: R$`+soma+`</h3>
    `

    nomeProduto.value = "";
    precoProduto.value = "";
})

document.querySelector('button').addEventListener('click', ()=>{
    items = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-total h3').innerHTML = "Total: R$0,00";
});
