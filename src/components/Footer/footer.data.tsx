type LocationDataType = {
  id: number
  label: string
  address: string
}

type LinkDataType = {
  id: number
  link: string
}

export const locationData: LocationDataType[] = [
  { id: 1, label: 'Офис', address: 'г. Москва, Проезд Северный, д. 12' },
  {
    id: 2,
    label: 'Производство',
    address: 'г. Лобня, 12-й стоякоский проспект, д. 9',
  },
]

export const navLinkData: LinkDataType[] = [
  { id: 1, link: 'Premium' },
  { id: 2, link: 'Special' },
  { id: 3, link: 'О компании' },
  { id: 4, link: 'Контакты' },
]
