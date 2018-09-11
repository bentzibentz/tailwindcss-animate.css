const keyframeZoomOut = {
    'from': {
        opacity: '1'
    },
    '50%': {
        opacity: '0',
        transform: 'scale3d(0.3, 0.3, 0.3)'
    },
    'to': {
       opacity: '0'
    }
};

const keyframeZoomOutDown = {
    '40%': {
        opacity: '1',
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
    },
    'to': {
        opacity: '0',
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
        transformOrigin: 'center bottom',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    }
};

const keyframeZoomOutLeft = {
    '40%': {
        opacity: '1',
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
    },
    'to': {
        opacity: '0',
        transform: 'scale(0.1) translate3d(-2000px, 0, 0)',
        transformOrigin: 'left center',
    }
};

const keyframeZoomOutRight = {
    '40%': {
        opacity: '1',
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
    },
    'to': {
        opacity: '0',
        transform: 'scale(0.1) translate3d(2000px, 0, 0)',
        transformOrigin: 'right center',
    }
};

const keyframeZoomOutUp = {
    '40%': {
        opacity: '1',
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
    },
    'to': {
        opacity: '0',
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
        transformOrigin: 'center bottom',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    }
};

exports.keyframeZoomOut = keyframeZoomOut;
exports.keyframeZoomOutDown = keyframeZoomOutDown;
exports.keyframeZoomOutLeft = keyframeZoomOutLeft;
exports.keyframeZoomOutRight = keyframeZoomOutRight;
exports.keyframeZoomOutUp = keyframeZoomOutUp;
