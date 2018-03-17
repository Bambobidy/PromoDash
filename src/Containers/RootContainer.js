import React from 'react'
import { connect } from 'react-redux'
import AppNavigation from '../Navigation/AppNavigation'

const RootContainer = ({ storeIsReady }) => {
  return <AppNavigation />
}

export default connect(null, null)(RootContainer)
