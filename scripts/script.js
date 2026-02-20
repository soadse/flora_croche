let grid = document.querySelector('.grid-produtos')
let grid_moda_verao = document.querySelector('.grid-produtos-verao')
let grid_moda_inverno = document.querySelector('.grid-produtos-inverno')

let dados_produtos = "produtos.json"
let dados_moda_verao = "moda_verao.json"
let dados_moda_inverno = "moda_inverno.json"

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
buscaDados(dados_moda_inverno, grid_moda_inverno)