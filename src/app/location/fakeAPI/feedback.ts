export interface FeedBackItem {
  id: string
  avt: string
  userName: string
  point: string
  comment: string
  date: string
  imgFB: Array<{ img: string }>
  likes: string
}

export const feedback: FeedBackItem [] = [
  {
    id: '1',
    avt: 'https://ik.imagekit.io/tvlk/usr-profile/OvhguN8b+C-fOH2mnVeb-5+b6Dqlq98pjkxvXq6C5WM=/tvlk/usr-profile/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/usracid-user-asset-000065c634c083d5/user/asset/1528111382815-800x800-FIT_AND_TRIM-adf1586ee82d8dc4a72e82c86f659477.jpeg?_src=imagekit&_src=imagekit&tr=dpr-2,h-64,q-40,w-64',
    userName: 'Nguyễn Văn A',
    point: '8,5',
    comment: 'Nói chung mọi thứ rất vui. Nhưng mọi người đi du lịch hà nội thù lưu ý giá cả ở đây. Chém ghê lắm khách sạn rất nhiệt tình chu đáo',
    imgFB: [
      {
        img: 'https://ik.imagekit.io/tvlk/ugc-review/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/ugc-photo-ap-southeast-1-581603780057-acd24e232f75f09e/ACCOMMODATION/213156706_ACCOMMODATION_1674096097925_da96bbb48f1c6b8d?_src=imagekit&tr=dpr-2,h-145,q-40,w-145'
      },
      {
        img: 'https://ik.imagekit.io/tvlk/ugc-review/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/ugc-photo-ap-southeast-1-581603780057-acd24e232f75f09e/ACCOMMODATION/213156706_ACCOMMODATION_1674096097925_da96bbb48f1c6b8d?_src=imagekit&tr=dpr-2,h-145,q-40,w-145'
      },
      {
        img: 'https://ik.imagekit.io/tvlk/ugc-review/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/ugc-photo-ap-southeast-1-581603780057-acd24e232f75f09e/ACCOMMODATION/213156706_ACCOMMODATION_1674096097925_da96bbb48f1c6b8d?_src=imagekit&tr=dpr-2,h-145,q-40,w-145'
      }
    ],
    likes: '4'
  }
]
