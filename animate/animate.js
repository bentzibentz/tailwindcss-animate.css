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

module.exports = function ({ classes = [], settings = {}, variants = ['responsive'] }) {
    return function ({ e, addUtilities, prefix, addVariant, postcss }) {

        // set settings obj to not break
        if (!settings) {
            settings = {};
        }

        // set fallback if speed not defined
        const animatedSpeed = settings.animatedSpeed ? settings.animatedSpeed : 1000;
        const heartBeatSpeed = settings.heartBeatSpeed ? settings.heartBeatSpeed : 1000;
        const hingeSpeed = settings.hingeSpeed ? settings.hingeSpeed : 2000;
        const bounceInSpeed = settings.bounceInSpeed ? settings.bounceInSpeed : 750;
        const bounceOutSpeed = settings.bounceOutSpeed ? settings.bounceOutSpeed : 750;
        const animationDelaySpeed = settings.animationDelaySpeed ? settings.animationDelaySpeed : 500;
        const opacity = settings.opacity ? settings.opacity : 1;

        const fallbackKeyframes = {
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
        }

        const fallbackUtilities = {
            '.animate__animated': {
                animationDuration: `${animatedSpeed}ms`,
                animationFillMode: 'both'
            },
            '.animate__infinite': {
                animationIterationCount: 'infinite'
            },
            '.animate__repeat-1': {
                animationRepeat: 1
            },
            '.animate__repeat-2': {
                animationRepeat: 2
            },
            '.animate__repeat-3': {
                animationRepeat: 3
            },
            '.animate__delay': {
                animationDelay: `${animationDelaySpeed}ms`
            },
            '.animate__delay-1s': {
                animationDelay: `1000ms`
            },
            '.animate__delay-2s': {
                animationDelay: `2000ms`
            },
            '.animate__delay-3s': {
                animationDelay: `3000ms`
            },
            '.animate__delay-4s': {
                animationDelay: `4000ms`
            },
            '.animate__delay-5s': {
                animationDelay: `5000ms`
            },
            '.animate__fast': {
                animationDuration: `800ms`
            },
            '.animate__faster': {
                animationDuration: `500ms`
            },
            '.animate__slow': {
                animationDuration: `2000ms`
            },
            '.animate__slower': {
                animationDuration: `3000ms`
            },
            '.animate__bounce': {
                animationName: 'bounce',
                transformOrigin: 'center bottom'
            },
            '.animate__flash': {
                animationName: 'flash',
            },
            '.animate__pulse': {
                animationName: 'pulse',
            },
            '.animate__rubberBand': {
                animationName: 'rubberBand',
            },
            '.animate__shake': {
                animationName: 'shake',
            },
            '.animate__headShake': {
                animationTimingFunction: 'ease-in-out',
                animationName: 'headShake',
            },
            '.animate__swing': {
                transformOrigin: 'top center',
                animationName: 'swing',
            },
            '.animate__tada': {
                animationName: 'tada',
            },
            '.animate__wobble': {
                animationName: 'wobble',
            },
            '.animate__jello': {
                animationName: 'jello',
            },
            '.animate__heartBeat': {
                animationName: 'heartBeat',
                animationDuration: `${heartBeatSpeed}ms`,
                animationTimingFunction: 'ease-in-out'
            },
            '.animate__hinge': {
                animationName: 'hinge',
                animationDuration: `${hingeSpeed}ms`,
            },
            '.animate__jackInTheBox': {
                animationName: 'jackInTheBox',
            },
            '.animate__lightSpeedIn': {
                animationName: 'lightSpeedIn',
            },
            '.animate__lightSpeedOut': {
                animationName: 'lightSpeedOut',
            },
            '.animate__flip': {
                animationName: 'flip',
                backfaceVisibility: 'visible'
            },
            '.animate__flipInX': {
                animationName: 'flipInX',
                backfaceVisibility: 'visible'
            },
            '.animate__flipInY': {
                animationName: 'flipInY',
                backfaceVisibility: 'visible'
            },
            '.animate__flipOutX': {
                animationName: 'flipOutX',
                backfaceVisibility: 'visible'
            },
            '.animate__rotateIn': {
                animationName: 'rotateIn',
            },
            '.animate__rotateInDownLeft': {
                animationName: 'rotateInDownLeft',
            },
            '.animate__rotateInDownRight': {
                animationName: 'rotateInDownRight',
            },
            '.animate__rotateInUpLeft': {
                animationName: 'rotateInUpLeft',
            },
            '.animate__rotateInUpRight': {
                animationName: 'rotateInUpRight',
            },
            '.animate__rotateOut': {
                animationName: 'rotateOut',
            },
            '.animate__rotateOutDownLeft': {
                animationName: 'rotateOutDownLeft',
            },
            '.animate__rotateOutDownRight': {
                animationName: 'rotateOutDownRight',
            },
            '.animate__rotateOutUpLeft': {
                animationName: 'rotateOutUpLeft',
            },
            '.animate__rotateOutUpRight': {
                animationName: 'rotateOutUpRight',
            },
            '.animate__rollIn': {
                animationName: 'rollIn',
            },
            '.animate__rollOut': {
                animationName: 'rollOut',
            },
            '.animate__zoomIn': {
                animationName: 'zoomIn',
            },
            '.animate__zoomInDown': {
                animationName: 'zoomInDown',
            },
            '.animate__zoomInLeft': {
                animationName: 'zoomInLeft',
            },
            '.animate__zoomInRight': {
                animationName: 'zoomInRight',
            },
            '.animate__zoomInUp': {
                animationName: 'zoomInUp',
            },
            '.animate__bounceIn': {
                animationName: 'bounceIn',
                animationDuration: `${bounceInSpeed}ms`,
            },
            '.animate__bounceInDown': {
                animationName: 'bounceInDown',
            },
            '.animate__bounceInLeft': {
                animationName: 'bounceInLeft',
            },
            '.animate__bounceInRight': {
                animationName: 'bounceInRight',
            },
            '.animate__bounceInUp': {
                animationName: 'bounceInUp',
            },
            '.animate__bounceOut': {
                animationName: 'bounceOut',
                animationDuration: `${bounceOutSpeed}ms`,
            },
            '.animate__bounceOutDown': {
                animationName: 'bounceOutDown',
            },
            '.animate__bounceOutLeft': {
                animationName: 'bounceOutLeft',
            },
            '.animate__bounceOutRight': {
                animationName: 'bounceOutRight',
            },
            '.animate__bounceOutUp': {
                animationName: 'bounceOutUp',
            },
            '.animate__zoomOut': {
                animationName: 'zoomIn',
            },
            '.animate__zoomOutDown': {
                animationName: 'zoomOutDown',
            },
            '.animate__zoomOutLeft': {
                animationName: 'zoomOutLeft',
            },
            '.animate__zoomOutRight': {
                animationName: 'zoomOutRight',
            },
            '.animate__zoomOutUp': {
                animationName: 'zoomOutUp',
            },
            '.animate__slideInDown': {
                animationName: 'slideInDown'
            },
            '.animate__slideInLeft': {
                animationName: 'slideInLeft'
            },
            '.animate__slideInRight': {
                animationName: 'slideInRight'
            },
            '.animate__slideInUp': {
                animationName: 'slideInUp'
            },
            '.animate__slideOutDown': {
                animationName: 'slideOutDown'
            },
            '.animate__slideOutLeft': {
                animationName: 'slideOutLeft'
            },
            '.animate__slideOutRight': {
                animationName: 'slideOutRight'
            },
            '.animate__slideOutUp': {
                animationName: 'slideOutUp'
            },
            '.animate__fadeIn': {
                animationName: 'fadeIn'
            },
            '.animate__fadeInDown': {
                animationName: 'fadeInDown'
            },
            '.animate__fadeInDownBig': {
                animationName: 'fadeInDownBig'
            },
            '.animate__fadeInLeft': {
                animationName: 'fadeInLeft'
            },
            '.animate__fadeInLeftBig': {
                animationName: 'fadeInLeftBig'
            },
            '.animate__fadeInRight': {
                animationName: 'fadeInRight'
            },
            '.animate__fadeInRightBig': {
                animationName: 'fadeInRightBig'
            },
            '.animate__fadeInUp': {
                animationName: 'fadeInUp'
            },
            '.animate__fadeInUpBig': {
                animationName: 'fadeInUpBig'
            },
            '.animate__fadeOut': {
                animationName: 'fadeOut'
            },
            '.animate__fadeOutDown': {
                animationName: 'fadeOutDown'
            },
            '.animate__fadeOutDownBig': {
                animationName: 'fadeOutDownBig'
            },
            '.animate__fadeOutLeft': {
                animationName: 'fadeOutLeft'
            },
            '.animate__fadeOutLeftBig': {
                animationName: 'fadeOutLeftBig'
            },
            '.animate__fadeOutRight': {
                animationName: 'fadeOutRight'
            },
            '.animate__fadeOutRightBig': {
                animationName: 'fadeOutRightBig'
            },
            '.animate__fadeOutUp': {
                animationName: 'fadeOutUp'
            },
            '.animate__fadeOutUpBig': {
                animationName: 'fadeOutUpBig'
            },
        }

        let utilities = {};
        let keyFrames = {};

        if (classes && classes.length > 0) {
            classes.forEach((el) => {
                utilities[`.${el}`] = fallbackUtilities[`.${el}`];
                keyFrames[`@keyframes ${el}`] = fallbackKeyframes[`@keyframes ${el}`];
            });
        } else {
            utilities = fallbackUtilities;
            keyFrames = fallbackKeyframes;
        }

        addUtilities(utilities, { variants, respectImportant: false });

        addUtilities(keyFrames, { respectImportant: false });

        addVariant('reduced-motion', ({ container, separator }) => {
            const supportsRule = postcss.atRule({ name: 'media', params: '(prefers-reduced-motion: reduce)' })
            supportsRule.append(container.nodes)
            container.append(supportsRule)
            supportsRule.walkRules(rule => {
                rule.selector = `.${e(`reduced-motion${separator}${rule.selector.slice(1)}`)}`
            })
        })
    };
};
