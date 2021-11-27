import { useDispatch, useSelector } from 'react-redux'
import { FUNTIONAL_ACTIONS } from './../redux/actions/funtinalActions'
import React from 'react'

export const handlerToggleSidebar = () => {
  const isSidebarOpen = useSelector((state) => state.funtional.isShowSidebar)
  const dispatch = useDispatch()
  FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen)
}
