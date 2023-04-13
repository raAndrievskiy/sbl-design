import portFolioImage1 from '../../../../assets/images/portfolio/portfolio-01.png'
import portFolioImage2 from '../../../../assets/images/portfolio/portfolio-02.png'
import portFolioImage3 from '../../../../assets/images/portfolio/portfolio-03.png'
import portFolioImage4 from '../../../../assets/images/portfolio/portfolio-04.png'
import portFolioImage5 from '../../../../assets/images/portfolio/portfolio-05.png'
import portFolioImage6 from '../../../../assets/images/portfolio/portfolio-06.png'
import portFolioImage7 from '../../../../assets/images/portfolio/portfolio-07.png'

type PortfolioImagesDataTypes = {
  id: number
  src: string
  x: number
  y: number
  className: string
}

export const portfolioImagesData: PortfolioImagesDataTypes[] = [
  {
    id: 1,
    src: portFolioImage1,
    className: 'portfolioImg1',
    x: 20,
    y: 9,
  },
  {
    id: 2,
    src: portFolioImage2,
    className: 'portfolioImg2',
    x: 3,
    y: 5,
  },
  {
    id: 3,
    src: portFolioImage3,
    className: 'portfolioImg3',
    x: 3,
    y: 5,
  },
  {
    id: 4,
    src: portFolioImage4,
    className: 'portfolioImg4',
    x: 3,
    y: 5,
  },
  {
    id: 5,
    src: portFolioImage5,
    className: 'portfolioImg5',
    x: 7,
    y: 6,
  },
  {
    id: 6,
    src: portFolioImage6,
    className: 'portfolioImg6',
    x: 4,
    y: 5,
  },
  {
    id: 7,
    src: portFolioImage7,
    className: 'portfolioImg7',
    x: 4,
    y: 4,
  },
]
