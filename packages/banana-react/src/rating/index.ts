import { BRating } from '@banana-ui/banana';
import { EventName, createComponent } from '@lit-labs/react';
import * as React from 'react';
import { BananaChangeEvent } from '../events';

const events = {
  onChange: 'change' as EventName<BananaChangeEvent>,
};

export const Rating = createComponent({
  tagName: 'b-rating',
  react: React,
  elementClass: BRating,
  events,
});
