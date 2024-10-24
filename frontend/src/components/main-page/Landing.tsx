import Hero from './Hero'
import LandingTabs from './LandingTabs'
import TabsFeatures from './TabsFeatures'

function Landing() {

  return (
    <div>
      <Hero />
      <div className='flex flex-col'>
        <LandingTabs />
        <TabsFeatures />
        <div><img src="https://s3.eu-west-2.amazonaws.com/blog.plutio.com/tasks_task_views_swticher_4904d1286e.png" alt="vendora" className="my-8 -scale-x-100 shadow-sm" /></div>
      </div>
    </div>
  )
}

export default Landing