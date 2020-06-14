import React, { useCallback, useState } from 'react';
import { DefaultXRControllers, useXREvent } from 'react-xr';
import { useFrame } from 'react-three-fiber';

const XRControllers = (props: any) => {

    const [controllersValues, setControllersValues] = useState({
        left: {
            axes: [0, 0, 0, -0]
        },
        right: {
            axes: [0, 0, 0, -0]
        }
    })

    const isAxisChanged = (axes, handedness) => {
        if (axes.length === 4) {
            for (let i = 0; i < axes.length; i++) {
                if (axes[i] !== controllersValues[handedness].axes[i]) {
                    return true
                }
            }
            return false
        }
        return false
    }

    useFrame((e) => {
        if(props.onAxesChange) {
            const xrSession = e.gl.xr.getSession();
            if (xrSession) {
                const controllers = xrSession.inputSources;
                if (controllers.length > 0) {
                    controllers.forEach((controller) => {
                        if (isAxisChanged(controller.gamepad.axes, controller.handedness)) {
                            props.onAxesChange(controller.gamepad.axes, controller.handedness)
                        }
                    })
                }
            }
        }
    })

    const onSelect = useCallback((e) => props.onSelect ? props.onSelect(e) : null, [])
    useXREvent('select', onSelect)

    const onSelectEnd = useCallback((e) => props.onSelectEnd ? props.onSelectEnd(e) : null, [])
    useXREvent('selectend', onSelectEnd)

    const onSelectStart = useCallback((e) => props.onSelectStart ? props.onSelectStart(e) : null, [])
    useXREvent('selectstart', onSelectStart)

    const onSqueeze = useCallback((e) => props.onSqueeze ? props.onSqueeze(e) : null, [])
    useXREvent('squeeze', onSqueeze)

    const onSqueezeEnd = useCallback((e) => props.onSqueezeEnd ? props.onSqueezeEnd(e) : null, [])
    useXREvent('squeezeend', onSqueezeEnd)

    const onSqueezeStart = useCallback((e) => props.onSqueezeStart ? props.onSqueezeStart(e) : null, [])
    useXREvent('squeezestart', onSqueezeStart)

    return (
        <>
            <DefaultXRControllers />
        </>
    );
}
export default XRControllers;
