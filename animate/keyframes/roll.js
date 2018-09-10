const keyframeRollIn = {
    'from': {
        opacity: '0',
        transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    }
};
const keyframeRollOut = {
    'from': {
        opacity: '1',
    },
    'to': {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)'
    }
};


exports.keyframeRollIn = keyframeRollIn;
exports.keyframeRollOut = keyframeRollOut;
