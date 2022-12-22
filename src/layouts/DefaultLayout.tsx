/* eslint-disable prettier/prettier */
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/index'
import { LayoutContainer } from './DefaultLayout/styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
