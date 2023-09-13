/* eslint-disable no-unused-vars */
import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div
      className="absolute left-full ml-3"
    >
      <SketchPicker
        color={snap.color} 
        disableAlpha
        presetColors={[
          '#111',
          '#C0C0C0',
          '#FFF',
          '#C83103',
          '#EF8D48',
          '#C1C175',
          '#7AB96d',
          '#365F32',
          '#6B9DA4',
          '#2C2C5C',
          '#6B4399',
          '#B637A7',
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker