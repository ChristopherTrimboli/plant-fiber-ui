# plant-fiber-ui
3D UI components for use with react-three-fiber. Includes WebXR support and Typescript driven documentation.

The goal of this is to be like the Bootstrap of React threejs.

Open to contributions and feature requests.

# Install

`npm install plant-fiber-ui react react-dom react-three-fiber three`

# Get Started

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

# Components

## <Box \/>

The first I thing made. Not that functional or fancy but does it's job.

**Example Usage** 

```<Box color='red' position={[0, 0, 3]} onClick={(e) => yourFunction(e)} etc... />```

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
