const keyframeRotateIn = {
    'from': {
        transformOrigin: 'center',
        transform: 'rotate3d(0, 0, 1, -200deg)',
        opacity: '0'
    },
    'to': {
        transformOrigin: 'center',
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
    }
};

const keyframeRotateInDownLeft = {
    'from': {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: '0'
    },
    'to': {
        transformOrigin: 'left bottom',
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
    }
};

const keyframeRotateInDownRight = {
    'from': {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: '0'
    },
    'to': {
        transformOrigin: 'right bottom',
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
    }
};

const keyframeRotateInUpLeft = {
    'from': {
        transformOrigin: 'left top',
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: '0'
    },
    'to': {
        transformOrigin: 'left top',
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
    }
};

const keyframeRotateInUpRight = {
    'from': {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, -90deg)',
        opacity: '0'
    },
    'to': {
        transformOrigin: 'right bottom',
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
    }
};

exports.keyframeRotateIn = keyframeRotateIn;
exports.keyframeRotateInDownLeft = keyframeRotateInDownLeft;
exports.keyframeRotateInDownRight = keyframeRotateInDownRight;
exports.keyframeRotateInUpLeft = keyframeRotateInUpLeft;
exports.keyframeRotateInUpRight = keyframeRotateInUpRight;
