"use client"
import { Suspense, useEffect, useState } from "react";
import Floor from "@/components/Floor";
import HouseIllustration from "@/components/Houseillustration";
import { Canvas } from "@react-three/fiber";
import LightBulb from "@/components/LightBulb";
import * as THREE from 'three'
import { useGLTF, MapControls, Bounds, useBounds } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Testing() {

    const CameraDolly = ({ isZoom }) => {
        const vec = new THREE.Vector3()

        useFrame((state, delta) => {
            
            const step = 0.05
            const x = isZoom ? 0 : 70
            const y = isZoom ? 100 : 70
            const z = isZoom ? 0 : 70

            state.camera.fov = isZoom ? 20 : 10
            state.camera.position.lerp(vec.set(x, y, z), step)
            
            state.camera.updateProjectionMatrix()

            
        })


          
        return null
    }


    const [isZoom, setZoom] = useState(false)
    const toggleZoom = () => setZoom((active) => !active)


    return (
        <div className="w-screen h-screen">
            <Canvas orthographic camera={{ zoom: 10 }}>
                <ambientLight color={"white"} intensity={1.5} />
                <MapControls enableZoom={false} enableRotate={false} />

                <Suspense fallback={null}>
                    <Model onClick={toggleZoom} url={"./casetta.glb"} scale={10} rotation={[0, 0, 0]} />
                </Suspense>
                <Floor />
                <CameraDolly isZoom={isZoom} />
            </Canvas>
        </div>
    )
}

function Model({ url, ...props }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} {...props} />
}