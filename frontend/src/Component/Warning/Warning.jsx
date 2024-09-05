import React from 'react'
import './Warning.css' 

const Warning = ({warningMessage,setWarningMessage}) => {
  return (
    <div className='warning-container'>
      {warningMessage}
    </div>
  )
}

export default Warning
