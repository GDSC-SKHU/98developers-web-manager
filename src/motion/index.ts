// 모션 커스터마이징
export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const defaultScoll = {
    initial: {
        y: 50,
        opacity: 0,
        transition: { duration: 0.8, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    exit: {
        y: 130,
        opacity: 0,
        transition: { duration: 0.9, ease: defaultEasing },
        willChange: "opacity, transform",
    },
};
