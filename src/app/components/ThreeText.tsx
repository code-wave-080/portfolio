'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, Text3D } from '@react-three/drei'

export default function BalloonText() {
    return (
        <div style={{ width: '100vw', height: '200px', background: '#fceeff' }}>
            <Canvas
                orthographic
                camera={{ zoom: 70, position: [0, 0, 100] }}
                gl={{ alpha: true }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={2} />
                <spotLight
                    position={[-10, 10, 10]}
                    intensity={1.5}
                    angle={0.3}
                />

                <Center>
                    <Text3D
                        font="/fonts/helvetiker_regular.typeface.json" // 풍선 느낌 폰트 사용
                        size={1.2}
                        height={0.5}
                        curveSegments={20}
                        bevelEnabled
                        bevelThickness={0.2}
                        bevelSize={0.1}
                        bevelOffset={0}
                        bevelSegments={10}
                    >
                        Frontend
                        <meshPhysicalMaterial
                            color="#8f6eff"
                            roughness={0.1}
                            metalness={0.5}
                            clearcoat={1}
                            clearcoatRoughness={0.1}
                            emissive="#cabfff"
                            emissiveIntensity={0.2}
                        />
                    </Text3D>
                </Center>
            </Canvas>
        </div>
    )
}
