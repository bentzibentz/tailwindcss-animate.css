const keyframeBackInUp = {
    '0%': {
        opacity: '0.7',
        transform: 'translateY(1200px) scale(0.7)'
    },
    '80%': {
        opacity: '0.7',
        transform: 'translateY(0px) scale(0.7)'
    },
    '100%': {
        opacity: '1',
        transform: 'scale(1)'
    },
};

const keyframeBackInDown = {
    '0%': {
        opacity: '0.7',
        transform: 'translateY(-1200px) scale(0.7)'
    },
    '80%': {
        opacity: '0.7',
        transform: 'translateY(0px) scale(0.7)'
    },
    '100%': {
        opacity: '1',
        transform: 'scale(1)'
    },
};

const keyframeBackInLeft = {
    '0%': {
        opacity: '0.7',
        transform: 'translateX(-2000px) scale(0.7)'
    },
    '80%': {
        opacity: '0.7',
        transform: 'translateX(0px) scale(0.7)'
    },
    '100%': {
        opacity: '1',
        transform: 'scale(1)'
    },
};

const keyframeBackInRight = {
    '0%': {
        opacity: '0.7',
        transform: 'translateX(2000px) scale(0.7)'
    },
    '80%': {
        opacity: '0.7',
        transform: 'translateY(0px) scale(0.7)'
    },
    '100%': {
        opacity: '1',
        transform: 'scale(1)'
    },
};

exports.keyframeBackInUp = keyframeBackInUp;
exports.keyframeBackInDown = keyframeBackInDown;
exports.keyframeBackInRight = keyframeBackInRight;
exports.keyframeBackInLeft = keyframeBackInLeft;
