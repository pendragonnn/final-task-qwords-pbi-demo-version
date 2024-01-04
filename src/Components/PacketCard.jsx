import React from 'react'
import { Card } from 'flowbite-react';

export default function PacketCard({ packetData }) {
  return (
      <Card
      data-aos="zoom-in"
        className="relative w-full h-full bg-orange-500 group/item"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={packetData.img}
      >
        <h5 className="absolute top-5 left-5 right-14 md:text-3xl text-2xl text-white font-bold tracking-tight">
          {packetData.title}
        </h5>
        <p className="font-normal text-white">
          {packetData.description}
        </p>
      </Card>

  )
}
