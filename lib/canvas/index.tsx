import React from 'react';
import { Canvas as FiberCanvas } from 'react-three-fiber';
import { VRCanvas } from 'react-xr' 

const Canvas = (props: any) => {
    if(props.webxr) {
        return (
            <VRCanvas>
                {props.children}
            </VRCanvas>
        )
    }
    else {
        return (
            <FiberCanvas>
                {props.children}
            </FiberCanvas>
        )
    }
}
export default Canvas;