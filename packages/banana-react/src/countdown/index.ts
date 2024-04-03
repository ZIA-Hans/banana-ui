import { BCountdown } from '@banana-ui/banana';
import { EventName, createComponent } from '@lit-labs/react';
import * as React from 'react';
import { BananaCountdownChangeEvent } from '../events';

const events = {
  onChange: 'change' as EventName<BananaCountdownChangeEvent>,
  onFinish: 'finish',
};

export const Countdown = createComponent({
  tagName: 'b-countdown',
  react: React,
  elementClass: BCountdown,
  events,
});
