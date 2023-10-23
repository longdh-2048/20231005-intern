import { createSlice } from '@reduxjs/toolkit'
/* eslint-disable no-empty-pattern */

export interface IdLocation {
  id: string
  title: string
}

const initialIdLocation: IdLocation[] = [
  {
    id: 'area',
    title: 'Khu vực'
  },
  {
    id: 'city',
    title: 'Thành phố'
  },
  {
    id: 'toplocation',
    title: 'Địa điểm được quan tâm'
  }
]

export const dataIdLocation = createSlice({
  name: 'dataIdLocation',
  initialState: initialIdLocation,
  reducers: {}
})
// Khu vực
export interface TopLocation {
  id: number
  title: string
  description: string
}

const initialTopLocation: TopLocation[] = [
  {
    id: 1,
    title: 'Vĩnh Long',
    description: '42 chỗ nghỉ'
  },
  {
    id: 2,
    title: 'Cần Thơ',
    description: '352 chỗ nghỉ'
  },
  {
    id: 3,
    title: 'Cà Mau',
    description: '48 chỗ nghỉ'
  },
  {
    id: 4,
    title: 'Vịnh Hạ Long',
    description: '1.370 chỗ nghỉ'
  },
  {
    id: 5,
    title: 'Quảng Bình',
    description: '267 chỗ nghỉ'
  },
  {
    id: 6,
    title: 'Bình Thuận',
    description: '600 chỗ nghỉ'
  },
  {
    id: 7,
    title: 'Đẵk Lắk',
    description: '123 chỗ nghỉ'
  },
  {
    id: 8,
    title: 'Ninh Thuận',
    description: '145 chỗ nghỉ'
  },
  {
    id: 9,
    title: 'Hà Tĩnh',
    description: '37 chỗ nghỉ'
  },
  {
    id: 10,
    title: 'Khu vực TP. Hồ Chí Minh',
    description: '5.638 chỗ nghỉ'
  },
  {
    id: 11,
    title: 'Hà Nội',
    description: '3.899 chỗ nghỉ'
  },
  {
    id: 12,
    title: 'Gia Lai',
    description: '86 chỗ nghỉ'
  },
  {
    id: 13,
    title: 'Bạc Liêu',
    description: '23 chỗ nghỉ'
  },
  {
    id: 14,
    title: 'Thành phố Đà Nẵng',
    description: '2.512 chỗ nghỉ'
  },
  {
    id: 15,
    title: 'Trà Vinh',
    description: '17 chỗ nghỉ'
  },
  {
    id: 16,
    title: 'Thanh Hóa',
    description: '254 chỗ nghỉ'
  },
  {
    id: 17,
    title: 'Bình Dương',
    description: '78 chỗ nghỉ'
  },
  {
    id: 18,
    title: 'Thừa Thiên - Huế',
    description: '519 chỗ nghỉ'
  },
  {
    id: 19,
    title: 'Phú Yên',
    description: '212 chỗ nghỉ'
  }
]

export const dataTopLocation = createSlice({
  name: 'dataTopLocation',
  initialState: initialTopLocation,
  reducers: {}
})

// thành phố
export interface City {
  id: number
  title: string
  description: string
}

