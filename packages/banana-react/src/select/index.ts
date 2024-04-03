import { BSelect } from '@banana-ui/banana';
import { EventName, createComponent } from '@lit-labs/react';
import * as React from 'react';
import { BananaSelectChangeEvent } from '../events';

const events = {
  onChange: 'change' as EventName<BananaSelectChangeEvent>,
};

export const Select = createComponent({
  tagName: 'b-select',
  react: React,
  elementClass: BSelect,
  events,
});
