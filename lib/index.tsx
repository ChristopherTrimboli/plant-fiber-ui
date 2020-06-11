import * as React from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            mesh: { },
            boxBufferGeometry: { attach: string, args: Array<number> },
            meshStandardMaterial: { attach: string, color: string }
        }
    }
}

import Square from './square';

export {
    Square
}