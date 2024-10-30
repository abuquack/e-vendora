import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EyeOff, Lock, Mail } from 'lucide-react'
import { useState } from 'react';

function LoginScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordValue, setPasswordValue] = useState<string>('');
  const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setShowPassword(!showPassword)
  }

  return (
    <div className='h-screen relative'>
      <div className='flex flex-col justify-center h-full lg:h-fit lg:absolute lg:w-2/3 lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:bg-bgGray lg:p-10 rounded-xl'>
        <h1 className='font-bold text-4xl'>تسجيل الدخول</h1>
        <form className='flex flex-col gap-4 my-5'>
          <div className='relative'>
            <Input type='text' placeholder='اسم المستخدم أو البريد الإلكتروني' className='pr-10' />
            <div className='absolute inset-y-0 start-0 grid place-content-center px-4'>
              <Mail strokeWidth={1.25} size={20} color='#F59E0B' />
            </div>
          </div>
          <div className='relative'>
            <button className='absolute left-4 top-1/2 -translate-y-1/2' onClick={handleShowPassword}><EyeOff strokeWidth={1} color='#9EA5B0' /></button>
            <Input type={showPassword ? 'password' : 'text'} value={passwordValue} placeholder='كلمة المرور' className='pr-10' onChange={(e) => {
              setPasswordValue(e.target.value);
            }} />
            <div className='absolute inset-y-0 start-0 grid place-content-center px-4'>
              <Lock size={20} strokeWidth={1.25} color='#F59E0B' />
            </div>
          </div>
          <a href="#" className='text-blue-400 underline hover:text-blue-500'>هل نسيت كلمة المرور؟</a>
          <Button className='bg-main rounded-full mt-5 hover:bg-hover'>تسجيل الدخول</Button>
          <span className="flex items-center px-2">
            <span className="h-px flex-1 bg-font"></span>
            <span className="shrink-0 px-6">أو</span>
            <span className="h-px flex-1 bg-font"></span>
          </span>
          <a href='/register' className='text-main font-normal hover:underline'>أنشئ حساباً جديداً في فندور</a>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen