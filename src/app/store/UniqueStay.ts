/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit'

export interface UniqueStay {
  id: number
  title: string
  img: string
  location: string
  description: string
  rating: number
  detail: string
}

const initialUniqueStay: UniqueStay[] = [
  {
    id: 1,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o=',
    title: 'Waldschenke Stendenitz Übernachten im Wald am See',
    location: 'Đức, Neuuruppin ',
    rating: 8.6,
    description: 'Tuyệt vời',
    detail: '289 đánh giá'
  },
  {
    id: 2,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/366855457.webp?k=ef25b0c640c7c2f4fcac4c79509ef1dbb484c19f21a7c8cba18d9270d7f790e9&o=',
    title: 'Casa Rural La Marquesa - Cuenca',
    location: 'Tây Ban Nha, Valera de Abajo',
    rating: 9.4,
    description: 'Tuyệt hảo',
    detail: '61 đánh giá'
  },
  {
    id: 3,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o=',
    title: 'Domki ROSSE niedaleko plaży',
    location: 'Ba Lan, Jastrzębia Góra',
    rating: 9.8,
    description: 'Xuất sắc',
    detail: '137 đánh giá'
  },
  {
    id: 4,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o=',
    title: 'Casaprisco',
    location: 'Hà Lan, Putten',
    rating: 9.3,
    description: 'Tuyệt hảo',
    detail: '73 đánh giá'
  },
  {
    id: 5,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/178421496.webp?k=94836d8c61053e484c5ef0110211d6eacf89d8e58f8dfa3e58d14833287cc3a1&o=',
    title: 'Das rote Haus hinterm Deich',
    location: 'Đức, Simonsberg',
    rating: 9.3,
    description: 'Tuyệt hảo',
    detail: '49 đánh giá'
  },
  {
    id: 6,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/187853972.webp?k=dd753431cf4b638642614dc060512d832d24f3249eef30b9a5f18601d2ac5635&o=',
    title: 'Tiny House Dreischwesternherz',
    location: 'Đức, Trier ',
    rating: 9.6,
    description: 'Xuất sắc',
    detail: '146 đánh giá'
  },
  {
    id: 7,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/164383742.webp?k=61074259c477f7211cbd42a6542dcc3b1b1a049e332ba349d836b663df33d511&o=',
    title: 'Casa na praia em São Sebastião',
    location: 'Brazil, São Sebastião',
    rating: 9.6,
    description: 'Xuất sắc',
    detail: '43 đánh giá'
  },
  {
    id: 8,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=847c6d1ffe92003d2d7c9cf7043c6acda1c550e6f0c7c981370a6303f12a10cf&o=',
    title: 'Carinya Park',
    location: 'Úc, Gembrook',
    rating: 9.3,
    description: 'Tuyệt hảo',
    detail: '35 đánh giá'
  },
  {
    id: 9,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/131500906.webp?k=b6f638eadb7c9632498a9e9a15440987a22489684b8825b0cb235bd3c79f07de&o=',
    title: 'Ranczo w Dolinie',
    location: 'Ba Lan, Kiszkowo',
    rating: 9.5,
    description: 'Xuất sắc',
    detail: '229 đánh giá'
  },
  {
    id: 10,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/131056675.webp?k=b270059e6cb5f68d7d5e114a7db1dba9c0664f79ce1b6962912950ed002a5dc8&o=',
    title: 'La Maison Pamaljolie',
    location: 'Canada, Stanstead-Est',
    rating: 9.1,
    description: 'Tuyệt hảo',
    detail: '50 đánh giá'
  },
  {
    id: 11,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
    title: 'Agriturismo Cabrele',
    location: 'Ý, Santorso',
    rating: 9.3,
    description: 'Tuyệt hảo',
    detail: '245 đánh giá'
  },
  {
    id: 12,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/119988219.webp?k=afbd4548022812f6bb932130b99252b8c80939f18a92972a8d94b627b943a6d2&o=',
    title: 'Loft Over The Vines',
    location: 'Úc, Richmond',
    rating: 9.5,
    description: 'Xuất sắc',
    detail: '37 đánh giá'
  },
  {
    id: 13,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/398620320.webp?k=10e476830ecfd5a062072a6318612393bc414bd75c10bb44dd29a1d6de5b225b&o=',
    title: 'May\'s Apartments by May\'s',
    location: 'Na Uy, Reine',
    rating: 9.4,
    description: 'Tuyệt hảo',
    detail: '835 đánh giá'
  },
  {
    id: 14,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/106548982.webp?k=6464bb1807bbc9f4f9c408328c8df98bdfb5a885f7fc51712fcefc417b8472f7&o=',
    title: 'Auberge La Seigneurie Valcartier',
    location: 'Canada, Saint-Gabriel-de-Valcartier ',
    rating: 8.1,
    description: 'Rất tốt',
    detail: '234 đánh giá'
  },
  {
    id: 15,
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/101442073.webp?k=70cb19199194653f37bdfb74cbc156bfc37db8b92c7cb08205b2d871bc0ddf69&o=',
    title: 'Apartament Droga na Bystre 9a',
    location: 'Ba Lan, Zakopane',
    rating: 9.1,
    description: 'Tuyệt hảo',
    detail: '44 đánh giá'
  }
]

export const dataUniqueStay = createSlice({
  name: 'dataUniqueStay',
  initialState: initialUniqueStay,
  reducers: {}
})

export const {} = dataUniqueStay
