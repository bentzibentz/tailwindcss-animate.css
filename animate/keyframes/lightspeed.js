const keyframeLightSpeedIn = {
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

const keyframeLightSpeedOut= {
    'from': {
        opacity: '1',
    },
    'to': {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0) skewX(30deg)'
    }
};

exports.keyframeLightSpeedIn = keyframeLightSpeedIn;
exports.keyframeLightSpeedOut = keyframeLightSpeedOut;
