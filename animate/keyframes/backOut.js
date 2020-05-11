const keyframeBackOutUp = {
    '0%': {
        opacity: '1',
        transform: 'scale(1)'
    },
    '80%': {
        opacity: '0.7',
        transform: 'translateY(0px) scale(0.7)'
    },
    '100%': {
        opacity: '0.7',
        transform: 'translateY(-700px) scale(0.7)'
    },
};

const keyframeBackOutDown = {
    '0%': {
        opacity: '1',
        transform: 'scale(1)'
    },
    '80%': {
        opacity: '0.7',
        transform: 'translateY(0px) scale(0.7)'
    },
    '100%': {
        opacity: '0.7',
        transform: 'translateY(700px) scale(0.7)'
    },
};

const keyframeBackOutLeft = {
    '0%': {
        opacity: '1',
        transform: 'scale(1)'
    },
    '80%': {
        opacity: '0.7',
        transform: 'translateX(-2000px) scale(0.7)'
    },
    '100%': {
        opacity: '0.7',
        transform: 'translateY(-700px) scale(0.7)'
    },
};

const keyframeBackOutRight = {
    '0%': {
        opacity: '1',
        transform: 'scale(1)'
    },
    '80%': {
        opacity: '0.7',
        transform: 'translateY(0px) scale(0.7)'
    },
    '100%': {
        opacity: '0.7',
        transform: 'translateX(2000px) scale(0.7)'
    },
};

exports.keyframeBackOutUp = keyframeBackOutUp;
exports.keyframeBackOutDown = keyframeBackOutDown;
exports.keyframeBackOutRight = keyframeBackOutRight;
exports.keyframeBackOutLeft = keyframeBackOutLeft;
