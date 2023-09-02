import React from 'react'
import './style.css'

export default function LoginScreen() {
  return (
    <div className='loading_screen'>
      <div className="loading_animation">
        <div id="loading_screen_part1"></div>
        <div id="loading_screen_part2"></div>
        <div id="loading_screen_part3"></div>
      </div>
      <div id="loading_screen_circle"></div>
    </div>

  )
}
