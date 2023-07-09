# Canvas project
Project target aims to create a playground canvas in order to create boxes
than can be attached to different boxes

## TODO
- implement styled componentes - [ok]
- basic styled components - [ok]
- create camera context - [ok]
- create a box to be rendered - [ok?]
- rendering elements should be re-rendering when panning - [ok]
- re style the PillBox component to make it more clean - [ok]
- viewport context should store the extreme top, right, bottom, left - [ok]
- addComponent via method, in order to be able to create PillBoxes via consola
  (preparing the react parent communication) - [ok]

- setCameraPosition action to be able to center the camera - [test]

- should wrap StyledComponents in order to make them more reusable
  ex: StyledPosition -> Positioned: args => (top left right bottom): nums || enum
- panning should only work when a moving state is setted (context for current state)

- zoom in / zoom out
- selection module => context, component, utils...
- single and multiple (selecting box) selection

*EXTRA: panning with right click panning

CURRENT STATE: 30%
