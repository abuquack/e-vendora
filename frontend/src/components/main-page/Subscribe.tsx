import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

function Subscribe() {
  return (
    <div className="flex flex-row gap-1 items-center justify-center sm:space-x-4 sm:space-y-0 rtl:space-x-reverse border rounded-lg px-2 py-2 lg:py-1 lg:px-3 h-fit">
      <Button
        className="bg-transparent w-[calc(50%-10px)] h-full lg:h-fit lg:w-fit text-gray-500 bg-hoverFont hover:bg-hoverFont lg:bg-transparent hover:text-gray-600 lg:hover:bg-transparent px-2 py-1 lg:p-1"
      >
        <a href="/login" className='w-full h-full'>تسجيل الدخول</a>
      </Button>
      <Button
        variant="ghost"
        className="group  w-[calc(50%-10px)] h-full lg:h-fit lg:w-fit relative bg-main/70 hover:bg-main hover:text-white text-white overflow-hidden lg:rounded-xl px-2 py-1 lg:py-[6px] text-sm"
        style={{ marginRight: '0' }}
      >
        جرب مجانًا
        <ArrowLeft />
      </Button>
    </div>
  )
}

export default Subscribe