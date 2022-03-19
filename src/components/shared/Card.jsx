import React from 'react'

function Card({children, reverse}) {
  // this is a conditional CLASS
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )

  // conditional style
  // return (
  //   <div className="card" style={{
  //     backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', 
  //     color: reverse ? '#fff' : '#000'
  //   }}>{children}</div>

  // )
}

export default Card