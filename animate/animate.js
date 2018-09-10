const keyframes = require('./keyframes/keyframes');

module.exports = function () {
    return function ({ addUtilities }) {

        addUtilities({
            '.animated': {
                animationDuration: '1s',
                animationFillMode: 'both'
            },
            '.infinite': {
                animationIterationCount: 'infinite'
            },
            '.bounce': {
                animationName: 'bounce',
                transformOrigin: 'center bottom'
            },
            '.flash': {
                animationName: 'flash',
            },
            '.pulse': {
                animationName: 'pulse',
            },
            '.rubberBand': {
                animationName: 'rubberBand',
            },
            '.shake': {
                animationName: 'shake',
            },
            '.headShake': {
                animationTimingFunction: 'ease-in-out',
                animationName: 'headShake',
            },
            '.swing': {
                transformOrigin: 'top center',
                animationName: 'swing',
            },
            '.tada': {
                animationName: 'tada',
            },
            '.wobble': {
                animationName: 'wobble',
            },
            '.jello': {
                animationName: 'jello',
            },
            '.heartBeat': {
                animationName: 'heartBeat',
                animationDuration: '1s',
                animationTimingFunction: 'ease-in-out'
            },
            '.hinge': {
                animationName: 'hinge',
                animationDuration: '2s',
            },
            '.jackInTheBox': {
                animationName: 'jackInTheBox',
            },
            '@keyframes bounce': keyframes.keyframeBounce,
            '@keyframes flash': keyframes.keyframeFlash,
            '@keyframes pulse': keyframes.keyframePulse,
            '@keyframes rubberBand': keyframes.keyframeRubberBand,
            '@keyframes shake': keyframes.keyframeShake,
            '@keyframes headShake': keyframes.keyframeHeadShake,
            '@keyframes swing': keyframes.keyframeSwing,
            '@keyframes tada': keyframes.keyframeTada,
            '@keyframes wobble': keyframes.keyframeWobble,
            '@keyframes jello': keyframes.keyframeJello,
            '@keyframes heartBeat': keyframes.keyframeHeartBeat,
            '@keyframes hinge': keyframes.keyframeHinge,
            '@keyframes jackInTheBox': keyframes.keyframeJackInTheBox
        })
    };
};