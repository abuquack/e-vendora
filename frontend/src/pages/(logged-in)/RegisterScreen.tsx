import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EyeOff, Lock, Mail } from 'lucide-react'
import { useState } from 'react';
import google from '@/assets/google.png';
import meta from '@/assets/meta.png';
import apple from '@/assets/apple.png';

function RegisterScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <div className='h-screen relative'>
      <div className='flex flex-col justify-center h-full lg:h-fit lg:absolute lg:w-2/3 lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:bg-bgGray lg:p-10 rounded-xl'>
        <h1 className='font-bold text-4xl'>إنشاء حساب</h1>
        <form className='flex flex-col gap-4 my-5'>
          <div className='relative'>
            <Input type='email' placeholder='البريد الإلكتروني' className='pr-10' />
            <div className='absolute inset-y-0 start-0 grid place-content-center px-4'>
              <Mail strokeWidth={1.25} size={20} color='#F59E0B' />
            </div>
          </div>
          <div className='relative'>
            <button className='absolute left-2 top-1/2 -translate-y-1/2 hover:bg-gray-100 rounded-full p-1' onClick={handleShowPassword}><EyeOff strokeWidth={1} color='#9EA5B0' /></button>
            <Input type={showPassword ? 'text' : 'password'} placeholder='كلمة المرور' className='pr-10' />
            <div className='absolute inset-y-0 start-0 grid place-content-center px-4'>
              <Lock size={20} strokeWidth={1.25} color='#F59E0B' />
            </div>
          </div>
          <div className='relative'>
            <button className='absolute left-2 top-1/2 -translate-y-1/2 hover:bg-gray-100 rounded-full p-1' onClick={handleShowPassword}><EyeOff strokeWidth={1} color='#9EA5B0' /></button>
            <Input type={showPassword ? 'text' : 'password'} placeholder='كرر كلمة المرور' className='pr-10' />
            <div className='absolute inset-y-0 start-0 grid place-content-center px-4'>
              <Lock size={20} strokeWidth={1.25} color='#F59E0B' />
            </div>
          </div>
          <a href="#" className='text-blue-400 underline hover:text-blue-500'>لديك حساب بالفعل؟</a>
          <Button className='bg-main rounded-full mt-5 hover:bg-hover'>إنشاء حساب</Button>
          <span className="flex items-center px-2">
            <span className="h-px flex-1 bg-font"></span>
            <span className="shrink-0 px-6">أو</span>
            <span className="h-px flex-1 bg-font"></span>
          </span>
          <Button variant="link" className='text-main font-normal w-fit mx-auto'>سجل بإستخدام</Button>
        </form>
        <div className='flex justify-center gap-4'>
          <div className='flex gap-2 border w-fit rounded-md px-3 py-2 shadow-sm cursor-pointer hover:bg-hoverFont duration-200'>
            <img src={apple} alt='apple' />
            <span className='font-semibold'>آبّل</span>
          </div>
          <div className='flex gap-2 border w-fit rounded-md px-3 py-2 shadow-sm cursor-pointer hover:bg-hoverFont duration-200'>
            <img src={meta} alt='meta' />
            <span className='font-semibold'>ميتا</span>
          </div>
          <div className='flex gap-2 border w-fit rounded-md px-3 py-2 shadow-sm cursor-pointer hover:bg-hoverFont duration-200'>
            <img src={google} alt='google' />
            <span className='font-semibold'>چوچل</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RegisterScreen