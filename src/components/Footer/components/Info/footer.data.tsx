type LocationDataType = {
  id: number
  label: string
  address: string
}

type LinkDataType = {
  id: number
  navLink: string
  to: string
}

export const locationData: LocationDataType[] = [
  {
    id: 1,
    label: 'Офис',
    address: 'г. Москва, Проезд Северный, д. 12',
  },
  {
    id: 2,
    label: 'Производство',
    address: 'г. Лобня, 12-й стоякоский проспект, д. 9',
  },
]

export const navLinkData: LinkDataType[] = [
  { id: 1, navLink: 'Premium', to: '/premium' },
  { id: 2, navLink: 'Special', to: '/special' },
  { id: 3, navLink: 'О компании', to: '/about' },
  { id: 4, navLink: 'Контакты', to: '/' },
]
