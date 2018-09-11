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
<script src="scripts/space.js"></script>

# Espaçamento
Aqui estão todos os espaçamentos exportadas no figma como tokens.
&nbsp;
&nbsp;

<div id="spacing"></div>

## Usando no Front

### Declarando num componente genérico

Antes de usar as propriedades especificadas no tema, você precisa inicializar no seu componente o handler para capturar os espaçamentos via props.

```javascript
import styled from `styled-components`;
import { space } from `react-tokens`;

const Line = styled.div`
  border-bottom: 1px dashed #777;
  ${ space() }
`;

export default Line;
```

### Usando a sombra via um componente inicializado

Num componente inicializado, informe o espaçamento do seu componente e 

```javascript
import React, { Fragment } from 'react';

import Line from './Line';

// mb is margin-bottom. mt is margin-top

export default () => (
  <Fragment>
    <Line mb="x-large" />
    <Line ml="x-large" />
  </Fragment>
```

O resultado será

<div class="load-space" data-margin="bottom" data-space="x-large"></div>
<div class="load-space" data-margin="left" data-space="x-large"></div>