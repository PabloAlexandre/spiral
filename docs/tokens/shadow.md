<style>
  .item {
    display: inline-block;
    width: 192px;
    vertical-align: top;
    margin: 10px;
  }
  .item div {
    background: #ddd;
  }
</style>
<script src="scripts/shadow.js"></script>

# Sombras
Aqui estão todas as sombras exportadas no figma como tokens.
&nbsp;
&nbsp;

<div id="shadows"></div>

## Usando no Front

### Declarando num componente genérico

Antes de usar as propriedades especificadas no tema, você precisa inicializar no seu componente o handler para capturar as sombras via props.

```javascript
import styled from `styled-components`;
import { effects } from `react-tokens`;

const Card = styled.div`
  width: 128px;
  background-color: #ddd;
  height: 128px;
  ${ effects() }
`;

export default Card;
```

### Usando a sombra via um componente inicializado

Num componente inicializado, informe a sombra do seu componente e 

```javascript
import React from 'react';

import Card from './Card';

export default () => <Card boxShadow="LVL3">;
```

O resultado será

<div class="load-shadow" data-shadow="LVL3" style="background-color: #ddd;width: 128px; height: 128px;"></div>