import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from '@app/layouts/layout'
// import Page from "@app/pages/allList/Page"
import Page from "@app/pages/oneList/Page"
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <Page />
    </Layout>
  </StrictMode>,
)
