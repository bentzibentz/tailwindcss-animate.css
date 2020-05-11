const keyframeLightSpeedInRight = {
    'from': {
      opacity: '0',
      transform: 'translate3d(100%, 0, 0) skewX(-30deg)'
    },
    '60%': {
        opacity: '1',
        transform: 'skewX(20deg)'
    },
    '80%': {
        transform: 'skewX(-5deg)'
    },
    'to': {
        transform: 'translate3d(0, 0, 0)'
    }
};

const keyframeLightSpeedInLeft = {
    'from': {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)'
    },
    '60%': {
        opacity: '1',
        transform: 'skewX(20deg)'
    },
    '80%': {
        transform: 'skewX(-5deg)'
    },
    'to': {
        transform: 'translate3d(0, 0, 0)'
    }
};

const keyframeLightSpeedOutLeft = {
    'from': {
        opacity: '1',
    },
    'to': {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0) skewX(30deg)'
    }
};

const keyframeLightSpeedOutRight = {
    'from': {
        opacity: '1',
    },
    'to': {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0) skewX(30deg)'
    }
};

exports.keyframeLightSpeedInLeft = keyframeLightSpeedInLeft;
exports.keyframeLightSpeedInRight = keyframeLightSpeedInRight;
exports.keyframeLightSpeedOutLeft = keyframeLightSpeedOutLeft;
exports.keyframeLightSpeedOutRight = keyframeLightSpeedOutRight;
