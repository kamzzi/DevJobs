// src/__mocks__/tabbable.ts
export const tabbableMock = () => {
  const lib = require("tabbable");

  return {
    ...lib,
    tabbable: (node: any, options: any) =>
      lib.tabbable(node, { ...options, displayCheck: "none" }),
    focusable: (node: any, options: any) =>
      lib.focusable(node, { ...options, displayCheck: "none" }),
    isFocusable: (node: any, options: any) =>
      lib.isFocusable(node, { ...options, displayCheck: "none" }),
    isTabbable: (node: any, options: any) =>
      lib.isTabbable(node, { ...options, displayCheck: "none" }),
  };
};
