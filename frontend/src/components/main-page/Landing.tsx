import Hero from './Hero'
import LandingTabs from './LandingTabs'

function Landing() {

  return (
    <div>
      <Hero />
      <div className='flex flex-col'>
        <LandingTabs />
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Landing