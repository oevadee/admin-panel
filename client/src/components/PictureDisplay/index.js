import React from 'react'
import { PictureContainer, Image } from './style/PictureDisplay'

const PictureDisplay = ({ image = '/img/IMG_2979.jpeg' }) => {
  return (
    <PictureContainer>
      <Image src={image} alt="balkon"/>
    </PictureContainer>
  )
}

export default PictureDisplay
