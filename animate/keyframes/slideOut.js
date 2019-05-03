const keyframeSlideOutDown = {
    'from': {
        transform: 'translate3d(0, 0, 0)'
    },
    'to': {
        visibility: 'hidden',
        transform: 'translate3d(0, 100%, 0)'
    },
};
const keyframeSlideOutLeft = {
    'from': {
        transform: 'translate3d(0, 0, 0)'
    },
    'to': {
        visibility: 'hidden',
        transform: 'translate3d(-100%, 0, 0)'
    },
};
const keyframeSlideOutRight = {
    'from': {
        transform: 'translate3d(0, 0, 0)'
    },
    'to': {
        visibility: 'hidden',
        transform: 'translate3d(100%, 0, 0)'
    },
};
const keyframeSlideOutUp = {
    'from': {
        transform: 'translate3d(0, 0, 0)'
    },
    'to': {
        visibility: 'hidden',
        transform: 'translate3d(0, -100%, 0)'
    }
};


exports.keyframeSlideOutDown = keyframeSlideOutDown;
exports.keyframeSlideOutLeft = keyframeSlideOutLeft;
exports.keyframeSlideOutRight = keyframeSlideOutRight;
exports.keyframeSlideOutUp = keyframeSlideOutUp;
