
// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     rotate:360,
//     delay:1,
//     backgroundColor:"blue",
//     borderRadius:"50%"
// })


// const { default: gsap } = require("gsap");

// gsap.from("#box2",{
//     x:1200,
//     duration:1,
//     rotate:360,
//     delay:1,
//     backgroundColor:"red",
//     borderRadius:"50%"
// })

// gsap.from("h1", {
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:0.6,
//     // stagger:-1
// })

// gsap.from("#box",{
//     x:1200,
//     duration:2,
//     rotate:360,
//     delay:1,
//     backgroundColor:"red",
//     // repeat:2, //2 time move
//     repeat:-1, //infinity time move
//     yoyo:true,
//     borderRadius:"50%"
// })

// gsap.to("#box1",{
//     x:1200,
//     duration:1.5,
//     rotate:360,
//     delay:1,
//     backgroundColor:"blue",
//     borderRadius:"50%"
// })

// gsap.to("#box2",{
//     x:1200,
//     duration:1.5,
//     rotate:360,
//     delay:2.5,
//     backgroundColor:"red",
//     borderRadius:"50%"
// })

// gsap.to("#box3",{
//     x:1200,
//     duration:1.5,
//     scale:0.5,
//     rotate:360,
//     delay:4,
//     backgroundColor:"orange",
//     borderRadius:"50%"
// })

// var tl = gsap.timeline()

// tl.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// tl.to("#box2",{
//     x:1500,
//     duration:1.5
// })
// tl.to("#box3",{
//     x:1500,
//     duration:1.5
// })


var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})