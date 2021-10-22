import React from 'react'
import DrumPad from './DrumPad';

const PadBank = (props) => {
  let padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
    return (
      <DrumPad
        clip={padBankArr[i].url}
        clipId={padBankArr[i].id}
        keyCode={padBankArr[i].keyCode}
        keyTrigger={padBankArr[i].keyTrigger}
        power={props.power}
        updateDisplay={props.updateDisplay}
      />
    )
  })
  return <div className='pad-bank'>{padBank}</div>;
}

export default PadBank