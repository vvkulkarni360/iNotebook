import React from 'react'
import Notes from './Notes'


export const Home = (props) => {
  const {showAlert}=props
  return (
    <div className='container'>
      <Notes showAlert={showAlert}/>
    </div>
  )
}
module.export = Home