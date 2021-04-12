export const MAX_MOBILE_WIDTH = 599;
export const MIN_TABLET_WIDTH = 600;
export const MAX_TABLET_WIDTH = 959;
export const MIN_NOTEBOOK_WIDTH = 960;
export const MAX_NOTEBOOK_WIDTH = 1535;
export const MIN_DESKTOP_WIDTH = 1536;

export const device = {
  mobile: `(max-width: ${MAX_MOBILE_WIDTH}px)`,
  tablet: `(min-width: ${MIN_TABLET_WIDTH}px) and (max-width: ${MAX_TABLET_WIDTH}px)`,
  notebook: `(min-width: ${MIN_NOTEBOOK_WIDTH}px) and (max-width: ${MAX_NOTEBOOK_WIDTH}px)`,
  desktop: `(min-width: ${MIN_DESKTOP_WIDTH}px)`
};

export const MOBILE = `(max-width: ${MAX_MOBILE_WIDTH}px)`;
export const TABLET = `(min-width: ${MIN_TABLET_WIDTH}px) and (max-width: ${MAX_TABLET_WIDTH}px)`;
export const NOTEBOOK = `(min-width: ${MIN_NOTEBOOK_WIDTH}px) and (max-width: ${MAX_NOTEBOOK_WIDTH}px)`;
export const DESKTOP = `(min-width: ${MIN_DESKTOP_WIDTH}px)`;
