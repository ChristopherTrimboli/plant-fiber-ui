import * as React from 'react'

const Square = (props: any) => {
    // This reference will give us direct access to the mesh
    const mesh = props.useRef(null)

    // Set up state for the hovered and active state
    const [hovered, setHover] = props.useState(false)
    const [active, setActive] = props.useState(false)

    // Rotate mesh every frame, this is outside of React without overhead
    props.useFrame(() => {
        mesh.current['rotation'].x = mesh.current['rotation'].y += 0.01
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}
export default Square;