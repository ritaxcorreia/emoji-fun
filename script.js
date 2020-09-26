//unicorn emoji physics
const { styler, spring, listen, pointer, value } = window.popmotion;

const unicorn = document.querySelector('.unicorn');
const divStyler = styler(unicorn);
const unicornXY = value({ x: 0, y: 0 }, divStyler.set);

listen(unicorn, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(unicornXY.get()).start(unicornXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: unicornXY.get(),
            velocity: unicornXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            mass: 5,
            // damping: 10
        }).start(unicornXY);
    });


const rainbow = document.querySelector('.rainbow');
const rainbowStyler = styler(rainbow);
const rainbowXY = value({ x: 0, y: 0 }, rainbowStyler.set);

listen(rainbow, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(rainbowXY.get()).start(rainbowXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: rainbowXY.get(),
            velocity: rainbowXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 100,
            mass: 2,
            // damping: 10
        }).start(rainbowXY);
    });


const rocket = document.querySelector('.rocket');
const rocketStyler = styler(rocket);
const rocketXY = value({ x: 0, y: 0 }, rocketStyler.set);

listen(rocket, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(rocketXY.get()).start(rocketXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: rocketXY.get(),
            velocity: rocketXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 300,
            mass: 4,
            damping: 10
        }).start(rocketXY);
    });

// //rainbow emoji physics
// const { pipe, clampMax } = transform;

// const rainbow = document.querySelector('.rainbow');
// const rainbowStyler = styler(rainbow);
// const rainbowY = value(0, (v) => rainbowStyler.set('y', Math.min(0, v)));
// const rainbowScale = value(1, (v) => {
//     rainbowStyler.set('scaleX', 1 + (1 - v));
//     rainbowStyler.set('scaleY', v);
// });
// let count = 0;
// let isFalling = false;

// const rainbowBorder = value({
//     borderColor: '',
//     borderWidth: 0
// }, ({ borderColor, borderWidth }) => rainbowStyler.set({
//     boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`
// }));

// const checkBounce = () => {
//     if (!isFalling || rainbowY.get() < 0) return;

//     isFalling = false;
//     const impactVelocity = rainbowY.getVelocity();
//     const compression = spring({
//         to: 1,
//         from: 1,
//         velocity: -impactVelocity * 0.01,
//         stiffness: 800
//     }).pipe((s) => {
//         if (s >= 1) {
//             s = 1;
//             compression.stop();

//             if (impactVelocity > 20) {
//                 isFalling = true;
//                 gravity
//                     .set(0)
//                     .setVelocity(-impactVelocity * 0.5);
//             }
//         }
//         return s;
//     }).start(rainbowScale);
// };

// const checkFail = () => {
//     if (rainbowY.get() >= 0 && rainbowY.getVelocity() !== 0 && rainbow.innerHTML !== 'Tap') {
//         count = 0;
//         tween({
//             from: { borderWidth: 0, borderColor: 'rgb(255, 28, 104, 1)' },
//             to: { borderWidth: 30, borderColor: 'rgb(255, 28, 104, 0)' }
//         }).start(rainbowBorder);

//         rainbow.innerHTML = 'Tap';
//     }
// };

// const gravity = physics({
//     acceleration: 2500,
//     restSpeed: false
// }).start((v) => {
//     rainbowY.update(v);
//     checkBounce(v);
//     checkFail(v);
// });

// listen(rainbow, 'mousedown touchstart').start((e) => {
//     e.preventDefault();
//     count++;
//     rainbow.innerHTML = count;

//     isFalling = true;
//     rainbowScale.stop();
//     rainbowScale.update(1);

//     gravity
//         .set(Math.min(0, rainbowY.get()))
//         .setVelocity(-1200);

//     tween({
//         from: { borderWidth: 0, borderColor: 'rgb(20, 215, 144, 1)' },
//         to: { borderWidth: 30, borderColor: 'rgb(20, 215, 144, 0)' }
//     }).start(rainbowBorder);
// });