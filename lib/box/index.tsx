import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

const Box = (props: any) => {
    const mesh = useRef(null)

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
        mesh.current['rotation'].x = mesh.current['rotation'].y += 0.01
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e: any) => props.onClick ? props.onClick(e) : setActive(!active)}
            onPointerOver={(e: any) => props.onPointerOver ? props.onPointerOver(e) : setHover(true)}
            onPointerOut={(e: any) => props.onPointerOut ? props.onPointerOut(e) : setHover(false)}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={props.color || 'red'} />
        </mesh>
    )
}
export default Box;