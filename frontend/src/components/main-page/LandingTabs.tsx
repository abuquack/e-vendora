import { Store } from "lucide-react"

function LandingTabs() {
  const pages = [
    {
      name: 'المتاجر',
      icon: <Store strokeWidth={1} />
    },
    {
      name: 'المتاجر',
      icon: <Store strokeWidth={1} />
    },
    {
      name: 'المتاجر',
      icon: <Store strokeWidth={1} />
    },
    {
      name: 'المتاجر',
      icon: <Store strokeWidth={1} />
    },
    {
      name: 'المتاجر',
      icon: <Store strokeWidth={1} />
    },
    {
      name: 'المتاجر',
      icon: <Store strokeWidth={1} />
    },
    {
      name: 'المتاجر',
      icon: <Store strokeWidth={1} />
    },
  ]
  return (
    // { TODO: Tabs for name & icons}
    <div className="relative lg:-right-8 bg-white lg:min-w-[150px]">
      <ul className='flex flex-nowrap gap-3 p-2 border rounded-lg overflow-x-auto shadow-md lg:grid lg:grid-cols-1'>
        {
          pages.map((page, id) => {
            return (
              <li key={id} className={`${id == 0 && 'bg-hoverFont'} flex items-center gap-1 cursor-pointer py-1 w-full px-2 rounded-lg text-lg font-normal text-gray-700 hover:text-black lg:w-full hover:bg-hoverFont`}>
                {page.icon}
                {page.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default LandingTabs