const initialCity: City[] = [
  {
    id: 1,
    title: 'Long Hải',
    description: '84 khách sạn'
  },
  {
    id: 2,
    title: 'Vĩnh Long',
    description: '36 khách sạn'
  },
  {
    id: 3,
    title: 'Vịnh Vĩnh Hy',
    description: '8 khách sạn'
  },
  {
    id: 4,
    title: 'Vinh',
    description: '34 khách sạn'
  },
  {
    id: 5,
    title: 'Tuy Hòa',
    description: '142 khách sạn'
  },
  {
    id: 6,
    title: 'Thủ Dầu Một',
    description: '31 khách sạn'
  },
  {
    id: 7,
    title: 'Tây Ninh',
    description: '23 khách sạn'
  },
  {
    id: 8,
    title: 'Tam Kỳ',
    description: '19 khách sạn'
  },
  {
    id: 9,
    title: 'Tam Đảo',
    description: '37 khách sạn'
  },
  {
    id: 10,
    title: 'Sóc Trăng',
    description: '11 khách sạn'
  },
  {
    id: 11,
    title: 'Sa Pa',
    description: '444 khách sạn'
  },
  {
    id: 12,
    title: 'Sầm Sơn',
    description: '89 khách sạn'
  },
  {
    id: 13,
    title: 'Rạch Giá',
    description: '40 khách sạn'
  },
  {
    id: 14,
    title: 'Quy Nhơn',
    description: '480 khách sạn'
  },
  {
    id: 15,
    title: 'Quảng Ngãi',
    description: '67 khách sạn'
  },
  {
    id: 16,
    title: 'Pleiku',
    description: '60 khách sạn'
  },
  {
    id: 17,
    title: 'Phú Quốc',
    description: '676 khách sạn'
  },
  {
    id: 18,
    title: 'Nha Trang',
    description: '1660 khách sạn'
  },
  {
    id: 19,
    title: 'Đà Nẵng',
    description: '2514 khách sạn'
  },
  {
    id: 20,
    title: 'Đà Lạt',
    description: '2149 khách sạn'
  }
]

export const dataCity = createSlice({
  name: 'dataCity',
  initialState: initialCity,
  reducers: {}
})

// Địa điểm được quan tâm
export interface Area {
  id: number
  title: string
  description: string
}

const initialArea: Area[] = [
  {
    id: 1,
    title: 'Ga Hòa Hưng',
    description: '5.607 chỗ nghỉ'
  },
  {
    id: 2,
    title: 'Hồ Tây',
    description: '3.812 chỗ nghỉ'
  },
  {
    id: 3,
    title: 'Bãi Trước',
    description: '1.821 chỗ nghỉ'
  },
  {
    id: 4,
    title: 'Hồ Tuyền Lâm',
    description: '2.145 chỗ nghỉ'
  },
  {
    id: 5,
    title: 'Bãi Sau',
    description: '1.821 chỗ nghỉ'
  },
  {
    id: 6,
    title: 'Phan Thiết',
    description: '1.657 chỗ nghỉ'
  },
  {
    id: 7,
    title: 'Chợ Bến Thành',
    description: '5.607 chỗ nghỉ'
  },
  {
    id: 8,
    title: 'Hòn Tằm',
    description: '1.657 chỗ nghỉ'
  },
  {
    id: 9,
    title: 'Chợ Đà Lạt',
    description: '2.145 chỗ nghỉ'
  },
  {
    id: 10,
    title: 'Chợ đêm Phú Quốc',
    description: '673 chỗ nghỉ'
  },
  {
    id: 11,
    title: 'Hồ Xuân Hương',
    description: '2.145 chỗ nghỉ'
  },
  {
    id: 12,
    title: 'Cầu sông Hàn',
    description: '2.509 chỗ nghỉ'
  },
  {
    id: 13,
    title: 'Chợ nổi Cái Răng',
    description: '330 chỗ nghỉ'
  },
  {
    id: 14,
    title: 'Ga Hà Nội',
    description: '3.812 chỗ nghỉ'
  },
  {
    id: 15,
    title: 'Phố đi bộ Nguyễn Huệ',
    description: '56 chỗ nghỉ'
  },
  {
    id: 16,
    title: 'Hồ Hoàn Kiếm',
    description: '3.812 chỗ nghỉ'
  },
  {
    id: 17,
    title: 'Đảo Hòn Tre',
    description: '1.657 chỗ nghỉ'
  },
  {
    id: 18,
    title: 'Bến Ninh Kiều',
    description: '330 chỗ nghỉ'
  },
  {
    id: 19,
    title: 'Ga Nha Trang',
    description: '1.657 chỗ nghỉ'
  },
  {
    id: 20,
    title: 'Cầu Rồng',
    description: '2.509 chỗ nghỉ'
  }
]

export const dataArea = createSlice({
  name: 'dataArea',
  initialState: initialArea,
  reducers: {}
})

export const {} = dataTopLocation
export const {} = dataCity
export const {} = dataArea
export const {} = dataIdLocation
