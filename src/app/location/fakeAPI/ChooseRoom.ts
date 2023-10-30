export interface ChooseRoom {
  id: string
  title: string
  bed: string
  availableRooms: string
  people: string
  endow: string[]
  rates: string
  oldRates: string
}

export const chooseRoom: ChooseRoom[] = [
  {
    id: '567',
    title: 'Executive Suite Room',
    availableRooms: '1 phòng trống',
    bed: '2 Giường Đơn',
    people: '2 khách',
    endow: ['Miễn phí bữa sáng', 'Wifi miễn phí', 'Không hút thuốc', 'Miễn phí huỷ phòng', 'Có thể đổi lịch'],
    rates: '2.774.000 VND',
    oldRates: '3.800.000 VND'
  },
  {
    id: '467657',
    title: 'Executive Suite Room',
    availableRooms: '1 phòng trống',
    bed: '2 Giường Đơn',
    people: '2 khách',
    endow: ['Miễn phí bữa sáng', 'Wifi miễn phí', 'Không hút thuốc', 'Miễn phí huỷ phòng', 'Có thể đổi lịch'],
    rates: '2.774.000 VND',
    oldRates: '3.800.000 VND'
  }
]
