import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

interface ImageGalleryProps {
  images: string[]
  descriptions: string[]
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  descriptions,
}) => {
  const imageRefs = useRef<(HTMLImageElement | any)[]>([])
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const imageTweens = imageRefs.current.map(imageRef => {
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
      tl.to(
        textRefs.current[index + 1],
        { opacity: 1, yPercent: 0, ease: 'none' },
        0,
      )

      return tl
    })

    return () => {
      imageTweens.forEach(tween => tween.kill())
      textTweens.forEach(tween => tween.kill())
    }
  }, [images, descriptions])

  return (
    <div>
      {images.map((image, index) => (
        <div key={index} style={{ display: 'flex' }}>
          <img
            src={image}
            className={styles.elevator}
            alt=""
            ref={ref => (imageRefs.current[index] = ref)}
          />
          <div
            ref={ref => (textRefs.current[index] = ref)}
            className={styles.imgDescription}>
            {descriptions[index]}
          </div>
        </div>
      ))}
    </div>
  )
}
