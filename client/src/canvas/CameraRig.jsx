/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'; // Import PropTypes
import { useFrame } from '@react-three/fiber';
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from '../store';


const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 768;

    // Set the initial position of the model
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2];
      else targetPosition = [0, 0, 2];
    }

    // Set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.1, delta)
    // Set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })
  


  return <group ref={group}>{children}</group>
}

CameraRig.propTypes = {
  children: PropTypes.node.isRequired, // Define the 'children' prop as a required node
};


export default CameraRig