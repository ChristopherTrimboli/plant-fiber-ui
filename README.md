# plant-fiber-ui
3D UI components for use with react-three-fiber. Includes WebXR support and Typescript driven documentation.

## Install

`npm install plant-fiber-ui react react-dom react-three-fiber`

## Get Started

Example `App.js`:

```jsx

import React from 'react'
import ReactDOM from 'react-dom';
import { Box } from 'plant-fiber-ui';
import { Canvas } from 'react-three-fiber'

const App = (props) => {
  return (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```

## Goals 

- Forms, Buttons, Inputs
- WebXR 
- Controllers / Hands
- Assets
- Panels
- Layout
- Keyboard
- more...
