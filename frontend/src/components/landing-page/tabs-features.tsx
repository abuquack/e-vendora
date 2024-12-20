function TabsFeatures() {
  type tabsFeaturesType = {
    feat: string;
  };

  const tabsFeatures: tabsFeaturesType[] = [
    {
      feat: 'رائع وجميل',
    },
    {
      feat: 'اكبر المتاجر موجودة عندنا',
    },
    {
      feat: 'التعاون في الوقت الحقيقي',
    },
    {
      feat: 'الحقول المخصصة',
    },
    {
      feat: 'لوحات متعددة',
    },
    {
      feat: 'جداول العمل',
    },
    {
      feat: 'عملات متعددة',
    },
    {
      feat: 'الفواتير المتكررة',
    },
    {
      feat: 'الاستيراد والتصدير',
    },
  ]
  return (
    <div className="flex flex-col lg:w-1/2 lg:justify-center lg:items-center">
      <h1 className="font-bold text-2xl my-5 w-full text-right">خطط وتعاون مع فريقك على متجرك مهما كبر حجمه</h1>
      <div>
        <ul className="flex flex-wrap gap-2">
          {
            tabsFeatures.map((tab, id) => {
              return (
                <li key={id} className="bg-bgGray rounded-lg py-1 px-2 text-font shadow-sm">{tab.feat}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default TabsFeatures