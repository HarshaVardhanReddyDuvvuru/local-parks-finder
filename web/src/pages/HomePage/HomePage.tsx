import { MetaTags } from '@redwoodjs/web'

import Home from 'src/components/Home'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Home />
    </>
  )
}

export default HomePage
