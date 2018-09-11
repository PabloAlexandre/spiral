<link href="https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700|Press+Start+2P" rel="stylesheet">

<script src="scripts/fonts.js"></script>

# Tipografia
Aqui estão todas as fontes exportadas no figma como tokens.
&nbsp;
&nbsp;

<div id="fonts" style="margin-top: 50px;"></div>

## Usando no Front

### Declarando num componente genérico

Antes de usar as propriedades especificadas no tema, você precisa inicializar no seu componente o handler para capturar o estilo da fonte via props.

```javascript
import styled from `styled-components`;
import { fonts } from `react-tokens`;

const Title = styled.h1`
  ${ fonts() }
`;

export default Title;
```

### Usando o estilo de fonte via um componente inicializado

Num componente inicializado, informe o `textStyle` do seu componente e 

```javascript
import React from 'react';

import Title from './Title';

export default () => <Title textStyle="Title 1">Vortex</Title>;
```

O resultado será

<div class="load-font" data-font="Title 1" data-text="Vortex" style="margin-top: 20px;"></div>