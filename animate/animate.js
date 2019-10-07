const keyframes = require('./keyframes/keyframes');
const keyframesLightSpeed = require('./keyframes/lightspeed');
const keyframesFlip = require('./keyframes/flip');
const keyframesRotateIn = require('./keyframes/rotateIn');
const keyframesRotateOut = require('./keyframes/rotateOut');
const keyframesRoll = require('./keyframes/roll');
const keyframesZoomIn = require('./keyframes/zoomIn');
const keyframesZoomOut = require('./keyframes/zoomOut');
const keyframesBounceIn = require('./keyframes/bounceIn');
const keyframesBounceOut = require('./keyframes/bounceOut');
const keyframesSlideIn = require('./keyframes/slideIn');
const keyframesSlideOut = require('./keyframes/slideOut');
const keyframesFadeIn = require('./keyframes/fadeIn');
const keyframesFadeOut = require('./keyframes/fadeOut');

module.exports = function ({ settings = {}, variants = ['responsive'] }) {
    return function ({ e, addUtilities }) {

        // set fallback if speed not defined
        const animatedSpeed = settings.animatedSpeed ? settings.animatedSpeed : 1000;
        const heartBeatSpeed = settings.heartBeatSpeed ? settings.heartBeatSpeed : 1000;
        const hingeSpeed = settings.hingeSpeed ? settings.hingeSpeed : 2000;
        const bounceInSpeed = settings.bounceInSpeed ? settings.bounceInSpeed : 750;
        const bounceOutSpeed = settings.bounceOutSpeed ? settings.bounceOutSpeed : 750;
        const animationDelaySpeed = settings.animationDelaySpeed ? settings.animationDelaySpeed : 500;
        const opacity = settings.opacity ? settings.opacity : 1;

        addUtilities({
            '.animated': {
                animationDuration: `${animatedSpeed}ms`,
                animationFillMode: 'both'
            },
            '.infinite': {
                animationIterationCount: 'infinite'
            },
            '.delay': {
                animationDelay: `${animationDelaySpeed}ms`
            },
            '.delay-1s': {
                animationDelay: `1000ms`
            },
            '.delay-2s': {
                animationDelay: `2000ms`
            },
            '.delay-3s': {
                animationDelay: `3000ms`
            },
            '.delay-4s': {
                animationDelay: `4000ms`
            },
            '.delay-5s': {
                animationDelay: `5000ms`
            },
            '.fast': {
                animationDelay: `800ms`
            },
            '.faster': {
                animationDelay: `500ms`
            },
            '.slow': {
                animationDelay: `2000ms`
            },
            '.slower': {
                animationDelay: `3000ms`
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
                animationDuration: `${heartBeatSpeed}ms`,
                animationTimingFunction: 'ease-in-out'
            },
            '.hinge': {
                animationName: 'hinge',
                animationDuration: `${hingeSpeed}ms`,
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
            '.bounceIn': {
                animationName: 'bounceIn',
                animationDuration: `${bounceInSpeed}ms`,
            },
            '.bounceInDown': {
                animationName: 'bounceInDown',
            },
            '.bounceInLeft': {
                animationName: 'bounceInLeft',
            },
            '.bounceInRight': {
                animationName: 'bounceInRight',
            },
            '.bounceInUp': {
                animationName: 'bounceInUp',
            },
            '.bounceOut': {
                animationName: 'bounceOut',
                animationDuration: `${bounceOutSpeed}ms`,
            },
            '.bounceOutDown': {
                animationName: 'bounceOutDown',
            },
            '.bounceOutLeft': {
                animationName: 'bounceOutLeft',
            },
            '.bounceOutRight': {
                animationName: 'bounceOutRight',
            },
            '.bounceOutUp': {
                animationName: 'bounceOutUp',
            },
            '.zoomOut': {
                animationName: 'zoomIn',
            },
            '.zoomOutDown': {
                animationName: 'zoomOutDown',
            },
            '.zoomOutLeft': {
                animationName: 'zoomOutLeft',
            },
            '.zoomOutRight': {
                animationName: 'zoomOutRight',
            },
            '.zoomOutUp': {
                animationName: 'zoomOutUp',
            },
            '.slideInDown': {
                animationName: 'slideInDown'
            },
            '.slideInLeft': {
                animationName: 'slideInLeft'
            },
            '.slideInRight': {
                animationName: 'slideInRight'
            },
            '.slideInUp': {
                animationName: 'slideInUp'
            },
            '.slideOutDown': {
                animationName: 'slideOutDown'
            },
            '.slideOutLeft': {
                animationName: 'slideOutLeft'
            },
            '.slideOutRight': {
                animationName: 'slideOutRight'
            },
            '.slideOutUp': {
                animationName: 'slideOutUp'
            },
            '.fadeIn': {
                animationName: 'fadeIn'
            },
            '.fadeInDown': {
                animationName: 'fadeInDown'
            },
            '.fadeInDownBig': {
                animationName: 'fadeInDownBig'
            },
            '.fadeInLeft': {
                animationName: 'fadeInLeft'
            },
            '.fadeInLeftBig': {
                animationName: 'fadeInLeftBig'
            },
            '.fadeInRight': {
                animationName: 'fadeInRight'
            },
            '.fadeInRightBig': {
                animationName: 'fadeInRightBig'
            },
            '.fadeInUp': {
                animationName: 'fadeInUp'
            },
            '.fadeInUpBig': {
                animationName: 'fadeInUpBig'
            },
            '.fadeOut': {
                animationName: 'fadeOut'
            },
            '.fadeOutDown': {
                animationName: 'fadeOutDown'
            },
            '.fadeOutDownBig': {
                animationName: 'fadeOutDownBig'
            },
            '.fadeOutLeft': {
                animationName: 'fadeOutLeft'
            },
            '.fadeOutLeftBig': {
                animationName: 'fadeOutLeftBig'
            },
            '.fadeOutRight': {
                animationName: 'fadeOutRight'
            },
            '.fadeOutRightBig': {
                animationName: 'fadeOutRightBig'
            },
            '.fadeOutUp': {
                animationName: 'fadeOutUp'
            },
            '.fadeOutUpBig': {
                animationName: 'fadeOutUpBig'
            },
        }, variants);

        addUtilities({
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
            '@keyframes bounceIn': keyframesBounceIn.keyframeBounceIn,
            '@keyframes bounceInDown': keyframesBounceIn.keyframeBounceInDown,
            '@keyframes bounceInLeft': keyframesBounceIn.keyframeBounceInLeft,
            '@keyframes bounceInRight': keyframesBounceIn.keyframeBounceInRight,
            '@keyframes bounceInUp': keyframesBounceIn.keyframeBounceInUp,
            '@keyframes bounceOut': keyframesBounceOut.keyframeBounceOut,
            '@keyframes bounceOutDown': keyframesBounceOut.keyframeBounceOutDown,
            '@keyframes bounceOutLeft': keyframesBounceOut.keyframeBounceOutLeft,
            '@keyframes bounceOutRight': keyframesBounceOut.keyframeBounceOutRight,
            '@keyframes bounceOutUp': keyframesBounceOut.keyframeBounceOutUp,
            '@keyframes zoomOut': keyframesZoomOut.keyframeZoomOut,
            '@keyframes zoomOutDown': keyframesZoomOut.keyframeZoomOutDown,
            '@keyframes zoomOutLeft': keyframesZoomOut.keyframeZoomOutLeft,
            '@keyframes zoomOutRight': keyframesZoomOut.keyframeZoomOutRight,
            '@keyframes zoomOutUp': keyframesZoomOut.keyframeZoomOutUp,
            '@keyframes slideInDown': keyframesSlideIn.keyframeSlideInDown,
            '@keyframes slideInLeft': keyframesSlideIn.keyframeSlideInLeft,
            '@keyframes slideInRight': keyframesSlideIn.keyframeSlideInRight,
            '@keyframes slideInUp': keyframesSlideIn.keyframeSlideInUp,
            '@keyframes slideOutDown': keyframesSlideOut.keyframeSlideOutDown,
            '@keyframes slideOutLeft': keyframesSlideOut.keyframeSlideOutLeft,
            '@keyframes slideOutRight': keyframesSlideOut.keyframeSlideOutRight,
            '@keyframes slideOutUp': keyframesSlideOut.keyframeSlideOutUp,
            '@keyframes fadeIn': keyframesFadeIn.keyframeFadeIn,
            '@keyframes fadeInDown': keyframesFadeIn.keyframeFadeInDown,
            '@keyframes fadeInDownBig': keyframesFadeIn.keyframeFadeInDownBig,
            '@keyframes fadeInLeft': keyframesFadeIn.keyframeFadeInLeft,
            '@keyframes fadeInLeftBig': keyframesFadeIn.keyframeFadeInLeftBig,
            '@keyframes fadeInRight': keyframesFadeIn.keyframeFadeInRight,
            '@keyframes fadeInRightBig': keyframesFadeIn.keyframeFadeInRightBig,
            '@keyframes fadeInUp': keyframesFadeIn.keyframeFadeInUp,
            '@keyframes fadeInUpBig': keyframesFadeIn.keyframeFadeInUpBig,
            '@keyframes fadeOut': keyframesFadeOut.keyframeFadeOut,
            '@keyframes fadeOutDown': keyframesFadeOut.keyframeFadeOutDown,
            '@keyframes fadeOutDownBig': keyframesFadeOut.keyframeFadeOutDownBig,
            '@keyframes fadeOutLeft': keyframesFadeOut.keyframeFadeOutLeft,
            '@keyframes fadeOutLeftBig': keyframesFadeOut.keyframeFadeOutLeftBig,
            '@keyframes fadeOutRight': keyframesFadeOut.keyframeFadeOutRight,
            '@keyframes fadeOutRightBig': keyframesFadeOut.keyframeFadeOutRightBig,
            '@keyframes fadeOutUp': keyframesFadeOut.keyframeFadeOutUp,
            '@keyframes fadeOutUpBig': keyframesFadeOut.keyframeFadeOutUpBig
        });
    };
};
