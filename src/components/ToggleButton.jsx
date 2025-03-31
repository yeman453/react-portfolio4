import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ToggleButton() {
    const {toggleTheme}=useContext(ThemeContext)
  return (
    <button onClick={toggleTheme}>
        Change
    </button>
  )
}

export default ToggleButton
