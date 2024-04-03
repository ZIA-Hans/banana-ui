/**
 * title: onChange回调事件
 */
import { BananaStepperChangeEvent, Message, Stepper } from '@banana-ui/react';
import { useRef, useState } from 'react';

export default function StepChange() {
  const [value, setValue] = useState(0);
  const stepper = useRef(null);

  const handleChange = (e: BananaStepperChangeEvent) => {
    if (e.composedPath()[0] === stepper.current) {
      const event = e;

      Message.info({ content: `current stepper value：${event.detail.value}` });
      setValue(Number(event.detail.value));
    }
  };

  return (
    <div>
      <Stepper ref={stepper} value={value} controlled onChange={handleChange} />
    </div>
  );
}
