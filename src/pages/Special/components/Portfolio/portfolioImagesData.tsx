import image1 from '../../../../assets/images/special/portfolio/special-portfolio-01.png'
import image2 from '../../../../assets/images/special/portfolio/special-portfolio-02.png'
import image3 from '../../../../assets/images/special/portfolio/special-portfolio-03.png'
import image4 from '../../../../assets/images/special/portfolio/special-portfolio-04.png'
import image5 from '../../../../assets/images/special/portfolio/special-portfolio-05.png'
import image6 from '../../../../assets/images/special/portfolio/special-portfolio-06.png'
import image7 from '../../../../assets/images/special/portfolio/special-portfolio-07.png'
import image8 from '../../../../assets/images/special/portfolio/special-portfolio-08.png'

type portfolioImagesType = {
  id: number
  src: string
  className: string
}

export const portfolioImagesData: portfolioImagesType[] = [
  { id: 1, src: image1, className: 'tall' },
  { id: 2, src: image2, className: 'wide' },
  { id: 3, src: image3, className: 'wide' },
  { id: 4, src: image4, className: '' },
  { id: 5, src: image5, className: 'wide' },
  { id: 6, src: image6, className: 'wide' },
  { id: 7, src: image7, className: 'tall' },
  { id: 8, src: image8, className: 'wide' },
]
