import Subscribe from "./subscribe"

type NavigationPhoneScreenProps = {
  sideMenu: boolean,
}

function NavigationPhoneScreen({ sideMenu }: NavigationPhoneScreenProps) {
  return sideMenu && (
    <div className="flex h-screen flex-col justify-between border rounded-lg bg-white shadow mx-3 relative z-50">
      <div className="px-4 py-6">
        <span className="flex items-center justify-center gap-1 font-medium text-sm h-fit py-3 mb-2 place-content-center rounded-lg bg-hoverFont text-gray-600">
          مرحباً بكم في  <span className='text-main font-bold text-base'>  فيندورا  </span>
        </span>

        <Subscribe />

        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="#"
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              الصفحة الرئيسية
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium"> تواصل معنا </span>

              </summary>

            </details>
          </li>

          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              تعرف علينا
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium"> الحلول </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    الحل الأول
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    الحل الثاني
                  </a>
                </li>

                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      الحل الثالث
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100" dir='ltr'>
        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="size-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium text-left">Abu Adnan</strong>

              <span> AbuAdnan@gmail.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  )

}

export default NavigationPhoneScreen