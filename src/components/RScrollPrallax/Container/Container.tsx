import { PropsWithChildren } from 'react';

const Container = (props: PropsWithChildren) => {
    return (
        <div className="relative  w-full rounded-md text-black overflow-hidden">
            <div className="h-screen" />

            <div
                className="h-screen flex flex-row items-center justify-evenly w-full"
                style={{ perspective: '250px' }}
            >
                {props.children}
            </div>
            <div className="h-screen" />
        </div>
    );
};

export default Container;