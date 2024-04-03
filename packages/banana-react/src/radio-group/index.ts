import { BRadioGroup } from '@banana-ui/banana';
import { EventName, createComponent } from '@lit-labs/react';
import * as React from 'react';
import { BananaChangeEvent } from '../events';

const events = {
  onChange: 'change' as EventName<BananaChangeEvent>,
};

export const RadioGroup = createComponent({
  tagName: 'b-radio-group',
  react: React,
  elementClass: BRadioGroup,
  events,
});
