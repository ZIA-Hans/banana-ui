import { BCarousel } from '@banana-ui/banana';
import { EventName, createComponent } from '@lit-labs/react';
import * as React from 'react';
import { BananaCarouselChangeEvent } from '../events';

const events = {
  onChange: 'change' as EventName<BananaCarouselChangeEvent>,
};

export const Carousel = createComponent({
  tagName: 'b-carousel',
  react: React,
  elementClass: BCarousel,
  events,
});
