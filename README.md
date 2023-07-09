# Canvas project
Project target aims to create a playground canvas in order to create boxes
than can be attached to different boxes

## DONE
- implement styled componentes
- basic styled components
- create camera context
- create a box to be rendered
- rendering elements should be re-rendering when panning
- re style the PillBox component to make it more clean
- viewport context should store the extreme top, right, bottom, left
- addComponent via method, in order to be able to create PillBoxes via consola
  (preparing the react parent communication)

## TEST
- setCameraPosition action to be able to center the camera - [test]

## TODO
- should wrap StyledComponents in order to make them more reusable
  ex: StyledPosition -> Positioned: args => (top left right bottom): nums || enum
- panning should only work when a moving state is setted (context for current state)
- zoom in / zoom out
- selection module => context, component, utils...
- single and multiple (selecting box) selection
- panning with right click panning

# Current application state
The application progress is about the 30%
