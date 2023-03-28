import mockImg from '../../../../assets/images/mockImg.png'

type HistoryDataProps = {
  id: number
  description: string
  img: any
  yPercentFrom: number
  yPercentTo: number
  opacityFrom: number
  opacityTo: number
  start: string
  end: string
}

export const historyData: HistoryDataProps[] = [
  {
    id: 1,
    description:
      'Разрабатывая подобные идеи ты входишь в них с головой и со всем подобные. Разрабатывая подобные идеи.',
    img: mockImg,
    yPercentFrom: 0,
    yPercentTo: -10,
    opacityFrom: 1,
    opacityTo: 0,
    start: 'top+=30vh 10%',
    end: 'top+=50vh 100%',
  },
  {
    id: 2,
    description:
      'Разрабатывая подобные идеи ты входишь в них с головой и со всем подобные. Разрабатывая подобные идеи.',
    img: mockImg,
    yPercentFrom: 10,
    yPercentTo: 0,
    opacityFrom: 0,
    opacityTo: 1,
    start: 'top+=50% 10%',
    end: 'bottom+=100vh bottom',
  },
  {
    id: 3,
    description:
      'Разрабатывая подобные идеи ты входишь в них с головой и со всем подобные. Разрабатывая подобные идеи.',
    img: mockImg,
    yPercentFrom: 10,
    yPercentTo: -10,
    opacityFrom: 0,
    opacityTo: 1,
    start: 'top+=400vh 10%',
    end: 'bottom bottom',
  },
  {
    id: 4,
    description:
      'Разрабатывая подобные идеи ты входишь в них с головой и со всем подобные. Разрабатывая подобные идеи.',
    img: mockImg,
    yPercentFrom: 10,
    yPercentTo: -10,
    opacityFrom: 0,
    opacityTo: 1,
    start: 'top+=400vh 10%',
    end: 'bottom bottom',
  },
]
