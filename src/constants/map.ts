export const MAP_CONSTANTS = {
  DEFAULT_POSITION: [6.4238, -66.5897] as [number, number],
  DEFAULT_ZOOM: 6,
  PROPERTY_ZOOM: 14,
  ANIMATION_DURATION: 1.5,
  POSITION_TOLERANCE: 0.0001,
  ZOOM_TOLERANCE: 0.1,
  FLY_TO_DELAY: 100,
  ANIMATION_COMPLETE_DELAY: 2000
} as const;

export const PROPERTY_STATUS = {
  ALL: 'all',
  FOR_SALE: 'For Sale',
  FOR_RENT: 'For Rent'
} as const;

export const BEDROOM_OPTIONS = {
  ALL: 'all',
  TWO: '2',
  THREE: '3',
  FOUR: '4'
} as const; 