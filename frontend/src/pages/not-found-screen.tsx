import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="grid h-[calc(100vh-66px)] place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">معذرة!</p>
        <p className="mt-4 text-gray-500">لم نتمكن من العثور على هذه الصفحة.</p>
        <Link
          to='/'
          className="mt-6 inline-block rounded-lg bg-main px-5 py-3 text-sm font-medium text-white hover:bg-hover focus:outline-none focus:ring"
        >
          الرجوع الى القائمة الرئيسية
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage