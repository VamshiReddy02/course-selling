import { animate } from "framer-motion";

export const slideUp = (delay: number) => {
    return {
        intitial: {
            y: 50,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    };
};

export const slideBottom = (delay: number) => {
    return {
        initial: {
            y: -100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    };
};