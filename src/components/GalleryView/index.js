import React from 'react'
import { GalleryContainer, GalleryImage } from './style/GalleryView'

const gallery = [
  '/img/IMG_2979.jpeg',
  '/img/IMG_6531.JPG',
  '/img/IMG_6546.JPG',
  '/img/IMG_6723.JPG',
  '/img/IMG_6726.JPG',
  '/img/IMG_6727.JPG',
  '/img/IMG_6730.JPG',
  '/img/IMG_6731.JPG',
  '/img/IMG_6737.JPG',
]

const GalleryView = () => {
  return (
    <GalleryContainer>
      {gallery.map(image => (
        <GalleryImage src={image} alt="" />
      ))}
    </GalleryContainer>
  )
}

export default GalleryView
