'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text3D, Center } from '@react-three/drei'

export default function ThreeText() {
    return (
        <Canvas
            style={{
                width: '100vw',
                height: '200px',
                backgroundColor: 'transparent'
            }}
            gl={{ alpha: true }} // 투명 배경 설정
        >
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 2]} />
            <Center>
                <Text3D
                    font="/fonts/helvetiker_regular.typeface.json"
                    size={2}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.03}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    Frontend
                    <meshStandardMaterial color="#00adef" />
                </Text3D>
            </Center>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}
