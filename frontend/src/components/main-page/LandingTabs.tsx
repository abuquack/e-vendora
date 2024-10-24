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
    <div>
      <ul className='flex flex-nowrap gap-4 border rounded-lg overflow-x-auto p-3 shadow-md'>
        {
          pages.map((page, id) => {
            return (
              <li key={id} className={`${id == 0 && 'bg-hoverFont'} flex items-center gap-2 py-2 px-4 w-1/3 rounded-lg text-lg font-bold text-gray-700 hover:text-font`}>
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