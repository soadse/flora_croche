let grid = document.querySelector('.grid-produtos')
let grid_moda_verao = document.querySelector('.grid-produtos-verao')
let grid_moda_infantil = document.querySelector('.grid-produtos-infantil')
let grid_moda_banheiro = document.querySelector('.grid-produtos-banheiro')
let grid_moda_mesa = document.querySelector('.grid-produtos-mesa')

let dados_produtos = "produtos.json"
let dados_moda_verao = "moda_verao.json"
let dados_moda_infantil = "moda_infantil.json"
let dados_moda_banheiro = "moda_banheiro.json"
let dados_moda_mesa = "moda_mesa.json"

function buscaDados(base, grid) {
    fetch(base)
    .then(response => response.json())
    .then(dados => {
        dados.forEach((e) => {
            let img = document.createElement('img')
            img.src = e.imagem

            let categoria = document.createElement('p')
            categoria.innerText = e.categoria

            let produto = document.createElement('h3')
            produto.innerText = e.produto

            let preco = document.createElement('p')
            preco.innerText = e. preco


            let btn = document.createElement('btn')
            btn.innerText = "Saiba Mais"
            btn.addEventListener('click', () => {
                let mensagem = `Olá, gostaria de saber mais sobre:`
                let descricao = `(${e.cod}/${e.categoria})`
                let produtoPreco = `${e.produto} no valor R$${e.preco}`
                let numero = "5511974635138";
                let url = `https://wa.me/${numero}?text=${mensagem}%0A${produtoPreco}%0A${descricao}`
                window.open(url, "_blank")
            })
        

            let div = document.createElement('div')
            div.appendChild(img)
            div.appendChild(categoria)
            div.appendChild(produto)
            div.appendChild(preco).classList.add('price')
            div.appendChild(btn).classList.add('btn')

            grid.appendChild(div).classList.add('card')
        });
    })
}
buscaDados(dados_produtos, grid)
buscaDados(dados_moda_verao, grid_moda_verao)
buscaDados(dados_moda_infantil, grid_moda_infantil)
buscaDados(dados_moda_banheiro, grid_moda_banheiro)
buscaDados(dados_moda_mesa, grid_moda_mesa)