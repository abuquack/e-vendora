import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

function Subscribe() {
  return (
    <div className="flex flex-col gap-1 items-center justify-center sm:flex-row sm:space-x-4 sm:space-y-0 rtl:space-x-reverse border rounded-lg px-3 py-1 h-full">
      <Button
        variant="ghost" 
        className="text-primary hover:bg-primary/10 hover:text-primary w-fit h-fit p-1"
      >
        تسجيل الدخول
      </Button>
      <Button 
        variant="ghost" 
        className="group relative bg-main/70 hover:bg-main hover:text-white text-white overflow-hidden rounded-xl px-2 py-[6px] text-sm h-fit w-fit"
        style={{ marginRight: '0' }}
      >
        جرب مجانًا
        <ArrowLeft />
      </Button>
    </div>
  )
}

export default Subscribe