import { BCheckbox } from '@banana-ui/banana';
import { EventName, createComponent } from '@lit-labs/react';
import * as React from 'react';
import { BananaCheckboxChangeEvent } from '../events';

const events = {
  onChange: 'change' as EventName<BananaCheckboxChangeEvent>,
};

export const Checkbox = createComponent({
  tagName: 'b-checkbox',
  react: React,
  elementClass: BCheckbox,
  events,
});
