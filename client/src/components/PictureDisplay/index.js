import React from 'react'
import { PictureContainer, Image } from './style/PictureDisplay'

const PictureDisplay = ({ image }) => {
  return (
    <PictureContainer>
      {image ? (
        <Image src={image} alt="balkon"/>
      ) : (
        // <div style={{width: '100%', height: '100%', backgroundColor: '#fff'}}></div>
        <></>
      )}
    </PictureContainer>
  )
}

export default PictureDisplay
