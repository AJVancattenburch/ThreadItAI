/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import * as THREE from 'three';

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      color='#0f0050'
      frames={60}
      alphaTest={1.5}
      scale={10}
      rotation={[Math.PI / 2, 1, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.5}
        ambient={0.55}
        position={[-10, 5, 5]}
      />
      <RandomizedLight 
        amount={7}
        radius={2}
        intensity={0.75}
        ambient={0.55}
        position={[1, 10, -10]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop