import { BStepper } from '@banana-ui/banana';
import { EventName, createComponent } from '@lit-labs/react';
import * as React from 'react';
import { BananaStepperChangeEvent } from '../events';

const events = {
  onChange: 'change' as EventName<BananaStepperChangeEvent>,
};

export const Stepper = createComponent({
  tagName: 'b-stepper',
  react: React,
  elementClass: BStepper,
  events,
});
