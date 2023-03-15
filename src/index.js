const plugin = require('tailwindcss/plugin');
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
const keyframesBackIn = require('./keyframes/backIn');
const keyframesBackOut = require('./keyframes/backOut');

const defaultAnimatedClassName = 'animate__';

const animateCssTailwindCss = plugin(
    function ({addUtilities, theme, e}) {
        let animatedSettings = theme('animatedSettings');

        if (!animatedSettings) {
            animatedSettings = {};
        }

        // set fallback if speed not defined
        const animatedSpeed = animatedSettings.animatedSpeed ? animatedSettings.animatedSpeed : 1000;
        const heartBeatSpeed = animatedSettings.heartBeatSpeed ? animatedSettings.heartBeatSpeed : 1000;
        const hingeSpeed = animatedSettings.hingeSpeed ? animatedSettings.hingeSpeed : 2000;
        const bounceInSpeed = animatedSettings.bounceInSpeed ? animatedSettings.bounceInSpeed : 750;
        const bounceOutSpeed = animatedSettings.bounceOutSpeed ? animatedSettings.bounceOutSpeed : 750;
        const animationDelaySpeed = animatedSettings.animationDelaySpeed ? animatedSettings.animationDelaySpeed : 500;
        const classes = animatedSettings.classes ? animatedSettings.classes : [];
        // perform only undefined check to allow empty string/class name
        const animatedClassName = animatedSettings.animatedClassName === undefined ? defaultAnimatedClassName : animatedSettings.animatedClassName;

        const fallbackKeyframes = {
            '@keyframes bounce': keyframes.keyframeBounce,
            '@keyframes flash': keyframes.keyframeFlash,
            '@keyframes pulse': keyframes.keyframePulse,
            '@keyframes rubberBand': keyframes.keyframeRubberBand,
            '@keyframes shakeX': keyframes.keyframeShakeX,
            '@keyframes shakeY': keyframes.keyframeShakeY,
            '@keyframes headShake': keyframes.keyframeHeadShake,
            '@keyframes swing': keyframes.keyframeSwing,
            '@keyframes tada': keyframes.keyframeTada,
            '@keyframes wobble': keyframes.keyframeWobble,
            '@keyframes jello': keyframes.keyframeJello,
            '@keyframes heartBeat': keyframes.keyframeHeartBeat,
            '@keyframes hinge': keyframes.keyframeHinge,
            '@keyframes jackInTheBox': keyframes.keyframeJackInTheBox,
            '@keyframes lightSpeedInLeft': keyframesLightSpeed.keyframeLightSpeedInLeft,
            '@keyframes lightSpeedInRight': keyframesLightSpeed.keyframeLightSpeedInRight,
            '@keyframes lightSpeedOutLeft': keyframesLightSpeed.keyframeLightSpeedOutLeft,
            '@keyframes lightSpeedOutRight': keyframesLightSpeed.keyframeLightSpeedOutRight,
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
            '@keyframes fadeInTopLeft': keyframesFadeIn.keyframeFadeInTopLeft,
            '@keyframes fadeInTopRight': keyframesFadeIn.keyframeFadeInTopRight,
            '@keyframes fadeInBottomLeft': keyframesFadeIn.keyframeFadeInBottomLeft,
            '@keyframes fadeInBottomRight': keyframesFadeIn.keyframeFadeInBottomRight,
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
            '@keyframes fadeOutUpBig': keyframesFadeOut.keyframeFadeOutUpBig,
            '@keyframes fadeOutTopLeft': keyframesFadeOut.keyframeFadeOutTopLeft,
            '@keyframes fadeOutTopRight': keyframesFadeOut.keyframeFadeOutTopRight,
            '@keyframes fadeOutBottomLeft': keyframesFadeOut.keyframeFadeOutBottomLeft,
            '@keyframes fadeOutBottomRight': keyframesFadeOut.keyframeFadeOutBottomRight,
            '@keyframes backInDown': keyframesBackIn.keyframeBackInDown,
            '@keyframes backInUp': keyframesBackIn.keyframeBackInUp,
            '@keyframes backInLeft': keyframesBackIn.keyframeBackInLeft,
            '@keyframes backInRight': keyframesBackIn.keyframeBackInRight,
            '@keyframes backOutDown': keyframesBackOut.keyframeBackOutDown,
            '@keyframes backOutUp': keyframesBackOut.keyframeBackOutUp,
            '@keyframes backOutLeft': keyframesBackOut.keyframeBackOutLeft,
            '@keyframes backOutRight': keyframesBackOut.keyframeBackOutRight,
        }

        const fallbackAnimateUtility = {
            'animated': {
                'animation-duration': `${animatedSpeed}ms`,
                'animation-fill-mode': 'both'
            },
        }

        const fallbackUtilities = {
            'infinite': {
                'animation-iteration-count': 'infinite'
            },
            'repeat-1': {
                'animation-repeat': 1
            },
            'repeat-2': {
                'animation-repeat': 2
            },
            'repeat-3': {
                'animation-repeat': 3
            },
            'delay': {
                'animation-delay': `${animationDelaySpeed}ms`
            },
            'delay-1s': {
                'animation-delay': `1000ms`
            },
            'delay-2s': {
                'animation-delay': `2000ms`
            },
            'delay-3s': {
                'animation-delay': `3000ms`
            },
            'delay-4s': {
                'animation-delay': `4000ms`
            },
            'delay-5s': {
                'animation-delay': `5000ms`
            },
            'fast': {
                'animation-duration': `800ms`
            },
            'faster': {
                'animation-duration': `500ms`
            },
            'slow': {
                'animation-duration': `2000ms`
            },
            'slower': {
                'animation-duration': `3000ms`
            },
            'bounce': {
                'animation-name': 'bounce',
                'transform-origin': 'center bottom'
            },
            'flash': {
                'animation-name': 'flash',
            },
            'pulse': {
                'animation-name': 'pulse',
            },
            'rubberBand': {
                'animation-name': 'rubberBand',
            },
            'shakeX': {
                'animation-name': 'shakeX',
            },
            'shakeY': {
                'animation-name': 'shakeY',
            },
            'headShake': {
                'animation-timing-function': 'ease-in-out',
                'animation-name': 'headShake',
            },
            'swing': {
                'transform-origin': 'top center',
                'animation-name': 'swing',
            },
            'tada': {
                'animation-name': 'tada',
            },
            'wobble': {
                'animation-name': 'wobble',
            },
            'jello': {
                'animation-name': 'jello',
            },
            'heartBeat': {
                'animation-name': 'heartBeat',
                'animation-duration': `${heartBeatSpeed}ms`,
                'animation-timing-function': 'ease-in-out'
            },
            'hinge': {
                'animation-name': 'hinge',
                'animation-duration': `${hingeSpeed}ms`,
            },
            'jackInTheBox': {
                'animation-name': 'jackInTheBox',
            },
            'lightSpeedInLeft': {
                'animation-name': 'lightSpeedInLeft',
            },
            'lightSpeedInRight': {
                'animation-name': 'lightSpeedInRight',
            },
            'lightSpeedOutLeft': {
                'animation-name': 'lightSpeedOutLeft',
            },
            'lightSpeedOutRight': {
                'animation-name': 'lightSpeedOutRight',
            },
            'flip': {
                'animation-name': 'flip',
                'backface-visibility': 'visible'
            },
            'flipInX': {
                'animation-name': 'flipInX',
                'backface-visibility': 'visible'
            },
            'flipInY': {
                'animation-name': 'flipInY',
                'backface-visibility': 'visible'
            },
            'flipOutX': {
                'animation-name': 'flipOutX',
                'backface-visibility': 'visible'
            },
            'flipOutY': {
                'animation-name': 'flipOutY',
                'backface-visibility': 'visible'
            },
            'rotateIn': {
                'animation-name': 'rotateIn',
            },
            'rotateInDownLeft': {
                'animation-name': 'rotateInDownLeft',
            },
            'rotateInDownRight': {
                'animation-name': 'rotateInDownRight',
            },
            'rotateInUpLeft': {
                'animation-name': 'rotateInUpLeft',
            },
            'rotateInUpRight': {
                'animation-name': 'rotateInUpRight',
            },
            'rotateOut': {
                'animation-name': 'rotateOut',
            },
            'rotateOutDownLeft': {
                'animation-name': 'rotateOutDownLeft',
            },
            'rotateOutDownRight': {
                'animation-name': 'rotateOutDownRight',
            },
            'rotateOutUpLeft': {
                'animation-name': 'rotateOutUpLeft',
            },
            'rotateOutUpRight': {
                'animation-name': 'rotateOutUpRight',
            },
            'rollIn': {
                'animation-name': 'rollIn',
            },
            'rollOut': {
                'animation-name': 'rollOut',
            },
            'zoomIn': {
                'animation-name': 'zoomIn',
            },
            'zoomInDown': {
                'animation-name': 'zoomInDown',
            },
            'zoomInLeft': {
                'animation-name': 'zoomInLeft',
            },
            'zoomInRight': {
                'animation-name': 'zoomInRight',
            },
            'zoomInUp': {
                'animation-name': 'zoomInUp',
            },
            'bounceIn': {
                'animation-name': 'bounceIn',
                'animation-duration': `${bounceInSpeed}ms`,
            },
            'bounceInDown': {
                'animation-name': 'bounceInDown',
            },
            'bounceInLeft': {
                'animation-name': 'bounceInLeft',
            },
            'bounceInRight': {
                'animation-name': 'bounceInRight',
            },
            'bounceInUp': {
                'animation-name': 'bounceInUp',
            },
            'bounceOut': {
                'animation-name': 'bounceOut',
                'animation-duration': `${bounceOutSpeed}ms`,
            },
            'bounceOutDown': {
                'animation-name': 'bounceOutDown',
            },
            'bounceOutLeft': {
                'animation-name': 'bounceOutLeft',
            },
            'bounceOutRight': {
                'animation-name': 'bounceOutRight',
            },
            'bounceOutUp': {
                'animation-name': 'bounceOutUp',
            },
            'zoomOut': {
                'animation-name': 'zoomOut',
            },
            'zoomOutDown': {
                'animation-name': 'zoomOutDown',
            },
            'zoomOutLeft': {
                'animation-name': 'zoomOutLeft',
            },
            'zoomOutRight': {
                'animation-name': 'zoomOutRight',
            },
            'zoomOutUp': {
                'animation-name': 'zoomOutUp',
            },
            'slideInDown': {
                'animation-name': 'slideInDown'
            },
            'slideInLeft': {
                'animation-name': 'slideInLeft'
            },
            'slideInRight': {
                'animation-name': 'slideInRight'
            },
            'slideInUp': {
                'animation-name': 'slideInUp'
            },
            'slideOutDown': {
                'animation-name': 'slideOutDown'
            },
            'slideOutLeft': {
                'animation-name': 'slideOutLeft'
            },
            'slideOutRight': {
                'animation-name': 'slideOutRight'
            },
            'slideOutUp': {
                'animation-name': 'slideOutUp'
            },
            'fadeIn': {
                'animation-name': 'fadeIn'
            },
            'fadeInDown': {
                'animation-name': 'fadeInDown'
            },
            'fadeInDownBig': {
                'animation-name': 'fadeInDownBig'
            },
            'fadeInLeft': {
                'animation-name': 'fadeInLeft'
            },
            'fadeInLeftBig': {
                'animation-name': 'fadeInLeftBig'
            },
            'fadeInRight': {
                'animation-name': 'fadeInRight'
            },
            'fadeInRightBig': {
                'animation-name': 'fadeInRightBig'
            },
            'fadeInUp': {
                'animation-name': 'fadeInUp'
            },
            'fadeInUpBig': {
                'animation-name': 'fadeInUpBig'
            },
            'fadeInTopLeft': {
                'animation-name': 'fadeInTopLeft'
            },
            'fadeInTopRight': {
                'animation-name': 'fadeInTopRight'
            },
            'fadeInBottomLeft': {
                'animation-name': 'fadeInBottomLeft'
            },
            'fadeInBottomRight': {
                'animation-name': 'fadeInBottomRight'
            },
            'fadeOut': {
                'animation-name': 'fadeOut'
            },
            'fadeOutDown': {
                'animation-name': 'fadeOutDown'
            },
            'fadeOutDownBig': {
                'animation-name': 'fadeOutDownBig'
            },
            'fadeOutLeft': {
                'animation-name': 'fadeOutLeft'
            },
            'fadeOutLeftBig': {
                'animation-name': 'fadeOutLeftBig'
            },
            'fadeOutRight': {
                'animation-name': 'fadeOutRight'
            },
            'fadeOutRightBig': {
                'animation-name': 'fadeOutRightBig'
            },
            'fadeOutUp': {
                'animation-name': 'fadeOutUp'
            },
            'fadeOutUpBig': {
                'animation-name': 'fadeOutUpBig'
            },
            'backInUp': {
                'animation-name': 'backInUp'
            },
            'backInDown': {
                'animation-name': 'backInDown'
            },
            'backInLeft': {
                'animation-name': 'backInLeft'
            },
            'backInRight': {
                'animation-name': 'backInRight'
            },
            'backOutUp': {
                'animation-name': 'backOutUp'
            },
            'backOutDown': {
                'animation-name': 'backOutDown'
            },
            'backOutLeft': {
                'animation-name': 'backOutLeft'
            },
            'backOutRight': {
                'animation-name': 'backOutRight'
            },
        }

        let utilities = {};
        let keyFrames = {};

        if (classes && classes.length > 0) {
            classes.forEach((el) => {
                utilities[`${el}`] = fallbackUtilities[`${el}`];
                keyFrames[`@keyframes ${el}`] = fallbackKeyframes[`@keyframes ${el}`];
            });
        } else {
            utilities = fallbackUtilities;
            keyFrames = fallbackKeyframes;
        }

        addUtilities(keyFrames)

        utilities = {...utilities, ...fallbackAnimateUtility};

        addUtilities(
            [
                Object.entries(utilities).map(([key, value]) => {
                    return {
                        [`.${e(`${animatedClassName}${key}`)}`]: value,
                    }
                })
            ]
        )
    },
    {
        experimental: {
            matchVariant: true
        },
        theme: {
            animatedSettings: {
                animatedSpeed: 1000,
                heartBeatSpeed: 500,
                hingeSpeed: 2000,
                bounceInSpeed: 750,
                bounceOutSpeed: 750,
                animationDelaySpeed: 500,
                animatedClassName: defaultAnimatedClassName,
                classes: ['infinite', 'bounce', 'heartBeat']
            }
        },
    }
)

module.exports = animateCssTailwindCss;
