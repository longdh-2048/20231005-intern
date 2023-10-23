import React from 'react'
import BillboardRoot from './BillboardRoot'
import Link from 'next/link'
import s from './billboard.module.scss'

export default function Billboard (): JSX.Element {
  return (
        <BillboardRoot >
            <div className='mx-auto xl:max-w-6xl  w-full px-4  justify-between container pt-2.5'>
                <div className={s.bgimg}>
                    <div className=" w-full lg:max-w-full lg:flex rounded-lg border p-6 ">
                        <div className="w-40 h-40  flex-none bg-cover lg:rounded-t-none text-center overflow-hidden">
                            <img className=" h-full w-full" src="https://t-cf.bstatic.com/design-assets/assets/v3.101.0/illustrations-traveller/GlobeGeniusBadge.png" alt="img" />
                        </div>
                        <div className='pl-4 max-w-sm mt-3 ' >
                            <div className='font-bold text-2xl '>
                                Nhận giá tức thì
                            </div>
                            <div className='my-2 mb-4 font-normal text-base '>
                                Chỉ cần đăng nhập tài khoản Booking.com của bạn và tìm logo Genius màu xanh dương để tiết kiệm
                            </div>
                            <Link href={''}>
                                <button className='p-3.5 py-1.5 text-sm font-medium bg-white hover:bg-[#f0f6fd] border-primary border text-primary rounded mr-2'>
                                    Đăng nhập
                                </button>
                            </Link>
                            <Link href={''}>
                                <button className='p-3.5 py-1.5 text-sm font-medium hover:bg-[#f0f6fd] bg-white text-primary rounded'>
                                    Đăng ký
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </BillboardRoot >
  )
}
