import React from 'react'
import Welcome from './component/Welcome'
import Count from './component/Count'
import Mode from './component/Mode'
import Notification from './component/Notification'
import Toggle from './component/Toggle'
import Users from './component/Users'
import PasswordChecker from './component/PasswordChecker'
function App() {
  return (
    <div>
      < Welcome />
      <Count />
      <Mode />
      <Notification/>
      <Toggle/>
      <Users/>
      <PasswordChecker/>
    </div>
  )
}

export default App
