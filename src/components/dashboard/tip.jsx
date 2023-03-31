import React from 'react'
import Carousel from 'better-react-carousel'
import Card from '../statistics/Card'

const Gallery = () => {
  return (
    <Carousel cols={5} rows={1} gap={10} loop autoplay={5000}>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Card title={'Hello World!'} content={'This is the content'}/>
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;