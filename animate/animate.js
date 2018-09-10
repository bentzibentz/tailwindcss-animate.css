const keyframes = require('./keyframes/keyframes');
const keyframesLightSpeed = require('./keyframes/lightspeed');
const keyframesFlip = require('./keyframes/flip');
const keyframesRotateIn = require('./keyframes/rotateIn');
const keyframesRotateOut = require('./keyframes/rotateOut');
const keyframesRoll = require('./keyframes/roll');
const keyframesZoomIn = require('./keyframes/zoomIn');

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
            '.lightSpeedIn': {
                animationName: 'lightSpeedIn',
            },
            '.lightSpeedOut': {
                animationName: 'lightSpeedOut',
            },
            '.flip': {
                animationName: 'flip',
                backfaceVisibility: 'visible'
            },
            '.flipInX': {
                animationName: 'flipInX',
                backfaceVisibility: 'visible'
            },
            '.flipInY': {
                animationName: 'flipInY',
                backfaceVisibility: 'visible'
            },
            '.flipOutX': {
                animationName: 'flipOutX',
                backfaceVisibility: 'visible'
            },
            '.rotateIn': {
                animationName: 'rotateIn',
            },
            '.rotateInDownLeft': {
                animationName: 'rotateInDownLeft',
            },
            '.rotateInDownRight': {
                animationName: 'rotateInDownRight',
            },
            '.rotateInUpLeft': {
                animationName: 'rotateInUpLeft',
            },
            '.rotateInUpRight': {
                animationName: 'rotateInUpRight',
            },
            '.rotateOut': {
                animationName: 'rotateOut',
            },
            '.rotateOutDownLeft': {
                animationName: 'rotateOutDownLeft',
            },
            '.rotateOutDownRight': {
                animationName: 'rotateOutDownRight',
            },
            '.rotateOutUpLeft': {
                animationName: 'rotateOutUpLeft',
            },
            '.rotateOutUpRight': {
                animationName: 'rotateOutUpRight',
            },
            '.rollIn': {
                animationName: 'rollIn',
            },
            '.rollOut': {
                animationName: 'rollOut',
            },
            '.zoomIn': {
                animationName: 'zoomIn',
            },
            '.zoomInDown': {
                animationName: 'zoomInDown',
            },
            '.zoomInLeft': {
                animationName: 'zoomInLeft',
            },
            '.zoomInRight': {
                animationName: 'zoomInRight',
            },
            '.zoomInUp': {
                animationName: 'zoomInUp',
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
            '@keyframes jackInTheBox': keyframes.keyframeJackInTheBox,
            '@keyframes lightSpeedIn': keyframesLightSpeed.keyframeLightSpeedIn,
            '@keyframes lightSpeedOut': keyframesLightSpeed.keyframeLightSpeedOut,
            '@keyframes flip': keyframesFlip.keyframeFlip,
            '@keyframes flipInX': keyframesFlip.keyframeFlipInX,
            '@keyframes flipInY': keyframesFlip.keyframeFlipInY,
            '@keyframes flipOutX': keyframesFlip.keyframeFlipOutX,
            '@keyframes flipOutY': keyframesFlip.keyframeFlipOutY,
            '@keyframes rotateIn': keyframesRotateIn.keyframeRotateIn,
            '@keyframes rotateInDownLeft': keyframesRotateIn.keyframeRotateInDownLeft,
            '@keyframes rotateInDownRight': keyframesRotateIn.keyframeRotateInDownRight,
            '@keyframes rotateInUpLeft': keyframesRotateIn.keyframeRotateInUpLeft,
            '@keyframes rotateInUpRight': keyframesRotateIn.keyframeRotateInUpRight,
            '@keyframes rotateOut': keyframesRotateOut.keyframeRotateOut,
            '@keyframes rotateOutDownLeft': keyframesRotateOut.keyframeRotateOutDownLeft,
            '@keyframes rotateOutDownRight': keyframesRotateOut.keyframeRotateOutDownRight,
            '@keyframes rotateOutUpLeft': keyframesRotateOut.keyframeRotateOutUpLeft,
            '@keyframes rotateOutUpRight': keyframesRotateOut.keyframeRotateOutUpRight,
            '@keyframes rollIn': keyframesRoll.keyframeRollIn,
            '@keyframes rollOut': keyframesRoll.keyframeRollOut,
            '@keyframes zoomIn': keyframesZoomIn.keyframeZoomIn,
            '@keyframes zoomInDown': keyframesZoomIn.keyframeZoomInDown,
            '@keyframes zoomInLeft': keyframesZoomIn.keyframeZoomInLeft,
            '@keyframes zoomInRight': keyframesZoomIn.keyframeZoomInRight,
            '@keyframes zoomInUp': keyframesZoomIn.keyframeZoomInUp,
        })
    };
};
