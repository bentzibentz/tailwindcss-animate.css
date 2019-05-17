# Animate CSS - Tailwind CSS Plugin
Add [Animate CSS](https://github.com/daneden/animate.css) as [Tailwind CSS](https://github.com/tailwindcss/tailwindcss) plugin to your project.

Note: This plugin is not tailwind 1.0 ready, but will be soon ;)


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

Add plugin to your tailwind config file.

```js
plugins: [
  // Other plugins
  require('tailwindcss-animatecss')(['responsive']),
]
```

The plugin generates all the animate.css utility classes for you.

### Available Animate CSS classes
* .animated
* .infinite
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
*	.slideInLeft
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
* …

More classes coming soon…

## Credits

This package is based of [Animate.css](https://github.com/daneden/animate.css).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
