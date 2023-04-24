import { Suspense} from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from './CanvasLoader';



const BirdOrange = () => {
    const bird = useGLTF("./bird_orange/scene.gltf")
//     const myMesh = useRef<Mesh>(null);

//   useFrame(({ clock }) => {
//     const a = Math.cosh(clock.getElapsedTime())
//     myMesh.current!.rotation.x = a;
//   });

    return (
        <mesh>
            <hemisphereLight intensity={.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow />
            <primitive object={bird.scene} scale={10} position={[0, -6, 0]} rotation={[0, -5, 0]} />
        </mesh>
    );
};


const BirdOrangeCanvas = () => {
    return (
        <div className='h-[600px]'>
            <Canvas
                frameloop='always'
                shadows
                camera={{ position: [50, 0, 0], fov: 50 }}
                gl={{ preserveDrawingBuffer: true }}
                resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } } }
            >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={5} />
                    <BirdOrange />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default BirdOrangeCanvas;