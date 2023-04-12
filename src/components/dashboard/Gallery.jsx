import React from 'react'
import Carousel from 'better-react-carousel'
import Card from '../statistics/Card'

const Gallery = ({providers}) => {
  return (
    <Carousel cols={5} rows={1} gap={10} loop autoplay={5000}>
      {
        providers.map(provider => (
          <Carousel.Item>
            <Card key={provider.accountID + provider.nickname} title={provider.nickname} data={provider.data} id={provider.accountID} />
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}

export default Gallery;