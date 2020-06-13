import React, { useCallback } from 'react';
import { DefaultXRControllers, useXREvent } from 'react-xr';

const XRControllers = (props: any) => {

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
