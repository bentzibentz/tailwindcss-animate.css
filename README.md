# Animate CSS - Tailwind CSS Plugin
Add [Animate CSS](https://github.com/daneden/animate.css) as [Tailwind CSS](https://github.com/tailwindcss/tailwindcss) plugin to your project.

## Installation

Pull it in through npm or yarn:

```bash
npm install tailwindcss-animatecss
```

```bash
yarn add tailwindcss-animatecss
```

## Usage

Add Tailwind CSS to your project as described [here](https://tailwindcss.com/docs/installation).
Install tailwindcss plugin as described above and add it to your tailwind.config.js file. 

```js
plugins: [
  // Other plugins
  require('tailwindcss-animatecss')({
        classes: ['fade', 'bounce', 'lightSpeedOut'],
        settings: {
          animatedSpeed: 1000,
          heartBeatSpeed: 1000,
          hingeSpeed: 2000,
          bounceInSpeed: 750,
          bounceOutSpeed: 750,
          animationDelaySpeed: 1000
        },
        variants: ['responsive', 'hover', 'reduced-motion'],
      }),
]
```

You want to determine yourself which classes are used? You just have to set these class names at the classes array. Caution, class names without dot, for example if you want ```.fade``` just add ```fade``` to the array.
You can find all available class names further down.

Defining the classes is recommended to avoid to bloat your css with unused classes and keyframes.

```js
plugins: [
  // Other plugins
  require('tailwindcss-animatecss')({
        classes: ['fade', 'bounce', ...],
        settings: {},
        variants: [],
      }),
]
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
Generating different class variants is super easy, just add the desired variant to the variants array at the plugin options.
```js
plugins: [
  // Other plugins
  require('tailwindcss-animatecss')({
        classes: [],
        settings: {},
        variants: ['responsive', 'hover', 'reduced-motion'],
      }),
]
```
#### Available variants
* responsive
* hover
* reduced-motion [Read more](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)


### Available Animate CSS classes
* .animated
* .infinite
* .delay
* .delay-1
* .delay-2
* .delay-3
* .delay-4
* .delay-5
* .fast
* .faster
* .slow
* .slower
* .bounce
* .flash
* .pulse
* .rubberBand
* .shake
* .headShakte
* .swing
* .tada
* .wobble
* .jello
* .heartBeat
* .hinge
* .jackInTheBox
* .lightSpeedIn
* .lightSpeedOut
* .flip
* .flipInX
* .flipInY
* .flipOutX
* .flipOutY
* .rotateIn
* .rotateInDownLeft
* .rotateInDownRight
* .rotateInUpLeft
* .rotateInUpRight
* .rotateOut
* .rotateOutDownLeft
* .rotateOutDownRight
* .rotateOutUpLeft
* .rotateOutUpRight
* .rollIn
* .rollOut
* .zoomIn
* .zoomInUp
* .zoomInDown
* .zoomInLeft
* .zoomInRight
* .bounceIn
* .bounceInDown
* .bounceInUp
* .bounceInLeft
* .bounceInRight
* .bounceOut
* .bounceOutDown
* .bounceOutUp
* .bounceOutLeft
* .bounceOutRight
* .slideInDown
* .slideInLeft
* .slideInRight
* .slideInUp
* .slideOutDown
* .slideOutLeft
* .slideOutRight
* .slideOutUp
* .fadeIn
* .fadeInDown
* .fadeInDownBig
* .fadeInLeft
* .fadeInLeftBig
* .fadeInRight
* .fadeInRightBig
* .fadeInUp
* .fadeInUpBig
* .fadeOut
* .fadeOutDown
* .fadeOutDownBig
* .fadeOutLeft
* .fadeOutLeftBig
* .fadeOutRight
* .fadeOutRightBig
* .fadeOutUp
* .fadeOutUpBig
* .zoomOutDown
* .zoomOutLeft
* .zoomOutRight
* .zoomOut
* .zoomOutUp

## Credits

This package is based on [Animate.css](https://github.com/daneden/animate.css).

## More Tailwind CSS Plugins
[tailwindcss-absolute-center](https://github.com/bentzibentz/tailwindcss-absolute-center)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
