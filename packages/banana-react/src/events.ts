export type BananaChangeEvent<K extends string = 'value', T = string> = CustomEvent<{
  [key in K]: T;
}>;

export type BananaCarouselChangeEvent = BananaChangeEvent<'currentIndex', number>;

export type BananaCheckboxChangeEvent = BananaChangeEvent<'checked', boolean>;

export type BananaStepperChangeEvent = BananaChangeEvent<'value', number>;

export type BananaCountdownChangeEvent = BananaChangeEvent<'timeLeft', number>;

export type BananaMenuChangeEvent = BananaChangeEvent<
  'item',
  {
    value: string;
  }
>;

export type BananaSelectChangeEvent = BananaChangeEvent<'value', string | string[]>;
