const keyframeFlip = {
    'from': {
        transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
        animationTimingFunction: 'ease-out'
    },
    '40%': {
        transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
        animationTimingFunction: 'ease-out'
    },
    '50%': {
        transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
        animationTimingFunction: 'ease-in'
    },
    '80%': {
        transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
        animationTimingFunction: 'ease-in'
    },
    'to': {
        transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
        animationTimingFunction: 'ease-in'
    }
};

const keyframeFlipInX = {
    'from': {
        transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
        animationTimingFunction: 'ease-in',
        opacity: '0'
    },
    '40%': {
        transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
        animationTimingFunction: 'ease-in'
    },
    '60%': {
        transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
        opacity: '1'
    },
    '80%': {
        transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
    },
    'to': {
        transform: 'perspective(400px)',
    }
};

const keyframeFlipInY = {
    'from': {
        transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
        animationTimingFunction: 'ease-in',
        opacity: '0'
    },
    '40%': {
        transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
        animationTimingFunction: 'ease-in'
    },
    '60%': {
        transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
        opacity: '1'
    },
    '80%': {
        transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',
    },
    'to': {
        transform: 'perspective(400px)',
    }
};

const keyframeFlipOutX = {
    'from': {
        transform: 'perspective(400px)',
    },
    '30%': {
        transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
        opacity: '1'
    },
    'to': {
        transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
        opacity: '0'
    }
};

const keyframeFlipOutY = {
    'from': {
        transform: 'perspective(400px)',
    },
    '30%': {
        transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
        opacity: '1'
    },
    'to': {
        transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
        opacity: '0'
    }
};

exports.keyframeFlip = keyframeFlip;
exports.keyframeFlipInX = keyframeFlipInX;
exports.keyframeFlipInY = keyframeFlipInY;
exports.keyframeFlipOutX = keyframeFlipOutX;
exports.keyframeFlipOutY = keyframeFlipOutY;
