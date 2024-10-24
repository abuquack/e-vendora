import { MoveLeft } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div>
      <div className='mx-auto max-w-screen-lg px-4 lg:flex flex-col justify-start py-16 items-center lg:h-screen'>
        <div className='flex flex-col items-center'>
          <p className='mb-2 text-sm text-gray-500'>إبدأ تجارتك معنا</p>
          <h1 className="text-3xl font-bold sm:text-5xl">المنصة العرية الأمثل</h1>
          <h1 className="text-3xl font-bold sm:text-5xl">لفتح متجرك في أسرع وقت.</h1>
          <p className='mt-5 text-xs px-8  lg:px-0 lg:text-base text-gray-500'>أتمم إنشاء متجرك في غضون دقائق بمساعدة الذكاء الأصطناعي.</p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 ">
          <a
            id='start-free'
            className="flex items-center justify-center gap-3 w-full rounded-lg bg-main px-12 py-2 hover:gap-10 duration-300 text-sm font-medium text-white shadow hover:bg-hover focus:outline-none focus:ring active:bg-main sm:w-auto"
            href="#"
          >
            ابدأ مجاناً
            <MoveLeft size={24} strokeWidth={1.5} />
          </a>
        </div>

      </div>

    </div>
  )
}

export default Hero