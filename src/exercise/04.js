// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  const getTogglerProps = ({onClick, ...props} = {}) => {
    return {
      ...props,
      onClick: () => {
        onClick && onClick()
        toggle()
      },
      'aria-pressed': on,
      on,
    }
  }

  return {on, getTogglerProps}
}

function App() {
  const {on, getTogglerProps} = useToggle()
  console.log({getTogglerProps, on})
  return (
    <div>
      <Switch {...getTogglerProps({on})} />
      <hr />
      <button
        {...getTogglerProps({
          'aria-label': 'custom-button',
          onClick: () => console.info('onButtonClick'),
          id: 'custom-button-id',
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
