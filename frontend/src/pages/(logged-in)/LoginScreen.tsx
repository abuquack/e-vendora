import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Lock, Mail } from 'lucide-react'

function LoginScreen() {
  return (
    <div className='flex flex-col justify-center h-[calc(100vh-66px)]'>
      <h1 className='font-bold text-4xl'>تسجيل الدخول</h1>
      <form className='flex flex-col gap-4 my-5'>
        <div className='relative'>
          <Input type='text' placeholder='اسم المستخدم أو البريد الإلكتروني' className='pr-10' />
          <div className='absolute inset-y-0 start-0 grid place-content-center px-4'>
            <Mail strokeWidth={1.25} size={20} color='#F59E0B' />
          </div>
        </div>
        <div className='relative'>
          <Input type='text' placeholder='كلمة المرور' className='pr-10' />
          <div className='absolute inset-y-0 start-0 grid place-content-center px-4'>
            <Lock size={20} strokeWidth={1.25} color='#F59E0B' />
          </div>
        </div>
        <a href="#" className='text-blue-400 underline'>هل نسيت كلمة المرور؟</a>
        <Button className='bg-main rounded-full mt-5'>تسجيل الدخول</Button>
        <span className="flex items-center px-2">
          <span className="h-px flex-1 bg-font"></span>
          <span className="shrink-0 px-6">أو</span>
          <span className="h-px flex-1 bg-font"></span>
        </span>
        <Button variant="link" className='text-main font-normal'>أنشئ حساباً جديداً في فندور</Button>
      </form>
    </div>
  )
}

export default LoginScreen