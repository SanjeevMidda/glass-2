import "./index.css";
import {
  OrbitControls,
  Text,
  PresentationControls,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import font from "./fonts/PPPangaia-Bold.otf";
import { useControls } from "leva";

function App() {
  const cube = useRef();

  console.log(cube.rotation.y);

  useFrame(() => {
    cube.current.rotation.y += 0.02;
    cube.current.rotation.x += 0.02;
  });

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //   chromaticAbberation: { value: 0.02, min: 0, max: 1 },
  //   backside: { value: true },
  // });

  return (
    <>
           <OrbitControls />

        <mesh ref={cube}>
          <torusGeometry />
          <MeshTransmissionMaterial
            thickness={3}
            backside="true"
            roughness={0.02}
            transmission={1}
            ior={1}
            chromaticAberration={0.05}
          />
        </mesh>
      

      <Text color="beige" position={[0, 0, 1]} fontSize={1.5} font={font}>
        hello
      </Text>
    </>
  );
}

export default App;
