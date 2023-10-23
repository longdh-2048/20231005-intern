import { createSlice } from '@reduxjs/toolkit'
/* eslint-disable no-empty-pattern */
export interface Location {
  id: number
  title: string
  img: string
}

const initialLocation1: Location[] = [
  {
    id: 1,
    title: 'TP.Hồ Chí Minh',
    img: 'https://cf.bstatic.com/xdata/images/city/600x600/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o='
  },
  {
    id: 2,
    title: 'Hà Nội',
    img: 'https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o='
  }
]

export const dataLocation1 = createSlice({
  name: 'dataLocation1',
  initialState: initialLocation1,
  reducers: {}
})

const initialLocation2: Location[] = [
  {
    id: 1,
    title: 'Đà Nẵng',
    img: 'https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o='
  },
  {
    id: 2,
    title: 'Đà Lạt',
    img: 'https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o='
  },
  {
    id: 3,
    title: 'Vũng Tàu',
    img: 'https://cf.bstatic.com/xdata/images/city/600x600/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o='
  }
]

export const dataLocation2 = createSlice({
  name: 'dataLocation2',
  initialState: initialLocation2,
  reducers: {}
})
export const {} = dataLocation1
export const {} = dataLocation2
