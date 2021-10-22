import React, { useState, useEffect } from 'react'

const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: '0 3px orange',
  height: 77,
  marginTop: 13
}
  
const inactiveStyle = {
  backgroundColor: 'grey',
  marginTop: 10,
  boxShadow: '3px 3px 5px black'
}

const DrumPad = (props) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle)

  useEffect(() => {
    document.addEventListener('keydown', (e)=>{
      if (e.keyCode === props.keyCode) {
        playSound();
      }
    })
  
    return () => {
        document.removeEventListener('keydown', (e)=>{
          if (e.keyCode === props.keyCode) {
            playSound();
          }
        })
    }
  }, [])

  function playSound() {
    const sound = document.getElementById(props.keyTrigger)
    sound.currentTime = 0
    sound.play()
    setPadStyle(activeStyle)
    setTimeout(() => setPadStyle(inactiveStyle), 100)
    props.updateDisplay(props.clipId.replace(/-/g, ' '))
  }

  return(
    <div>
      <div
        className='drum-pad'
        id={props.clipId}
        onClick={playSound}
        style={padStyle}
        >
        <audio
          className='clip'
          id={props.keyTrigger}
          src={props.clip}
        />
        {props.keyTrigger}
      </div>
    </div>
  )
}

export default DrumPad