const keyframeRotateOut = {
    'from': {
        transformOrigin: 'center',
        opacity: '1'
    },
    'to': {
        transformOrigin: 'center',
        transform: 'rotate3d(0, 0, 1, 200deg)',
        opacity: '0'
    }
};

const keyframeRotateOutDownLeft = {
    'from': {
        transformOrigin: 'left bottom',
        opacity: '1'
    },
    'to': {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: '0'
    }
};

const keyframeRotateOutDownRight = {
    'from': {
        transformOrigin: 'right bottom',
        opacity: '1'
    },
    'to': {
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: '0'
    }
};

const keyframeRotateOutUpLeft = {
    'from': {
        transformOrigin: 'left bottom',
        opacity: '1'
    },
    'to': {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: '0'
    }
};

const keyframeRotateOutUpRight = {
    'from': {
        transformOrigin: 'right bottom',
        opacity: '1'
    },
    'to': {
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, 90deg)',
        opacity: '0'
    }
};

exports.keyframeRotateOut = keyframeRotateOut;
exports.keyframeRotateOutDownLeft = keyframeRotateOutDownLeft;
exports.keyframeRotateOutDownRight = keyframeRotateOutDownRight;
exports.keyframeRotateOutUpLeft = keyframeRotateOutUpLeft;
exports.keyframeRotateOutUpRight = keyframeRotateOutUpRight;
