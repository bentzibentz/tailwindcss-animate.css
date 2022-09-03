const keyframeSlideInDown = {
    'from': {
        transform: 'translate3d(0, -100%, 0)',
        visibility: 'visible'
    },
    'to': {
        transform: 'translate3d(0, 0, 0)'
    },
};
const keyframeSlideInLeft = {
    'from': {
        transform: 'translate3d(-100%, 0, 0)',
        visibility: 'visible'
    },
    'to': {
        transform: 'translate3d(0, 0, 0)'
    },
};
const keyframeSlideInRight = {
    'from': {
        transform: 'translate3d(100%, 0, 0)',
        visibility: 'visible'
    },
    'to': {
        transform: 'translate3d(0, 0, 0)'
    },
};
const keyframeSlideInUp = {
    'from': {
        transform: 'translate3d(0, 100%, 0)',
        visibility: 'visible'
    },
    'to': {
        transform: 'translate3d(0, 0, 0)'
    }
};


exports.keyframeSlideInDown = keyframeSlideInDown;
exports.keyframeSlideInLeft = keyframeSlideInLeft;
exports.keyframeSlideInRight = keyframeSlideInRight;
exports.keyframeSlideInUp = keyframeSlideInUp;
