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

## Usage

Add Tailwind CSS to your project as described [here](https://tailwindcss.com/docs/installation).
Install tailwindcss plugin as described above and add it to your tailwind.config.js file. 

```js
plugins: [
    // Other plugins
    require('tailwindcss-animatecss'),
]
```

You want to determine yourself which classes are used? You just have to set these class names at the classes array. For example if you want ```.animate__fadeIn``` just add ```fadeIn``` to the array.
You can find all available class names further down.

Defining the classes is recommended to avoid to bloat your css with unused classes and keyframes.

```js
// tailwind.config.js
module.exports = {
    theme: {
        animatedSettings: {
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
* .animate__animated
* .animate__infinite
* .animate__delay
* .animate__delay-1s
* .animate__delay-2s
* .animate__delay-3s
* .animate__delay-4s
* .animate__delay-5s
* .animate__fast
* .animate__faster
* .animate__slow
* .animate__slower
* .animate__bounce
* .animate__flash
* .animate__pulse
* .animate__rubberBand
* .animate__shakeY
* .animate__shakeX
* .animate__headShake
* .animate__swing
* .animate__tada
* .animate__wobble
* .animate__jello
* .animate__heartBeat
* .animate__hinge
* .animate__jackInTheBox
* .animate__lightSpeedIn
* .animate__lightSpeedOut
* .animate__flip
* .animate__flipInX
* .animate__flipInY
* .animate__flipOutX
* .animate__flipOutY
* .animate__rotateIn
* .animate__rotateInDownLeft
* .animate__rotateInDownRight
* .animate__rotateInUpLeft
* .animate__rotateInUpRight
* .animate__rotateOut
* .animate__rotateOutDownLeft
* .animate__rotateOutDownRight
* .animate__rotateOutUpLeft
* .animate__rotateOutUpRight
* .animate__rollIn
* .animate__rollOut
* .animate__zoomIn
* .animate__zoomInUp
* .animate__zoomInDown
* .animate__zoomInLeft
* .animate__zoomInRight
* .animate__bounceIn
* .animate__bounceInDown
* .animate__bounceInUp
* .animate__bounceInLeft
* .animate__bounceInRight
* .animate__bounceOut
* .animate__bounceOutDown
* .animate__bounceOutUp
* .animate__bounceOutLeft
* .animate__bounceOutRight
* .animate__slideInDown
* .animate__slideInLeft
* .animate__slideInRight
* .animate__slideInUp
* .animate__slideOutDown
* .animate__slideOutLeft
* .animate__slideOutRight
* .animate__slideOutUp
* .animate__fadeIn
* .animate__fadeInDown
* .animate__fadeInDownBig
* .animate__fadeInLeft
* .animate__fadeInLeftBig
* .animate__fadeInRight
* .animate__fadeInRightBig
* .animate__fadeInUp
* .animate__fadeInUpBig
* .animate__fadeInTopLeft
* .animate__fadeInTopRight
* .animate__fadeInBottomLeft
* .animate__fadeInBottomRight
* .animate__fadeOut
* .animate__fadeOutDown
* .animate__fadeOutDownBig
* .animate__fadeOutLeft
* .animate__fadeOutLeftBig
* .animate__fadeOutRight
* .animate__fadeOutRightBig
* .animate__fadeOutUp
* .animate__fadeOutUpBig
* .animate__fadeOutTopLeft
* .animate__fadeOutTopRight
* .animate__fadeOutBottomLeft
* .animate__fadeOutBottomRight
* .animate__zoomOutDown
* .animate__zoomOutLeft
* .animate__zoomOutRight
* .animate__zoomOut
* .animate__zoomOutUp
* .animate__lightSpeedInRight
* .animate__lightSpeedInLeft
* .animate__lightSpeedOutRight
* .animate__lightSpeedOutLeft
* .animate__backInDown
* .animate__backInUp
* .animate__backInLeft
* .animate__backInRight
* .animate__backOutDown
* .animate__backOutUp
* .animate__backOutLeft
* .animate__backOutRight

## Demo

Coming soon…

## Credits

This package is based on awesome [Animate.css](https://github.com/animate-css/animate.css).

## More Tailwind CSS Plugins

[tailwindcss-layered-box-shadow](https://github.com/bentzibentz/tailwindcss-layered-box-shadow)

[tailwindcss-absolute-center](https://github.com/bentzibentz/tailwindcss-absolute-center)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
