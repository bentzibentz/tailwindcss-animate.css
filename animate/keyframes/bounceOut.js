const keyframeBounceOut = {
    '20%': {
        transform: 'scale3d(0.9, 0.9, 0.9)'
    },
    '50%, 55%': {
        opacity: '1',
        transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    'to': {
        opacity: '0',
        transform: 'scale3d(0.3, 0.3, 0.3)'
    },
};

const keyframeBounceOutDown = {
    '20%': {
        transform: 'translate3d(0, 10px, 0)'
    },
    '40%, 45%': {
        opacity: '1',
        transform: 'translate3d(0, -20px, 0)'
    },
    'to': {
        opacity: '0',
        transform: 'translate3d(0, 2000px, 0)'
    },
};

const keyframeBounceOutLeft = {
    '20%': {
        opacity: '1',
        transform: 'translate3d(20px, 0, 0)'
    },
    'to': {
        opacity: '0',
        transform: 'translate3d(-2000px, 0, 0)'
    },
};

const keyframeBounceOutRight = {
    '20%': {
        opacity: '1',
        transform: 'translate3d(-20px, 0, 0)'
    },
    'to': {
        opacity: '0',
        transform: 'translate3d(2000px, 0, 0)'
    },
};

const keyframeBounceOutUp = {
    '20%': {
        transform: 'translate3d(0, -10px, 0)'
    },
    '40%, 45%': {
        opacity: '1',
        transform: 'translate3d(0, 20px, 0)'
    },
    'to': {
        opacity: '0',
        transform: 'translate3d(0, -2000px, 0)'
    },
};

exports.keyframeBounceOut = keyframeBounceOut;
exports.keyframeBounceOutDown = keyframeBounceOutDown;
exports.keyframeBounceOutLeft = keyframeBounceOutLeft;
exports.keyframeBounceOutRight = keyframeBounceOutRight;
exports.keyframeBounceOutUp = keyframeBounceOutUp;
