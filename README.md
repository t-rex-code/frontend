## Iniciar projeto

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
