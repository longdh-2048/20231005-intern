/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit'

// footerState01
export interface Dicovery {
  id: number
  title: string
  img: string
  description: string
}

const initialDiscovery: Dicovery[] = [
  {
    id: 1,
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o=',
    title: 'Vũng Tàu',
    description: '1.829 chỗ nghỉ'
  },
  {
    id: 2,
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=',
    title: 'Đà Lạt',
    description: '2.144 chỗ nghỉ'
  },
  {
    id: 3,
    img: 'https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=',
    title: 'Hà Nội',
    description: '3.809 chỗ nghỉ'
  },
  {
    id: 4,
    img: 'https://r-xx.bstatic.com/xdata/images/city/170x136/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o=',
    title: 'TP. Hồ Chí Minh',
    description: '5.612 chỗ nghỉ'
  },
  {
    id: 5,
    img: 'https://r-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=',
    title: 'Đà Nẵng',
    description: '2.511 chỗ nghỉ'
  },
  {
    id: 6,
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o=',
    title: 'Nha Trang',
    description: '1.660 chỗ nghỉ'
  },
  {
    id: 7,
    img: 'https://r-xx.bstatic.com/xdata/images/city/170x136/688886.jpg?k=91c47e49d89f3a4c2408a360bbbe8b08d11e35e3d6d253c7efb27b5ca4d40a61&o=',
    title: 'Huế',
    description: '428 chỗ nghỉ'
  },
  {
    id: 8,
    img: 'https://r-xx.bstatic.com/xdata/images/city/170x136/688866.jpg?k=fc9d2cb9fe2f6d1160e10542cd2b83f5a8008401d33e8750ee3c2691cf4d4f7e&o=',
    title: 'Hội An',
    description: '1.013 chỗ nghỉ'
  },
  {
    id: 9,
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/688898.jpg?k=cf02624b12e35e7e5c6e7b1323f3fd4ef10b8b0676b84ff91b27c8a77f1b5d33&o=',
    title: 'Sapa',
    description: '443 chỗ nghỉ'
  },
  {
    id: 10,
    img: 'https://r-xx.bstatic.com/xdata/images/city/170x136/688879.jpg?k=82ca0089828054a1a9c46b14ea7f1625d73d42505ae58761e8bcc067f9e72475&o=',
    title: 'Phú Quốc',
    description: '673 chỗ nghỉ'
  }
]

export const dataDicovery = createSlice({
  name: 'dataDicovery',
  initialState: initialDiscovery,
  reducers: {}
})

export const {} = dataDicovery
