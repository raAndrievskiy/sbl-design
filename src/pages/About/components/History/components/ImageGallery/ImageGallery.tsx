import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import historyImg01 from '../../../../../../assets/images/about/historyImg01.png'
import historyImg02 from '../../../../../../assets/images/about/historyImg02.png'
import historyImg03 from '../../../../../../assets/images/about/historyImg03.png'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

type ImageGalleryProps = {
  image: any
  text: string
}

const imagesData: ImageGalleryProps[] = [
  {
    image: historyImg01,
    text: 'Разрабатывая подобные идеи ты входишь в них с головой и со всем вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные. Разрабатывая подобные идеи.',
  },
  {
    image: historyImg02,
    text: 'Разрабатывая подобные идеи ты входишь в них с головой и со всем вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные. Разрабатывая подобные идеи.',
  },
  {
    image: historyImg03,
    text: 'Разрабатывая подобные идеи ты входишь в них с головой и со всем вниманием к процессу не ожидая ничего взамен. Разрабатывая подобные. Разрабатывая подобные идеи.',
  },
]

export const ImageGallery: React.FC = () => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const imageTweens = imageRefs.current.map(imageRef => {
      console.log('imageRef: ', imageRef)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      })

      tl.to(imageRef, { yPercent: -40, ease: 'none' })

      return tl
    })

    const textTweens = textRefs.current.map((textRef, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      })

      tl.to(textRef, { opacity: 0, yPercent: -20, ease: 'none' }, 0)

      return tl
    })

    return () => {
      imageTweens.forEach(tween => tween.kill())
      textTweens.forEach(tween => tween.kill())
    }
  }, [])

  return (
    <div>
      {imagesData.map((data, index) => (
        <div style={{ display: 'flex' }} key={index}>
          <img
            src={data.image}
            key={index}
            className={styles.elevator}
            alt=""
            ref={ref => (imageRefs.current[index] = ref)}
          />
          <div
            ref={ref => (textRefs.current[index] = ref)}
            className={styles.imgDescription}>
            {data.text}
          </div>
        </div>
      ))}
    </div>
  )
}
