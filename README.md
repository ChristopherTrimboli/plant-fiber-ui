# plant-fiber-ui

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
<a href="https://www.npmjs.com/package/plant-fiber-ui"><img src="https://img.shields.io/npm/v/plant-fiber-ui.svg"></a>
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

3D UI components for use with react-three-fiber. Includes WebXR support and Typescript driven documentation.

The goal of this is to be like the Bootstrap of React threejs.

Open to contributions and feature requests.

IN EARLY DEVELOPMENT

Docs Site: https://chriseddy.github.io/plant-fiber-ui-docs/index.html

Demo Site: https://chriseddy.github.io/plant-fiber-ui-demo/index.html

Glitch Playground: https://glitch.com/edit/#!/plant-fiber-ui

# Install

`npm install plant-fiber-ui react react-dom react-three-fiber three react-xr`

# Get Started

Example `App.js`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom';
import { Canvas, Box } from 'plant-fiber-ui';

const App = (props) => {
  return (
      <Canvas webxr>
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

# Components

## <Canvas \/>

**Example Usage** 

```<Canvas webxr={true} />```

### webxr: *Boolean*

## <Box \/>

**Example Usage** 

```<Box color='red' position={[-0.5, 2, 1]} />```

### color: *String*

**Example:** `color='#808080'`, `color='purple'` 

### position: *Array (Vector3)*

**Example:** `position={[-0.5, 2, 1]}`

### onClick: *Function*

**Example:** `onClick={(e) => yourFunction(e)}`

# Goals 

- Forms, Buttons, Inputs
- WebXR 
- Controllers / Hands
- Assets
- Panels
- Layout
- Keyboard
- more...
