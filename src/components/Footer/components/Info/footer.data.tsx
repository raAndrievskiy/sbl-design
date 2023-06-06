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
    address: 'г. Москва, Варшавское ш. 148, БЦ РТС',
  },
  {
    id: 2,
    label: '',
    address: '',
  },
]

export const navLinkData: LinkDataType[] = [
  { id: 1, navLink: 'Premium', to: '/premium' },
  { id: 2, navLink: 'Special', to: '/special' },
  { id: 3, navLink: 'О компании', to: '/about' },
  { id: 4, navLink: 'Контакты', to: '/' },
]
