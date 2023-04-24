import { useParallax } from 'react-scroll-parallax';
import cx from 'classnames';
import Container from '../Container/Container';

const shared =
    'absolute bg-blue-100 border-2 border-blue-500 border-solid rounded-lg h-14 w-14 flex items-center justify-center';

const Rotation = () => {
    const parallax = useParallax<HTMLDivElement>({
        // rotate: [290, 432],
        // rotateY:[0,360],
        // rotateZ:[0,720],
        // rotateX:[0,720],
        // scale:[0, 2],
        // scaleX:[0, 2],
        // scaleY:[0, 2],
        // opacity:[0, 2],
        // translateX:["0%", "100%"],
        translateX:["0px", "800px"],
        // translateY:["0px", "-800px"],
        // opacity:[0, 2],
        shouldAlwaysCompleteAnimation: true,
    });

    return (
        <Container>
           
                <div
                    ref={parallax.ref}
                    className="relative border-4 border-red-200 border-solid h-48 md:h-96 w-48 md:w-96 rounded-full flex items-center justify-center text-4xl"
                >
                    😵‍💫
                    <div
                        className={cx(
                            shared,
                            'top-0 left-1/2 -translate-y-1/2 -translate-x-1/2'
                        )}
                    >
                        💎
                    </div>
                    <div
                        className={cx(
                            shared,
                            'right-0 top-1/2 -translate-y-1/2 translate-x-1/2'
                        )}
                    >
                        🤡
                    </div>
                    <div
                        className={cx(
                            shared,
                            'bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2'
                        )}
                    >
                        💰
                    </div>
                    <div
                        className={cx(
                            shared,
                            'top-1/2 left-0 -translate-y-1/2 -translate-x-1/2'
                        )}
                    >
                        👌🏻
                    </div>
                </div>
           
        </Container>
    );
};

export default Rotation;