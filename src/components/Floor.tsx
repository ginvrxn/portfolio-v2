//components/Floor.jsx
"use client"
import React from "react";

function Floor(props) {
  return (
    <mesh {...props} recieveShadow>
      <boxGeometry args={[80,0,80]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor;