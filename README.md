# plant-fiber-ui
3D UI components for use with react-three-fiber. Includes WebXR support and Typescript driven documentation.

## Install

`npm install plant-fiber-ui react react-dom react-three-fiber`

## Get Started

Example `App.js`:

```jsx

import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { Square } from 'plant-fiber-ui';
import { Canvas, useFrame } from 'react-three-fiber'

const App = (props) => {
  return (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Square position={[-1.2, 0, 0]} useRef={useRef} useState={useState} useFrame={useFrame} />
        <Square position={[1.2, 0, 0]} useRef={useRef} useState={useState} useFrame={useFrame} />
      </Canvas>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```

`<Square />` is rendering into the Parent's `react-three-fiber` and React Context. For this reason we are passing the React hooks into `plant-fiber-ui` components like you see with `useRef={useRef}` and `useState={useState}`.

This is why we import the `<Canvas />` and `useFrame` from `react-three-fiber`. This allows you to use normal `react-three-fiber`, React, vanilla JS and `plant-fiber-ui` with each other in the same rendering context.

Would love a solution to this Context sharing archetecture. hmu if you know a better way.
