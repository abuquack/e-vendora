import Hero from './Hero'
import LandingTabs from './LandingTabs'
import TabsFeatures from './TabsFeatures'

function Landing() {
  return (
    <div>
      <Hero />
      <div className='flex flex-col lg:flex-row lg:border rounded-lg lg:p-2 lg:shadow-md relative'>
        <LandingTabs />
        <TabsFeatures />
        <div className='lg:w-1/3 lg:absolute lg:-left-1 lg:top-1/2 lg:-translate-y-1/2'><img src="https://s3.eu-west-2.amazonaws.com/blog.plutio.com/tasks_task_views_swticher_4904d1286e.png" alt="vendora" className="my-8 -scale-x-100 lg:scale-x-100 shadow-sm" /></div>
      </div>
    </div>
  )
}

export default Landing