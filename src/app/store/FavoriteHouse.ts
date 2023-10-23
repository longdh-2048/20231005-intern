/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit'

export interface FavoriteHouse {
  id: number
  title: string
  img: string
  location: string
  description: string
  rating: number
  detail: string
  price: string
}

const initialFavoriteHouse: FavoriteHouse[] = [
  {
    id: 1,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=',
    title: 'Aparthotel Stare Miasto',
    location: 'Old Town, Ba Lan, Kraków',
    rating: 8.7,
    description: 'Tuyệt vời',
    detail: '2.442 đánh giá',
    price: 'VND 3.710.273'
  },
  {
    id: 2,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=',
    title: '7Seasons Apartments Budapest',
    location: '06. Terézváros, Hungary, Budapest',
    rating: 8.7,
    description: 'Tuyệt vời',
    detail: '9.006 đánh giá',
    price: 'VND 2.736.460'
  },
  {
    id: 3,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=',
    title: 'numa I Vita Apartments',
    location: 'Fortezza da Basso, Ý, Florence',
    rating: 9.3,
    description: 'Tuyệt hảo',
    detail: '1.211 đánh giá',
    price: 'VND 8.629.179'
  },
  {
    id: 4,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=',
    title: 'Cheval Three Quays',
    location: 'City of London, Vương Quốc Anh, London',
    rating: 9.4,
    description: 'Tuyệt hảo',
    detail: '618 đánh giá',
    price: 'VND 15.981.799'
  },
  {
    id: 5,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&o=',
    title: '3 Epoques Apartments',
    location: 'Khu Prague 01, Cộng hoà Séc, Praha 1',
    rating: 8.7,
    description: 'Tuyệt vời',
    detail: '463 đánh giá',
    price: 'VND 2.422.907'
  },
  {
    id: 6,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/123801721.webp?k=d1781674565d944cd849f96e2c5cb77ba337092a07b6c7cdb3e49594aa9b0bf8&o=',
    title: '6 Continents Apartments',
    location: 'Khu Prague 01, Cộng hoà Séc, Prague',
    rating: 8.3,
    description: 'Rất tốt',
    detail: '334 đánh giá',
    price: 'VND 2.643.172'
  },
  {
    id: 7,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/270323047.webp?k=bade09d7901e1282156f13c3b39e3a8b9c8d45170b2f1184565d3fc304c42d70&o=',
    title: 'Flora Chiado Apartments',
    location: 'Santa Maria Maior, Bồ Đào Nha, Lisboa',
    rating: 9.7,
    description: 'Xuất sắc',
    detail: '190 đánh giá',
    price: 'VND 23.192.537'
  },
  {
    id: 8,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/95656075.webp?k=d1f3628401b0aeab5c4e30286128f9327d6d913488a7715a61fac38776d13b44&o=',
    title: 'Baranova Apartments',
    location: 'Khu Prague 03, Cộng hoà Séc, Prague',
    rating: 9.6,
    description: 'Xuất sắc',
    detail: '34 đánh giá',
    price: 'VND 2.567.764'
  },
  {
    id: 9,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=',
    title: 'Leman Locke',
    location: 'Tower Hamlets, Vương Quốc Anh, London',
    rating: 8.9,
    description: 'Tuyệt vời',
    detail: '1.434 đánh giá',
    price: 'VND 9.580.126'
  },
  {
    id: 10,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/34405073.webp?k=fec9d1956d8581db5bb623e7e3b3f9129c2e230b21ec428b542a242347526db0&o=',
    title: 'Sugar Loft Apartments',
    location: 'Santa Teresa, Brazil, Rio de Janeiro (Rio de Janeiro)',
    rating: 8.8,
    description: 'Tuyệt vời',
    detail: '294 đánh giá',
    price: 'VND 1.065.238'
  }
]

export const dataFavoriteHouse = createSlice({
  name: 'dataFavoriteHouse',
  initialState: initialFavoriteHouse,
  reducers: {}
})

export const {} = dataFavoriteHouse
