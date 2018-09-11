<style>
  .item {
    display: inline-block;
    width: 192px;
    text-align: left;
    vertical-align: top;
    margin: 0;
  }
</style>
<script src="scripts/color.js"></script>

# Cores do tema
Aqui estão todas as cores exportadas no figma como tokens.
&nbsp;
&nbsp;

<div id="colors"></div>

## Usando no Front

### Declarando num componente genérico

Antes de usar as propriedades especificadas no tema, você precisa inicializar no seu componente o handler para capturar as cores via props.

```javascript
import styled from `styled-components`;
import { color } from `react-tokens`;

const Slot = styled.div`
  width: 128px;
  height: 128px;
  ${ color() }
`;

export default Slot;
```

### Usando a cor via um componente inicializado

Num componente inicializado, informe a cor do seu componente e 

```javascript
import React from 'react';

import Slot from './Slot';

export default () => <Slot bg="Conversion">;
```

O resultado será

<div class="load-color" data-color="Conversion" style="width: 128px; height: 128px;"></div>