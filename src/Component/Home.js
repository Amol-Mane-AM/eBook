import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls ,Text,Stars} from '@react-three/drei';
import Box from './Box'; // Assuming Box.js is in the same directory
import BlinkingStars from './BlinkingStars'; // Assuming BlinkingStars.js is in the same directory

function Home(){

 
//  return (
//     <div style={{ height: '100vh', background: '#111' }}>
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[3, 2, 1]} />
//         <Box />
//         <OrbitControls enableZoom={true} />
//       </Canvas>
//     </div>
//   );

//  return ( 
//   <div style={{ height: '100vh', background: '#000' }}>
//       <Canvas>
//         {/* Background Stars */}
//         <Stars
//           radius={100}        // how far the stars spread
//           depth={50}          // how deep the star field goes
//           count={5000}        // number of stars
//           factor={4}          // size factor
//           saturation={0}      // color saturation (0 for white)
//           fade                // adds fading
//           speed={1}           // speed of rotation
//         />

//         {/* Lighting */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[3, 2, 1]} />

//         {/* 3D Cube with "AMOL" on all sides */}
//         <Box />

//         <OrbitControls enableZoom={true} />
//       </Canvas>
//     </div>
//   );
 
return (
    // <div style={{ height: '100vh', background: '#000' }}>
    //   <Canvas>
    //     <ambientLight intensity={0.5} />
    //     <directionalLight position={[3, 2, 1]} />

    //     {/* Blinking Stars Component */}
    //     <BlinkingStars count={300} />

    //     {/* Cube with AMOL on all sides */}
    //     <Box />

    //     <OrbitControls enableZoom={true} />
    //   </Canvas>
    // </div>

  <div style={{ height: '100vh', background: '#000' }}>
   <Canvas>
    Home
     <BlinkingStars count={300} />
    </Canvas>
    </div>
  
   
 
  );

}

export default Home;