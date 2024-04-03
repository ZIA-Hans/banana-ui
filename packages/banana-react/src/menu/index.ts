import { BMenu } from '@banana-ui/banana';
import { EventName, createComponent } from '@lit-labs/react';
import * as React from 'react';
import { BananaMenuChangeEvent } from '../events';

const events = {
  onSelect: 'select' as EventName<BananaMenuChangeEvent>,
};

export const Menu = createComponent({
  tagName: 'b-menu',
  react: React,
  elementClass: BMenu,
  events,
});
