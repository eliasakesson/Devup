import React, { useEffect, useState } from 'react'

export default function SlidingText(props) {

  const [scrollY, setScrollY] = useState(-props.offset)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY - props.offset)
      console.log(window.scrollY - props.offset)
    })
  }, [])

  return (
    <div style={{width: "100%", overflow: "hidden", marginTop: "10vh"}}>
      <div style={{transform: `translateX(${scrollY * props.speed}vw)`, padding: "5vh 0"}}>
        <h3 style={{fontSize: "10vh", fontWeight: "500"}}>{props.text}</h3>
      </div>
    </div>
  )
}
