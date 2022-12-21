<p align="left">
  <a href="https://github.com/bentzibentz/tailwindcss-animate.css/releases" target="_blank"><img alt="GitHub release" src="https://img.shields.io/github/v/release/bentzibentz/tailwindcss-animate.css?include_prereleases&style=flat-square"></a>
  <a href="https://npmjs.com/package/tailwindcss-animatecss" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/tailwindcss-animatecss?style=flat-square"></a>
  <a href="https://npmjs.com/package/tailwindcss-animatecss" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/tailwindcss-animatecss?style=flat-square"></a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/tailwindcss-animatecss?style=flat-square">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/bentzibentz/tailwindcss-animate.css?style=flat-square">
  <img alt="License" src="https://img.shields.io/github/license/bentzibentz/tailwindcss-animate.css">
</p>

# Animate CSS - Tailwind CSS Plugin
Add [Animate CSS](https://github.com/animate-css/animate.css) as [Tailwind CSS](https://github.com/tailwindcss/tailwindcss) plugin to your project.

## Important Information

Tailwindcss >= v3.1.8 is required.

## Installation

Pull it in through npm or yarn:

```bash
npm install tailwindcss-animatecss
```

```bash
yarn add tailwindcss-animatecss
```

Use animatecss < v4:

```bash
npm install tailwindcss-animatecss@0.3.3
```

```bash
yarn add tailwindcss-animatecss@0.3.3
```

### Usage with Tailwind v1 and v2

For Documentation checkout Branch ``feature/v2``

```bash
npm install tailwindcss-animatecss@1.0.8
```

```bash
yarn add tailwindcss-animatecss@1.0.8
```

### Usage with old default class names ``.animate--``

For Documentation checkout Branch ``feature/v3``

```bash
npm install tailwindcss-animatecss@3.0.2
```

```bash
yarn add tailwindcss-animatecss@3.0.2
```

## Usage

Add Tailwind CSS to your project as described [here](https://tailwindcss.com/docs/installation).
Install tailwindcss plugin as described above and add it to your tailwind.config.js file. 

```js
plugins: [
    // Other plugins
    require('tailwindcss-animatecss'),
]
```

You want to determine yourself which classes are used? You just have to set these class names at the classes array. For example if you want ```.ani-fadeIn``` just add ```fadeIn``` to the array.
You can find all available class names further down.

Defining the classes is recommended to avoid to bloat your css with unused classes and keyframes.

```js
// tailwind.config.js
module.exports = {
    theme: {
        animatedSettings: {
            defaultClassName: true,
            animatedSpeed: 1000,
            animatedSpeed: 1000,
            heartBeatSpeed: 500,
            hingeSpeed: 2000,
            bounceInSpeed: 750,
            bounceOutSpeed: 750,
            animationDelaySpeed: 500,
            classes: ['bounce', 'heartBeat']
        }
    },
}
```

If you want to prefix your CSS classes, use the tailwind prefix option:

```js
// tailwind.config.js
module.exports = {
  prefix: 'tw-',
  // ...
}
```
### Adjustable, optional settings
* ```defaultClassName``` used for the default class name generation, like ```.ani-fadeIn```, set it to ``false`` to generate classes without the default class name like like ```.fadeIn```
* ```animatedSpeed``` used for the animationDuration of the .animated class
* ```heartBeat``` used for the animationDuration of the .heartBeat class
* ```hingeSpeed``` used for the animationDuration of the .hingeSpeed class
* ```bounceInSpeed``` used for the animationDuration of the .bounceInSpeed class
* ```bounceOutSpeed``` used for the animationDuration of the .bounceOutSpeed class
* ```animationDelaySpeed``` used for the animationDelaySpeed, just add .delay class to your element

All of these settings are optional, if not set basic animate.css fallback animationDuration speed is used.

The plugin generates all the animate.css utility classes for you.

### Variants
Generating different class variants is super easy, tailwind does all the work for you.

### Available Animate CSS classes
* .ani-animated
* .ani-infinite
* .ani-delay
* .ani-delay-1s
* .ani-delay-2s
* .ani-delay-3s
* .ani-delay-4s
* .ani-delay-5s
* .ani-fast
* .ani-faster
* .ani-slow
* .ani-slower
* .ani-bounce
* .ani-flash
* .ani-pulse
* .ani-rubberBand
* .ani-shakeY
* .ani-shakeX
* .ani-headShake
* .ani-swing
* .ani-tada
* .ani-wobble
* .ani-jello
* .ani-heartBeat
* .ani-hinge
* .ani-jackInTheBox
* .ani-lightSpeedIn
* .ani-lightSpeedOut
* .ani-flip
* .ani-flipInX
* .ani-flipInY
* .ani-flipOutX
* .ani-flipOutY
* .ani-rotateIn
* .ani-rotateInDownLeft
* .ani-rotateInDownRight
* .ani-rotateInUpLeft
* .ani-rotateInUpRight
* .ani-rotateOut
* .ani-rotateOutDownLeft
* .ani-rotateOutDownRight
* .ani-rotateOutUpLeft
* .ani-rotateOutUpRight
* .ani-rollIn
* .ani-rollOut
* .ani-zoomIn
* .ani-zoomInUp
* .ani-zoomInDown
* .ani-zoomInLeft
* .ani-zoomInRight
* .ani-bounceIn
* .ani-bounceInDown
* .ani-bounceInUp
* .ani-bounceInLeft
* .ani-bounceInRight
* .ani-bounceOut
* .ani-bounceOutDown
* .ani-bounceOutUp
* .ani-bounceOutLeft
* .ani-bounceOutRight
* .ani-slideInDown
* .ani-slideInLeft
* .ani-slideInRight
* .ani-slideInUp
* .ani-slideOutDown
* .ani-slideOutLeft
* .ani-slideOutRight
* .ani-slideOutUp
* .ani-fadeIn
* .ani-fadeInDown
* .ani-fadeInDownBig
* .ani-fadeInLeft
* .ani-fadeInLeftBig
* .ani-fadeInRight
* .ani-fadeInRightBig
* .ani-fadeInUp
* .ani-fadeInUpBig
* .ani-fadeInTopLeft
* .ani-fadeInTopRight
* .ani-fadeInBottomLeft
* .ani-fadeInBottomRight
* .ani-fadeOut
* .ani-fadeOutDown
* .ani-fadeOutDownBig
* .ani-fadeOutLeft
* .ani-fadeOutLeftBig
* .ani-fadeOutRight
* .ani-fadeOutRightBig
* .ani-fadeOutUp
* .ani-fadeOutUpBig
* .ani-fadeOutTopLeft
* .ani-fadeOutTopRight
* .ani-fadeOutBottomLeft
* .ani-fadeOutBottomRight
* .ani-zoomOutDown
* .ani-zoomOutLeft
* .ani-zoomOutRight
* .ani-zoomOut
* .ani-zoomOutUp
* .ani-lightSpeedInRight
* .ani-lightSpeedInLeft
* .ani-lightSpeedOutRight
* .ani-lightSpeedOutLeft
* .ani-backInDown
* .ani-backInUp
* .ani-backInLeft
* .ani-backInRight
* .ani-backOutDown
* .ani-backOutUp
* .ani-backOutLeft
* .ani-backOutRight

## Demo

Coming soon…

## Credits

This package is based on awesome [Animate.css](https://github.com/animate-css/animate.css).

## More Tailwind CSS Plugins

[tailwindcss-layered-box-shadow](https://github.com/bentzibentz/tailwindcss-layered-box-shadow)

[tailwindcss-absolute-center](https://github.com/bentzibentz/tailwindcss-absolute-center)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
