# Sincronizando os tokens na aplicação

Para utilizar os tokens na aplicação front end, você precisa instalar a extensão `figmagick-cli` no seu projeto

```sh
npm i --save-dev figmagick-cli
```

Configure na raiz do seu projeto um arquivo chamado `figmagick.config.json` com as seguintes informações:

```json
{
  "fileId": "JeoXvTtDT1AC0Z94IrHI6Shr",
  "outPath": "./src/Theme/theme.json",
  "tokenEntry": "Tokens",
  "spaceGroup": "Spacing"
}
```

Adicione no seu `.env` [a sua credencial do Figma](https://www.figma.com/developers/docs#auth):

```
FIGMA_TOKEN=figma-credentials
```

Para finalizar, adicione no `package.json` um script para manter os tokens atualizados:

```json
"figma:update": "figmagick"
```
