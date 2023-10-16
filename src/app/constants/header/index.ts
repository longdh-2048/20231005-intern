import { faBed, faCar, faEarthAmericas, faPlane, faTaxi, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'

interface HeaderItem {
  title: string
  icon: IconProp
}

export const links: HeaderItem[] = [
  {
    title: 'Lưu trú',
    icon: faBed
  },
  {
    title: 'Chuyến bay',
    icon: faPlane
  }, {
    title: 'Chuyến bay + Khách sạn',
    icon: faEarthAmericas
  }, {
    title: 'Thuê xe',
    icon: faCar
  }, {
    title: 'Địa điểm tham quan',
    icon: faMapLocationDot
  }, {
    title: 'Taxi sân bay',
    icon: faTaxi
  }
]
