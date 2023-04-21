import { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll, } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { state, damp } from './util'
import styles from './styles.module.scss'
import { useDrag } from 'react-use-gesture'

gsap.registerPlugin(ScrollTrigger)

function Item({ index, position, scale, className, c = new THREE.Color(), ...props }) {
  const ref = useRef()
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  
  const click = () => (state.clicked = index === clicked ? null : index)
  const over = () => hover(true)
  const out = () => hover(false)
  useFrame((state, delta) => {
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
    ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? 5 : 4 + y, 8, delta)
    ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? 4.7 : scale[0], 6, delta)
    if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta)
    if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta)
    if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
    ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1 - y), 6, delta)
    ref.current.material.color.lerp(c.set(hovered || clicked === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1)
  })
  return <Image className={className} ref={ref} {...props} position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out} />
}

function Items({ w = 0.7, gap = 0.15 }) {
  const { urls } = useSnapshot(state)
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap

  return (
     <ScrollControls horizontal className={styles.slider} pages={(width - xW + urls.length * xW) / width}>
      <Scroll>
        {urls.map((url, i) => (
          <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={`${url}`} />
          )
        )}
      </Scroll>
    </ScrollControls>
  )
}

export const Slider = () => {
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current

    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.sliderTrigger',
      start: 'top top',
      end: 'bottom bottom',
      // end: 'bottom-=10vh center',
      scrub: 0.5,
      pin: true,
      markers: true,
    },
  })

  // tl.fromTo('.sliderTrigger', { marginBottom: 0 }, { marginBottom: 0 })
  // tl.to(slider, {y: 500 })
  
  return () => {
    tl.kill()
  }

  }, [])
  return (
    <div className={`${styles.sliderWrap} sliderTrigger`} >
      <div className={styles.slider} ref={sliderRef}>
        <Suspense fallback={null}>
          <Canvas gl={{ alpha: false, antialias: true, stencil: false, depth: false }} linear={true} flat={false} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
            <Items />
          </Canvas>
        </Suspense>
      </div>
    </div>
  )
}
