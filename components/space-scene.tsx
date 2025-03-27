"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera } from "@react-three/drei"
import type * as THREE from "three"

interface SpaceSceneProps {
  scrollProgress: number
}

export default function SpaceScene({ scrollProgress }: SpaceSceneProps) {
  const rocketRef = useRef<THREE.Group>(null)
  const planetRef = useRef<THREE.Mesh>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)

  // Create a simple planet
  const Planet = () => {
    return (
      <mesh ref={planetRef} position={[5, -10, -15]} scale={5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.7} metalness={0.2} />
      </mesh>
    )
  }

  // Create a simple rocket
  const Rocket = () => {
    return (
      <group ref={rocketRef} position={[-2, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={0.5}>
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[0.5, 1.5, 16]} />
          <meshStandardMaterial color="#f43f5e" roughness={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1.5, 16]} />
          <meshStandardMaterial color="#d1d5db" roughness={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[0, -2.5, 0]}>
          <coneGeometry args={[0.5, 1, 16]} rotation={[Math.PI, 0, 0]} />
          <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.7} />
        </mesh>
        <group position={[0, -1.5, 0]}>
          <mesh position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
            <meshStandardMaterial color="#d1d5db" roughness={0.3} metalness={0.7} />
          </mesh>
          <mesh position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
            <meshStandardMaterial color="#d1d5db" roughness={0.3} metalness={0.7} />
          </mesh>
          <mesh position={[0, 0, 0.7]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
            <meshStandardMaterial color="#d1d5db" roughness={0.3} metalness={0.7} />
          </mesh>
          <mesh position={[0, 0, -0.7]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
            <meshStandardMaterial color="#d1d5db" roughness={0.3} metalness={0.7} />
          </mesh>
        </group>
      </group>
    )
  }

  // Create a simple astronaut
  const Astronaut = () => {
    return (
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[8, 2, -10]} rotation={[0, -Math.PI / 4, 0]} scale={0.8}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.5} />
          </mesh>
          <mesh position={[0, -1, 0]}>
            <capsuleGeometry args={[0.4, 1, 16, 16]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.5} />
          </mesh>
          <mesh position={[0.6, -0.8, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <capsuleGeometry args={[0.15, 0.8, 16, 16]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.5} />
          </mesh>
          <mesh position={[-0.6, -0.8, 0]} rotation={[0, 0, Math.PI / 4]}>
            <capsuleGeometry args={[0.15, 0.8, 16, 16]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.5} />
          </mesh>
          <mesh position={[0.3, -1.8, 0]} rotation={[0, 0, Math.PI / 16]}>
            <capsuleGeometry args={[0.15, 0.8, 16, 16]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.5} />
          </mesh>
          <mesh position={[-0.3, -1.8, 0]} rotation={[0, 0, -Math.PI / 16]}>
            <capsuleGeometry args={[0.15, 0.8, 16, 16]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0, 0.2]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.5} />
          </mesh>
        </group>
      </Float>
    )
  }

  // Animation based on scroll progress
  useFrame((state, delta) => {
    if (rocketRef.current) {
      // Rocket animation - flying upward with scroll
      rocketRef.current.position.y = -5 + scrollProgress * 15
      rocketRef.current.position.x = -2 + Math.sin(scrollProgress * Math.PI * 2) * 3
      rocketRef.current.rotation.z = Math.sin(scrollProgress * Math.PI * 2) * 0.1

      // Add some subtle rotation
      rocketRef.current.rotation.y += delta * 0.2
    }

    if (planetRef.current) {
      // Planet rotation
      planetRef.current.rotation.y += delta * 0.1

      // Planet moves slightly with scroll
      planetRef.current.position.y = -10 + scrollProgress * 5
    }

    // Camera movement based on scroll
    if (cameraRef.current) {
      cameraRef.current.position.z = 10 - scrollProgress * 2
      cameraRef.current.position.y = scrollProgress * 3
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 10]} fov={75} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      <Rocket />
      <Planet />
      <Astronaut />
    </>
  )
}

