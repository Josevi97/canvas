export type CameraState = {
  position: Position,
  zoom: number,
}

export type CameraActions = {
  type: "set_position",
  payload: { position: Position }
} | {
  type: "set_zoom",
  payload: { value: number }
}

export type Context = {
  state: CameraState,
  actions: {
    pane(position: Position): void,
    moveTo(position: Position): void,
    zoom(value: number): void,
  },
};
