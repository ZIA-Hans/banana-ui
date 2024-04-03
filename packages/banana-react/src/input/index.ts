import { BInput } from '@banana-ui/banana';
import { EventName, createComponent } from '@lit-labs/react';
import * as React from 'react';
import { BananaChangeEvent } from '../events';

const events = {
  onChange: 'change' as EventName<BananaChangeEvent>,
};

export const Input = createComponent({
  tagName: 'b-input',
  react: React,
  elementClass: BInput,
  events,
});
