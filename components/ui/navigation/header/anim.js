// export const menuSlide = {
//     initial: {x: "calc(100% + 100px)"},
//     enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
//     exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
// }

// export const slide = {
//     initial: {x: 80},
//     enter: i => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
//     exit: i => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
// }

// export const scale = {
//     open: {scale: 1, transition: {duration: 0.3}},
//     closed: {scale: 0, transition: {duration: 0.4}}
// }

export const menuSlide = {
    initial: { y: "calc(100% + 100px)" }, // Modifiez "x" en "y"
    enter: { y: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }, // Modifiez "x" en "y"
    exit: { y: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } } // Modifiez "x" en "y"
}

export const slide = {
    initial: { y: 80 }, // Modifiez "x" en "y"
    enter: i => ({ y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }), // Modifiez "x" en "y"
    exit: i => ({ y: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }) // Modifiez "x" en "y"
}

export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } }
}