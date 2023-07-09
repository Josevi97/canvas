export type CameraState = {
  position: Position
}

export type CameraActions = {
  type: "set_position"
  payload: { position: Position }
}

export type Context = {
  state: CameraState,
  actions: {
    pane(position: Position): void,
    moveTo(position: Position): void,
  },
};
