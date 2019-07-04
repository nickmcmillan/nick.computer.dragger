import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'

import './Title.scss'

const items = ['Nick', 'McMillan']
const config = { mass: 5, tension: 4000, friction: 200 }

const Title = () => {

  const [toggle, set] = useState(true)

  const trail = useTrail(items.length, {
    config,
    x: toggle ? 0 : 40,
    height: toggle ? 40 : 0,
    from: { x: 40, height: 0 },
  })

  return (
      <h1 className="title">
        <div className="name" onClick={() => set(state => !state)}>

          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="name-split"
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}

        </div>

        <p className="intro">
          I’m a freelance website developer who likes Javascript, UI's, and making music.
        </p>
        
      </h1>
  )
}

export default Title
