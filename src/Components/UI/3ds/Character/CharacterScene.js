import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Avatar from '../../../../Assets/3DModels/Avatar';
import './Character.scss'
import { memo } from 'react';

const CharacterScene = memo(() => {
   return (
      <Canvas
         camera={{ position: [0, 0, 12.25], fov: 15 }}
         id='character'
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Avatar position={[0, -0.5, 3]} />
         </Suspense>
         <OrbitControls enableZoom={false} enableRotate={false}/>
      </Canvas>
   );
})

export default CharacterScene