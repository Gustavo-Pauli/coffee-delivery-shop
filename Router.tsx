import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './src/layouts/DefaultLayout'

import { Checkout } from './src/pages/Checkout'
import { Success } from './src/pages/Checkout/Success'
import { Home } from './src/pages/Home'
import { NoMatch } from './src/pages/NoMatch'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/checkout">
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Success />} />
        </Route>
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
