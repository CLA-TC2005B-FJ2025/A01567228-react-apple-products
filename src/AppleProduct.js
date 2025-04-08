import React from 'react'

import iphone from "./svg/iphone.svg"
import airpods from "./svg/airpods.svg"
import imac from "./svg/imac.svg"
import macbook from "./svg/macbook.svg"
import ipad from "./svg/ipad.svg"
import watch from "./svg/watch.svg"

const mapsSVG = {iphone,ipad, watch, imac, macbook, airpods}

export function AppleProduct( props ) {
  return (
    <div>
      Producto {props.type}
      <img alt="producto" src={mapsSVG[props.type]} width={200} /> 
    </div>
  )
}