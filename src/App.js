import React, { useState } from 'react'
import PadBank from './components/PadBank'

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
]

const App = () => {

  const [values, setValues] = useState({
    display: String.fromCharCode(160),
    currentPadBank: bankOne,
    currentPadBankId: 'Heater Kit',
    sliderVal: 0.3 
  })

  function selectBank() {
    if (values.currentPadBankId === 'Heater Kit') {
      setValues({
        ...values,
        currentPadBank: bankTwo,
        display: 'Smooth Piano Kit',
        currentPadBankId: 'Smooth Piano Kit'
      })
    } else {
      setValues({
        ...values,
        currentPadBank: bankOne,
        display: 'Heater Kit',
        currentPadBankId: 'Heater Kit'
      })
    }
  }

  function displayClipName(name) {
    setValues({
      ...values,
      display: name
    })
  }

  function adjustVolume(e) {
    setValues({
      ...values,
      sliderVal: e.target.value,
      display: 'Volume: ' + Math.round(e.target.value * 100)
    })
    setTimeout(() => clearDisplay(), 1000)
  }

  function clearDisplay() {
    setValues({
      ...values,
      display: String.fromCharCode(160)
    })
  }

  const bankSlider =
    values.currentPadBank === bankOne
      ? {
          float: 'left'
        }
      : {
          float: 'right'
        }
        
  {
    const clips = [].slice.call(document.getElementsByClassName('clip'));
    clips.forEach(sound => {
      sound.volume = values.sliderVal
    })
  }

  return (
    <div className='inner-container' id='drum-machine'>
      <PadBank
        clipVolume={values.sliderVal}
        currentPadBank={values.currentPadBank}
        updateDisplay={displayClipName}
      />
      <div className='logo'>
        <i className='inner-logo fa fa-free-code-camp' />
      </div>
      <div className='controls-container'>
        <p id='display'>{values.display}</p>
        <div className='volume-slider'>
          <input
            max='1'
            min='0'
            onChange={adjustVolume}
            step='0.01'
            type='range'
            value={values.sliderVal}
          />
        </div>
        <div className='control'>
          <p>Bank</p>
          <div className='select' onClick={selectBank}>
            <div className='inner' style={bankSlider} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App