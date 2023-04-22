import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <p className='text-base text-green-50 font-extrabold mt-0 -ml-8'>{progress.toFixed(2)}%</p>
        </Html>
    );
};

export default CanvasLoader;