![nikel-_online-video-cutter com_](https://github.com/danibenfica/Projeto-Nikel/assets/103818625/2660950c-97b1-4a3c-a62a-da70e50fc42f)

# Projeto Nikel

[Link do projeto online aqui!](https://projeto-nikel.vercel.app/)

## Visão Geral
O Projeto Nikel é uma aplicação web que permite aos usuários controlar suas finanças pessoais. Com o Nikel, os usuários podem registrar transações de entrada e saída de dinheiro, visualizar um resumo financeiro, acompanhar o histórico de transações e definir metas de economia.

A aplicação é desenvolvida utilizando HTML, CSS e JavaScript, com o framework Bootstrap para a criação do layout responsivo e uso de ícones. Os dados das transações são armazenados localmente no navegador do usuário, utilizando a API Web Storage (sessionStorage e localStorage).

## Principais Tecnologias Utilizadas:
- HTML: Utilizado para criar a estrutura e os elementos da página.
- CSS: Utilizado para estilizar a página e definir o layout.
- Bootstrap: Utilizado como framework CSS para criar uma interface responsiva e estilizada.
- JavaScript: Utilizado para adicionar interatividade e funcionalidades às páginas.
- localStorage e sessionStorage: Utilizados para armazenar os dados localmente no navegador.

Executando o Projeto:
1. Certifique-se de ter um editor de código instalado, como Visual Studio Code, Sublime Text, Atom, etc.
2. Crie uma nova pasta para o projeto.
3. Dentro da pasta do projeto, Ffaça o download no formato zip e descompacte o arquivo.
4. Abra o arquivo `index.html` em um navegador da web. Você deve ver a página de login.
5. Você pode interagir com o projeto, fazer login, adicionar transações, visualizar as transações registradas e fazer logout.

Certifique-se de que os arquivos CSS e JavaScript estejam corretamente vinculados aos arquivos HTML, caso contrário, o projeto pode não funcionar corretamente. Além disso, verifique se as imagens estão sendo referenciadas corretamente nos arquivos HTML.

## Estrutura do Projeto
O projeto está organizado em três principais diretórios:

1. **css**: Contém os arquivos CSS para estilização da aplicação.
2. **js**: Contém os arquivos JavaScript que implementam a lógica da aplicação.
3. **assets**: Contém arquivos de mídia, como imagens e ícones.

A seguir, descreveremos brevemente cada um dos principais arquivos do projeto.

### index.html
O arquivo `index.html` é a página inicial da aplicação, onde os usuários podem realizar o login ou criar uma nova conta. Ele contém um formulário de login e um modal para o registro de novas contas.

### home.html
O arquivo `home.html` é a página principal da aplicação após o login. Nesta página, os usuários podem visualizar um resumo financeiro, incluindo o saldo total e a lista das últimas transações registradas. Além disso, há um botão flutuante para adicionar novas transações.

### transactions.html
O arquivo `transactions.html` exibe todas as transações registradas pelos usuários em formato de tabela. Ele fornece uma visão geral de todas as transações, incluindo a data, o valor, o tipo (entrada ou saída) e a descrição.

### styles.css
O arquivo `styles.css` contém as regras de estilo CSS utilizadas na aplicação. Ele define a aparência visual dos elementos HTML, como cores, fontes, tamanhos e posicionamento.

### index.js
O arquivo `index.js` contém a lógica JavaScript responsável pelo gerenciamento do formulário de login e criação de contas. Ele lida com a validação dos campos, o armazenamento das informações no navegador e o redirecionamento do usuário após o login ou criação de conta.

### home.js
O arquivo `home.js` contém a lógica JavaScript da página `home.html`. Ele é responsável por exibir o resumo financeiro e a lista de transações na página inicial. Além disso, ele controla a exibição do modal para adicionar novas transações.

### transactions.js
O arquivo `transactions.js` contém a lógica JavaScript da página `transactions.html`. Ele é responsável por exibir a lista de transações registradas em formato de tabela.

## Funcionalidades Principais
A seguir, descreveremos as funcionalidades principais do Projeto Nikel:

1. **Login e Criação de Conta**: Os usuários podem inserir seu e-mail e senha para fazer login na aplicação. Caso não tenham uma conta, eles podem criar uma nova conta informando um e-mail e uma senha válidos.

2. **Armazenamento de Dados**: As informações de login e as transações são armazenadas localmente no navegador do usuário. O armazenamento é feito utilizando a API Web Storage, sendo as informações de login armazenadas na sessionStorage e as transações armazenadas na localStorage.

3. **Resumo Financeiro**: Na página inicial (`home.html`), os usuários podem visualizar um resumo financeiro que inclui o saldo total das transações.

4. **Lista de Transações**: Na página `transactions.html`, os usuários podem visualizar todas as transações registradas em formato de tabela. Cada transação exibe a data, o valor, o tipo (entrada ou saída) e a descrição.

5. **Adicionar Transações**: Os usuários podem adicionar novas transações clicando no botão flutuante na página inicial (`home.html`). Um modal é exibido, permitindo que o usuário insira o valor, a descrição, a data e o tipo (entrada ou saída) da transação.

6. **Logout**: Os usuários podem fazer logout da aplicação a qualquer momento. Isso irá remover as informações de login e redirecionar o usuário de volta para a página de login (`index.html`).

## Principais Funções:

A função `imprimirPessoas()` é responsável por imprimir as informações de todas as pessoas presentes no array `pessoas`. Ela percorre o array utilizando o método `forEach()` e para cada item do array, imprime os valores das propriedades `nome`, `idade` e `trabalho` no console.


```javascript
function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}
```

Neste trecho, a função inicia imprimindo a mensagem "---IMPRIMIR PESSOAS---" no console para identificar a seção de impressão das pessoas. Em seguida, utiliza o método `forEach()` para percorrer cada item do array `pessoas`. Dentro do loop, imprime o valor das propriedades `nome`, `idade` e `trabalho` de cada item.

Ao chamar a função `imprimirPessoas()` após adicionar uma nova pessoa com a função `adicionarPessoa()`, você poderá ver as informações atualizadas no console.

A função `getCashOut()` é responsável por obter as transações de saída (cash-out) do objeto `data` e exibi-las na seção correspondente da página HTML. Ela filtra as transações com o tipo igual a "2" e gera o HTML necessário para cada transação, limitando a exibição a no máximo 5 transações. Em seguida, insere o HTML gerado no elemento com o id "cash-out-list".

```javascript
function getCashOut() {
    const transactions = data.transactions;
    const cashOut = transactions.filter((item) => item.type === "2");

    if (cashOut.length) {
        let cashOutHtml = ``;
        let limit = 0;

        if (cashOut.length > 5) {
            limit = 5;
        } else {
            limit = cashOut.length;
        }

        for (let index = 0; index < limit; index++) {
            cashOutHtml += `
                <div class="row mb-4">
                    <div class="col-12">
                        <h3 class="fs-2"> ${cashOut[index].value.toFixed(2)} </h3>
                        <div class="container p-0">
                            <div class="row">
                                <div class="col-12 col-md-8">
                                    <p> ${cashOut[index].description} </p>
                                </div>
                                <div class="col-12 col-md-3 d-flex justify-content-end">
                                    ${cashOut[index].date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        document.getElementById("cash-out-list").innerHTML = cashOutHtml;
    }
}
```

Neste trecho, a função recebe as transações do objeto `data` e filtra apenas as transações de saída (cash-out) com `item.type === "2"`. Em seguida, verifica se há transações de saída disponíveis. Se houver, a variável `cashOutHtml` é inicializada como uma string vazia e o limite de transações a serem exibidas é definido como 5 ou o tamanho total do array `cashOut`, o que for menor.

Dentro do loop `for`, o HTML correspondente a cada transação é adicionado à string `cashOutHtml`. As propriedades `value`, `description` e `date` de cada transação são utilizadas para preencher os elementos correspondentes no HTML.

Por fim, o HTML gerado é inserido no elemento com o id "cash-out-list" na página HTML.

Essa função trabalha em conjunto com a função `getCashIn()` para exibir as transações de entrada (cash-in) e de saída (cash-out) separadamente na página HTML.

A função `saveAccount(data)` é responsável por salvar os dados de uma conta no armazenamento local (localStorage). Ela recebe um objeto `data` contendo as informações da conta, como `login`, `password` e `transactions`. Esses dados são convertidos em uma string JSON usando o método `JSON.stringify()` e salvos no localStorage usando a chave `login` como identificador.


```javascript
function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}
```

A função `saveSession(data, saveSession)` é responsável por salvar a sessão de login no armazenamento local (localStorage) e na sessão atual (sessionStorage). Ela recebe o `data` (login) a ser salvo e um booleano `saveSession` que indica se a sessão deve ser salva no localStorage.

Se `saveSession` for `true`, o login é salvo no localStorage com a chave "session" usando o método `localStorage.setItem()`. Em seguida, o login é salvo na sessão atual (sessionStorage) usando o método `sessionStorage.setItem()`.

```javascript
function saveSession(data, saveSession) {
    if (saveSession) {
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}
```

A função `getAccount(key)` é responsável por obter os dados de uma conta do armazenamento local (localStorage) com base em uma chave (login) fornecida. Ela recebe a chave `key` e usa o método `localStorage.getItem()` para obter os dados da conta correspondente. Os dados são convertidos de volta em um objeto usando o método `JSON.parse()` antes de retornar o resultado.

```javascript
function getAccount(key) {
    const account = localStorage.getItem(key);

    if (account) {
        return JSON.parse(account);
    }

    return "";
}
```

Essas funções trabalham em conjunto para lidar com o login, criação de conta e gerenciamento de sessões no aplicativo. A função `checkLogged()` verifica se há uma sessão salva e redireciona o usuário para a página inicial (home.html) se estiver logado.


A função `getTransactions()` é responsável por exibir as transações registradas na tabela de transações na página `transactions.html`. Ela percorre o array `data.transactions` que contém as transações e gera as linhas HTML para cada transação usando uma estrutura de repetição `forEach()`. 

Dentro do loop, as propriedades de cada transação são usadas para preencher as células da tabela, como a data, valor, tipo (entrada ou saída) e descrição. Os valores numéricos são formatados usando o método `toFixed()` para exibir duas casas decimais.

As linhas HTML geradas são adicionadas à variável `transactionsHtml`, que acumula todas as linhas de transações. No final, o conteúdo HTML completo é atribuído ao elemento com o ID "transactions-list", que representa a tabela de transações na página.


```javascript
function getTransactions() {
    const transactions = data.transactions;
    let transactionsHtml = ``;

    if (transactions.length) {
        transactions.forEach((item) => {
            let type = "Entrada";

            if (item.type === "2") {
                type = "Saída";
            }

            transactionsHtml += `
            <tr>
                <th scope="row"> ${item.date} </th>
                <td> ${item.value.toFixed(2)} </td>
                <td> ${type} </td>
                <td> ${item.description} </td>
            </tr>
            `;
        });
    }

    document.getElementById("transactions-list").innerHTML = transactionsHtml;
}
```

A função `saveData(data)` é responsável por salvar os dados atualizados no armazenamento local (localStorage). Ela recebe o objeto `data` contendo as transações e converte-o em uma string JSON usando o método `JSON.stringify()`. Em seguida, os dados são salvos no localStorage usando a chave `data.login`.

Principais trechos da função:

```javascript
function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}
```

Essas funções trabalham em conjunto para exibir as transações registradas e atualizar os dados no armazenamento local quando uma nova transação é adicionada.


## Considerações Finais
O Projeto Nikel é uma aplicação web simples para controle de finanças pessoais. Ele oferece funcionalidades básicas para registro de transações, exibição de resumo financeiro e acompanhamento do histórico de transações. No entanto, é importante ressaltar que esta é uma versão inicial do projeto e pode ser expandida e aprimorada de acordo com as necessidades do usuário.

 Se você tiver alguma dúvida adicional, não hesite em perguntar. :heart:
