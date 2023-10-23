import React from 'react'
import FindNext from './components/common/FindNext'
import PromoSection from './components/BasicLayout/PromoSecsion/PromoSection'
import Location from './components/BasicLayout/Location/Location'
import Discovery from './components/BasicLayout/Discovery/Dicovery'
import Billboard from './components/BasicLayout/Billboard/Billboard'
import Board from './components/BasicLayout/Board/Board'
import TopLocation from './components/BasicLayout/TopLocation/TopLocation'
import UniqueStay from './components/BasicLayout/UniqueStay/UniqueStay'
import FavoriteHouse from './components/BasicLayout/FavoriteHouse/FavoriteHouse'

export default function Home (): JSX.Element {
  return (
    <div>
      <FindNext />
      <PromoSection />
      <Location />
      <Discovery />
      <UniqueStay />
      <FavoriteHouse />
      <Billboard />
      <Board />
      <TopLocation />
    </div>
  )
}
