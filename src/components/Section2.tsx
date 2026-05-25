export default function Section2() {
  return (
    <>
      <footer className="py-10 px-5 sm:px-10 bg-white text-black">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
            <div>
              <img
                alt="経営者のミカタ"
                className="h-[40px] sm:h-[48px] w-auto mb-1"
                src="/img/logo.png"
              />
              <p className="text-[12px] text-[#666]">GIGUUU株式会社</p>
            </div>
            <nav className="flex flex-wrap gap-5">
              <a
                href="#experienced"
                className="text-[12px] text-[#666] no-underline hover:text-black transition-colors"
              >
                経験者の方
              </a>
              <a
                href="#newcomer"
                className="text-[12px] text-[#666] no-underline hover:text-black transition-colors"
              >
                初めての方
              </a>
              <a
                href="#pricing"
                className="text-[12px] text-[#666] no-underline hover:text-black transition-colors"
              >
                料金
              </a>
              <a
                href="#flow"
                className="text-[12px] text-[#666] no-underline hover:text-black transition-colors"
              >
                ご利用の流れ
              </a>
              <a
                href="#contact-form"
                className="text-[12px] text-[#666] no-underline hover:text-black transition-colors"
              >
                お問い合わせ
              </a>
            </nav>
          </div>
          <div className="border-t border-[#e5e5e5] pt-6">
            <p className="text-[10px] text-[#999]">
              © GIGUUU Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 translate-y-0">
        <div className="bg-white/95 backdrop-blur-sm border-t border-[#e5e5e5] px-4 py-2.5 flex gap-2.5">
          <a
            href="#document-request"
            className="flex-1 inline-flex items-center justify-center bg-black text-white text-[12px] font-bold py-3 rounded-[96px] no-underline"
          >
            資料請求
          </a>
          <a
            href="#contact-form"
            className="flex-1 inline-flex items-center justify-center bg-[#1773b4] text-white text-[12px] font-bold py-3 rounded-[96px] no-underline"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </>
  );
}
