## Iniciar projeto

```
  yarn eslint --init

```

Escolha as melhores opções
se não quizer npm, digite no e yarn depois para instalar

Configure o .prettierrc ma raiz

```
  "singleQuote": true,
  "trailingComma" "es5"
```

configure o .eslintrc.json

```
{
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "airbnb-base",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "globals": {
    "use": "readonly",
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parseOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "no-param-reassign": "off"
  }
}

```

## Instalar a integração

```
  yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

## conserte projeto em andamento

ele avisa as variaveis que não estão sendo usadas

```
 yarn eslint --fix app --ext .js
 yarn eslint --fix test app --ext .js
 yarn eslint --fix start app --ext .js
 yarn eslint --fix database app --ext .js // migrations
 yarn eslint --fix config app --ext .js
```

## configurar os commits do vscode

Na barra lateral, você pode clicar no verde, clicar no + no canto direito. Isso serve quando você meche muito no arquivo e quer dividir os commit.

```
  yarn create react-app frontend
  yarn start
```

## Padronizar projeto para todos desenvolvedores(inserir virgular). Usar o path src com ~ e conseguir acessar o arquivo de importação com o control

Dependências para download

```
  yarn add react-app-rewired
  yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -D
  yarn add babel-plugin-root-import -D
  yarn add eslint-import-resolver-babel-plugin-root-import -D
  yarn add customize-cra
```

crie o arquivo na raiz config-overrides.js e insira o código abaixo

```
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ]),
);


```

Altere o package.json a parte de script para

```
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

Feche o terminal se estiver aberto e digite:

```
 yarn start
```

Crie o arquivo jsconfig.json na raiz para poder usar o control e acessar o pacote

```
 {
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```

## Configurar o Redux

src/store/index.js

```
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;

```

## Configurar Reducers

src/store/ducks/index.js

```
import { combineReducers } from 'redux';

export default combineReducers({
  test: () => [],
});

```

## Configurar o Saga

src/store/sagas/index.js

```
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  return yield all([]);
}
```

## Configurar styled component

```
yarn add styled-components

src/styles/global.js
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    padding: 0; //fica em volta do conteudo
    margin: 0; //em volta de toda a tela
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #353940; //cor de fundo da tela
    color: #FFF; // cor das fontes
    font-family: "Source Sans Pro", sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  // para ele sempre ocupar o tamanha maximo da tela, os componentes
  html, body, #root {
    height: 100%;
  }

  // por padrão o input, e button não herdam a fonte padrão acima
  input, button {
    font-family: "Source Sans Pro", sans-serif;
  }

  // cursor diferente quando o usuario está passando por cima de um botão
  button {
    cursor: pointer;
  }
`;


```

## Precisa importar o componente GlobalStyle para dentro do componente App

```
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <>
      <Routes />
      <GlobalStyle />
    </>
  </Provider>
);

export default App;
```

## Todo

- Style guides;
- Validações;
- Configurar o debugger

## Console.log

1. Se retornar objeto, salve em {},
2. Salve o retorno de uma função em uma variavel ou objeto
3. Console.log se usa em uma ou duas verificações, mais que isso use o debugger do vscode
4. Se o retorno da função for um status code, salve em uma variavel const response e use o metodo response.assertStatus(204);
   exemplo: const response = await cliente.post('/reset').send({token, passwors: '123456', password_confirmation: '123456'}).end()

response.assertStatus(204);

5. Se usa o console.log para testar o retorno da data, o formato dela
   exemplo: const dataWithSub = format(subHours(new Date(), 5), 'YYYY-MM-dd HH:ii:ss' );
   console.log(dateWithSub) // vai mostrar que Y deve ser minusculo
6. Consultar se ele vem em formato string ou date
   console.log(userToken.created_at) // retorna string
   ai você pode usar o parseiSO que transforma uma string em uma data

- Configurar o debugger

  Clica no bug, Clicar no play(no configuration) e escoha a opção add configuration.
  Launch Program, criara uma pasta na raiz .vscode/launch.json, no arquivo você insere o path dele onde quer iniciar a aplicação, no nosso caso src/index.js

```
// Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/src/index.js"
    }
  ]
}
```
