import React from 'react'
import './itemlistcontainer.css'


function ItemListContainer(props) {

  const h1style = {
    color: props.color,
    fontSize: props.fontSize
  }

  return (
    <>
      <h1 style={h1style}>{props.greeting}</h1>
    </>
  )
}

export default ItemListContainer