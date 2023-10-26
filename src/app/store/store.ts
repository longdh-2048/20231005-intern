import { configureStore } from '@reduxjs/toolkit'
import { dataDicovery } from './Dicovery'
import { dataUniqueStay } from './UniqueStay'
import { dataFavoriteHouse } from './FavoriteHouse'
import { dataArea, dataCity, dataIdLocation, dataTopLocation } from './TopLocation'

export const store = configureStore({
  reducer: {
    stateDicovery: dataDicovery.reducer,
    stateUniqueStay: dataUniqueStay.reducer,
    stateFavoriteHouse: dataFavoriteHouse.reducer,
    stateTopLocation: dataTopLocation.reducer,
    stateCity: dataCity.reducer,
    stateArea: dataArea.reducer,
    stateIdLocation: dataIdLocation.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
