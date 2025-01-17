import { useParams, Routes, Route } from 'react-router-dom'

import cardapio from 'data/cardapio.json'

import PratoDetalhes from './PratoDetalhes'
import DefaultPage from 'components/Layout/DefaultPage'
import NotFound from 'pages/NotFound'


export default function Prato() {
    
  const { id } = useParams()
  const prato = cardapio.find(prato => prato.id === Number(id))

  return (
    !prato ? <NotFound /> :
      <Routes>
        <Route path='*' element={<DefaultPage />}>
          <Route index element={<PratoDetalhes prato={prato} />} />
        </Route>
      </Routes>
  )
}