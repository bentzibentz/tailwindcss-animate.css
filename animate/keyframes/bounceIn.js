const keyframeBounceIn = {
    'from, 20%, 40%, 60%, 80%, to': {
        animationTimingFunction: 'ease-in-out'
    },
    '0%': {
        opacity: '0',
        transform: 'scale3d(0.3, 0.3, 0.3)'
    },
    '20%': {
        transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    '40%': {
        transform: 'scale3d(0.9, 0.9, 0.9)'
    },
    '60%': {
        transform: 'scale3d(1.03, 1.03, 1.03)',
        opacity: '1'
    },
    '80%': {
        transform: 'scale3d(0.97, 0.97, 0.97)'
    },
    'to': {
        opacity: '1',
        transform: 'scale3d(1, 1, 1)'
    },
};

const keyframeBounceInDown = {
    'from, 60%, 75%, 90%, to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    },
    '0%': {
        opacity: '0',
        transform: 'translate3d(0, -3000px, 0)'
    },
    '60%': {
        opacity: '1',
        transform: 'translate3d(0, 25px, 0)'
    },
    '75%': {
        transform: 'translate3d(0, -10px, 0)'
    },
    '90%': {
        transform: 'translate3d(0, 5px, 0)'
    },
    'to': {
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeBounceInLeft = {
    'from, 60%, 75%, 90%, to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    },
    '0%': {
        opacity: '0',
        transform: 'translate3d(-3000px, 0, 0)'
    },
    '60%': {
        opacity: '1',
        transform: 'translate3d(25px, 0, 0)'
    },
    '75%': {
        transform: 'translate3d(-10px, 0, 0)'
    },
    '90%': {
        transform: 'translate3d(5px, 0, 0)'
    },
    'to': {
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeBounceInRight = {
    'from, 60%, 75%, 90%, to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    },
    '0%': {
        opacity: '0',
        transform: 'translate3d(3000px, 0, 0)'
    },
    '60%': {
        opacity: '1',
        transform: 'translate3d(-25px, 0, 0)'
    },
    '75%': {
        transform: 'translate3d(10px, 0, 0)'
    },
    '90%': {
        transform: 'translate3d(-5px, 0, 0)'
    },
    'to': {
        transform: 'translate3d(0, 0, 0)'
    },
};

const keyframeBounceInUp = {
    'from, 60%, 75%, 90%, to': {
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    },
    '0%': {
        opacity: '0',
        transform: 'translate3d(0, 3000px, 0)'
    },
    '60%': {
        opacity: '1',
        transform: 'translate3d(0, -20px, 0)'
    },
    '75%': {
        transform: 'translate3d(0, 10px, 0)'
    },
    '90%': {
        transform: 'translate3d(0, -5px, 0)'
    },
    'to': {
        transform: 'translate3d(0, 0, 0)'
    },
};

exports.keyframeBounceIn = keyframeBounceIn;
exports.keyframeBounceInDown = keyframeBounceInDown;
exports.keyframeBounceInLeft = keyframeBounceInLeft;
exports.keyframeBounceInRight = keyframeBounceInRight;
exports.keyframeBounceInUp = keyframeBounceInUp;
