export type ViewportLimits = {
  top: number,
  right: number,
  bottom: number,
  left: number,
}

export type ViewportElementData = {
  name: string,
  position: Position,
}

export type ViewportElement = {
  data: ViewportElementData,
  element: JSX.Element,
}

export type StringViewportElement = {
  [key: string]: ViewportElement,
}

export type ViewportState = {
  elements: StringViewportElement,
  limits: ViewportLimits,
}

export type ViewportAction = {
  type: "add_element",
  payload: { key: string, element: ViewportElement },
} | {
  type: "update_element",
  payload: { key: string, data: ViewportElementData },
} | {
  type: "destroy_element",
  payload: { key: string },
} | {
  type: "set_limits",
  payload: { limits: ViewportLimits },
}

export type Context = {
  state: ViewportState,
  actions: {
    addPill(text: string, position: Position): void,
    updateElement(key: string, data: ViewportElementData): void;
    destroyElement(key: string): void,
    updateLimits(key: string, size: Size): void,
  }
}
