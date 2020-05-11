const keyframeFadeIn = {
    'from': {
        opacity: '0'
    },
    'to': {
        opacity: '1'
    },
};

const keyframeFadeInDown = {
    'from': {
        opacity: '0',
        transform: 'translate3d(0, -100%, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInDownBig = {
    'from': {
        opacity: '0',
        transform: 'translate3d(0, -2000px, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInLeft = {
    'from': {
        opacity: '0',
        transform: 'translate3d(-100%, 0, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInLeftBig = {
    'from': {
        opacity: '0',
        transform: 'translate3d(-2000px, 0, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInRight = {
    'from': {
        opacity: '0',
        transform: 'translate3d(100%, 0, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInRightBig = {
    'from': {
        opacity: '0',
        transform: 'translate3d(2000px, 0, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInUp = {
    'from': {
        opacity: '0',
        transform: 'translate3d(0, 100%, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInUpBig = {
    'from': {
        opacity: '0',
        transform: 'translate3d(0, 2000px, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInTopLeft = {
    'from': {
        opacity: '0',
        transform: 'translate3d(-100%, -100%, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInTopRight = {
    'from': {
        opacity: '0',
        transform: 'translate3d(100%, -100%, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInBottomLeft = {
    'from': {
        opacity: '0',
        transform: 'translate3d(-100%, 100%, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeFadeInBottomRight = {
    'from': {
        opacity: '0',
        transform: 'translate3d(100%, 100%, 0)'
    },
    'to': {
        opacity: '1',
        transform: 'translate3d(0, 0, 0)'
    },
};

exports.keyframeFadeIn = keyframeFadeIn;
exports.keyframeFadeInDown = keyframeFadeInDown;
exports.keyframeFadeInDownBig = keyframeFadeInDownBig;
exports.keyframeFadeInLeft = keyframeFadeInLeft;
exports.keyframeFadeInLeftBig = keyframeFadeInLeftBig;
exports.keyframeFadeInRight = keyframeFadeInRight;
exports.keyframeFadeInRightBig = keyframeFadeInRightBig;
exports.keyframeFadeInUp = keyframeFadeInUp;
exports.keyframeFadeInUpBig = keyframeFadeInUpBig;
exports.keyframeFadeInTopLeft = keyframeFadeInTopLeft;
exports.keyframeFadeInTopRight = keyframeFadeInTopRight;
exports.keyframeFadeInBottomLeft = keyframeFadeInBottomLeft;
exports.keyframeFadeInBottomRight = keyframeFadeInBottomRight;
