// let dados = require('./data.json')
// dados.forEach((e) => {
//     console.log(e)
// });

fetch('./data.json')
.then(response => response.json())
.then(dados => {
    dados.forEach((e) => {
        let img = document.createElement('img')
        img.src = e.imagem

        let p = document.createElement('p')
        p.innerText = `Nome: ${e.nome}, Idade: ${e.idade}, Cidade: ${e.cidade}`

        let container = document.createElement('div')
        container.appendChild(img)
        container.appendChild(p)

        document.body.appendChild(container).classList.add('container')
    })
})
.catch((error) => {
    document.body.appendChild(document.createElement('p')).innerText = `Erro: ${error}`
})

/*
📌 Explicação detalhada
1. fetch('./data.json')
O método fetch faz uma requisição HTTP para o arquivo data.json localizado na mesma pasta do código.

Por padrão, fetch usa o método GET.

Ele retorna uma Promise, ou seja, uma operação assíncrona que pode resultar em sucesso ou erro.

2. .then(response => response.json())
O primeiro .then recebe o objeto Response da requisição.

response.json() transforma o corpo da resposta em um objeto JavaScript (parseia o JSON).

Também retorna uma Promise, que será resolvida com os dados convertidos.

3. .then(dados => { ... })
Aqui, dados é o array ou objeto vindo do data.json.

O código assume que dados é um array de objetos, cada um com propriedades nome, idade e cidade.

4. dados.forEach((e) => { ... })
O método forEach percorre cada elemento do array dados.

Para cada objeto e, o código cria um parágrafo (<p>).

5. let p = document.createElement('p')
Cria dinamicamente um elemento HTML <p>.

6. p.innerText = \Nome: ${e.nome}, Idade: ${e.idade}, Cidade: ${e.cidade}\``
Define o texto do parágrafo usando template literals (crase ``).

Insere os valores das propriedades do objeto (nome, idade, cidade).

7. document.body.appendChild(p)
Adiciona o parágrafo criado ao corpo da página.

Resultado: cada objeto do JSON gera uma linha de texto exibida no navegador.

8. .catch((error) => { ... })
Se ocorrer algum erro (por exemplo, arquivo não encontrado ou problema de rede), o .catch será executado.

Cria um <p> com a mensagem de erro e adiciona ao corpo da página.

Isso garante que o usuário veja o problema em vez de nada acontecer.

🔎 Resumindo o fluxo
Faz requisição ao data.json.

Converte resposta em objeto JavaScript.

Percorre os dados e cria elementos <p> com informações.

Exibe na página.

Se der erro, mostra mensagem de erro.
*/