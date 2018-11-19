import Slots from './modules/slots'
import Details from './modules/details'

const routes = [
  {
    path: "/",
    component: Slots,
    exact: true
  },
  {
    path: "/home/:id",
    component: Details
  }
]

export default routes