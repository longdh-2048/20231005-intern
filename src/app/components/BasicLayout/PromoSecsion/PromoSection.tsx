import React from 'react'
import PromoSectionRoot from './PromoSectionRoot'
import Link from 'next/link'
// import Link from 'next/link'
import s from './promoSection.module.scss'
export default function PromoSection (): JSX.Element {
  return (
        <PromoSectionRoot >
            <div className='mx-auto xl:max-w-6xl w-full px-4  justify-between container pt-2.5'>
                <div className='mb-4'>
                    <div className='text-2xl font-bold'>Ưu đãi</div>
                    <div>Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn</div>
                </div>
                <div className='grid grid-cols-2 gap-4  '>
                    <div className=" w-full lg:max-w-full lg:flex rounded-lg shadow-2xl max-h-48 ">
                        <div className='pl-4 max-w-sm mt-5' >
                            <div className='font-bold text-base '>
                                Tận hưởng kỳ nghỉ dài nhất của bạn
                            </div>
                            <div className='my-2 mb-4 font-normal text-base '>
                                Tìm kiếm các chỗ nghỉ cho phép lưu trú dài ngày với giá theo tháng ưu đãi.
                            </div>
                            <Link href=''>
                                <button className='bg-[#006ce4] py-2 px-4 font-medium text-sm hover:bg-[#003b95] text-white rounded' >
                                    Tìm chỗ nghỉ
                                </button>
                            </Link>
                        </div>
                        <div className="ml-auto float-right h-48 lg:h-auto lg:w-48 flex-none bg-cover lg:rounded-t-none  text-center overflow-hidden">
                            <img className="rounded-r h-full w-full object-cover " src="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o=" alt="img" />
                        </div>
                    </div>
                    <div className={s.backgroundimg}>
                    <div className=" w-full lg:max-w-full lg:flex rounded-lg shadow-2xl max-h-48 mt-1">
                        <div className='pl-4 max-w-sm mt-5 text-white' >
                            <div className='font-bold text-base '>
                                Tiết kiệm 15% với Ưu đãi cuối năm
                            </div>
                            <div className='my-2 mb-4 font-normal text-base '>
                                Khám phá hàng nghìn điểm đến trên khắp thế giới và tiết kiệm 15%
                            </div>
                            <Link href=''>
                                <button className='bg-[#006ce4] py-2 px-4 font-medium text-sm hover:bg-[#003b95] text-white rounded' >
                                    Tìm ưu đãi cuối năm
                                </button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </PromoSectionRoot >
  )
}
