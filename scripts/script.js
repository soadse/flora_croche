let grid = document.querySelector('.grid-produtos')

fetch("data.json")
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