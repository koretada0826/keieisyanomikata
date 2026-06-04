import DiagnosisQuiz from "./DiagnosisQuiz";
import AudioPlayer from "./AudioPlayer";

export default function Section1() {
  return (
      <main>
      <section className="relative bg-white pt-[70px] sm:pt-[76px] lg:pt-[84px] pb-4 sm:pb-6 overflow-hidden">
      <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block" style={{"background": "radial-gradient(700px at 0px 0px, rgba(65, 172, 134, 0.08), transparent 60%)"}}>
      </div>
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{"backgroundImage": "radial-gradient(rgb(0, 0, 0) 1px, transparent 1px)", "backgroundSize": "24px 24px"}}>
      </div>
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full z-0" style={{"background": "radial-gradient(circle, rgba(65, 172, 134, 0.08) 0%, transparent 70%)"}}>
      </div>
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 w-full">
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
      <p className="fade-in inline-flex items-center gap-3 text-[14px] sm:text-[16px] lg:text-[18px] text-[#1773b4] tracking-[0.12em] font-black mb-4 sm:mb-6 visible"><span className="w-10 sm:w-12 h-[2px] bg-[#1773b4] shrink-0"></span><span className="text-center">今年で37期目の業界TOPの<br className="sm:hidden" />営業ノウハウを集約</span><span className="w-10 sm:w-12 h-[2px] bg-[#1773b4] shrink-0"></span>
      </p>
      <h1 className="fade-in mx-auto text-black visible" style={{"fontFamily": "\"M PLUS 1p\", \"Noto Sans JP\", sans-serif", "fontWeight": "900", "lineHeight": "1.25", "letterSpacing": "-0.02em", "fontSize": "clamp(26px, 4.5vw, 52px)"}}>結果が出ない営業代行に<br /><span className="text-[#1773b4]">もう払わなくていい。</span>
      </h1>
      <p className="fade-in mt-5 sm:mt-7 text-black leading-[1.5] visible" style={{"fontFamily": "\"M PLUS 1p\", \"Noto Sans JP\", sans-serif", "fontWeight": "900", "lineHeight": "1.25", "letterSpacing": "-0.02em", "fontSize": "clamp(18px, 3vw, 30px)"}}>月<span className="text-[#1773b4]">8,800コール</span>を仕組みで回す。
      </p>
      <p className="fade-in mt-3 sm:mt-4 text-[14px] sm:text-[22px] lg:text-[26px] font-bold text-[#555] leading-[1.6] whitespace-nowrap visible">営業代行で失敗した人ほど違いが分かります。
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
      <a href="#service-intro" className="fade-in group relative block overflow-hidden transition-all duration-500 bg-white text-black border-2 border-black hover:border-[#1773b4] visible" style={{"transitionDelay": "0s"}}>
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-[0.04]" style={{"backgroundImage": "radial-gradient(circle at 80% 10%, rgb(23, 115, 180) 0%, transparent 50%)"}}>
      </div>
      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#1773b4] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden={true}>
      </div>
      <div className="relative h-full flex flex-col p-5 sm:p-7 lg:p-8">
      <div className="flex items-center gap-3 mb-3 sm:mb-4"><span className="text-[11px] sm:text-[12px] font-black tracking-[0.25em] text-[#1773b4]">NEWCOMER</span><span className="flex-1 h-[1px] bg-black/15"></span><span className="text-[11px] font-black text-black/50">01</span>
      </div>
      <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.05em] mb-2 text-[#666]">初めての方
      </p>
      <h2 className="text-[18px] sm:text-[22px] lg:text-[24px] font-black leading-[1.3] mb-3 whitespace-nowrap" style={{"fontFamily": "\"M PLUS 1p\", \"Noto Sans JP\", sans-serif"}}>そもそも営業代行って何？
      </h2>
      <p className="text-[13px] sm:text-[14px] leading-[1.8] mb-4 text-[#4d4d4d]">人を雇うより安く・多く・全部見える営業代行です。
      </p>
      <ul className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-2 mb-4 sm:mb-5">
      <li className="flex items-center gap-2 text-[15px] sm:text-[13px] font-bold text-black"><span className="inline-block w-[4px] h-[4px] rounded-full bg-[#1773b4] shrink-0"></span>8,800コール保証
      </li>
      <li className="flex items-center gap-2 text-[15px] sm:text-[13px] font-bold text-black"><span className="inline-block w-[4px] h-[4px] rounded-full bg-[#1773b4] shrink-0"></span>営業約2人分
      </li>
      <li className="flex items-center gap-2 text-[15px] sm:text-[13px] font-bold text-black"><span className="inline-block w-[4px] h-[4px] rounded-full bg-[#1773b4] shrink-0"></span>スクリプト込み
      </li>
      </ul>
      <div className="flex items-center justify-between pt-3 border-t border-black/15"><span className="text-[13px] sm:text-[15px] font-black">初めての方向けに見る</span><span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full transition-all duration-300 bg-black text-white group-hover:bg-[#1773b4] group-hover:scale-110"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden={true}><path d="M3 9 H14 M10 5 L14 9 L10 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
      </div>
      </div>
      </a>
      <a href="#pain-points" className="fade-in group relative block overflow-hidden transition-all duration-500 bg-black text-white hover:bg-[#111] visible" style={{"transitionDelay": "0.12s"}}>
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-[0.08]" style={{"backgroundImage": "radial-gradient(circle at 80% 10%, rgb(23, 115, 180) 0%, transparent 50%)"}}>
      </div>
      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#1773b4] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden={true}>
      </div>
      <div className="relative h-full flex flex-col p-5 sm:p-7 lg:p-8">
      <div className="flex items-center gap-3 mb-3 sm:mb-4"><span className="text-[11px] sm:text-[12px] font-black tracking-[0.25em] text-[#1773b4]">EXPERIENCED</span><span className="flex-1 h-[1px] bg-white/20"></span><span className="text-[11px] font-black text-white/50">02</span>
      </div>
      <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.05em] mb-2 text-white/70">利用経験がある方
      </p>
      <h2 className="text-[18px] sm:text-[22px] lg:text-[24px] font-black leading-[1.3] mb-3 whitespace-nowrap" style={{"fontFamily": "\"M PLUS 1p\", \"Noto Sans JP\", sans-serif"}}>「成果ゼロ」で悩んでいませんか
      </h2>
      <p className="text-[13px] sm:text-[14px] leading-[1.8] mb-4 text-white/75">高額・不透明・長期縛り。全部逆に設計しました。
      </p>
      <ul className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-2 mb-4 sm:mb-5">
      <li className="flex items-center gap-2 text-[15px] sm:text-[13px] font-bold text-white/90"><span className="inline-block w-[4px] h-[4px] rounded-full bg-[#1773b4] shrink-0"></span>全ログ開示
      </li>
      <li className="flex items-center gap-2 text-[15px] sm:text-[13px] font-bold text-white/90"><span className="inline-block w-[4px] h-[4px] rounded-full bg-[#1773b4] shrink-0"></span>月額35万円・初期費用0円
      </li>
      <li className="flex items-center gap-2 text-[15px] sm:text-[13px] font-bold text-white/90"><span className="inline-block w-[4px] h-[4px] rounded-full bg-[#1773b4] shrink-0"></span>8,800コール
      </li>
      </ul>
      <div className="flex items-center justify-between pt-3 border-t border-white/15"><span className="text-[13px] sm:text-[15px] font-black">経験者向けに見る</span><span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full transition-all duration-300 bg-[#1773b4] text-white group-hover:scale-110"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden={true}><path d="M3 9 H14 M10 5 L14 9 L10 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
      </div>
      </div>
      </a>
      </div>
      </div>
      </section>
      <section id="experienced" className="pt-2 sm:pt-4 pb-10 sm:pb-14 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
      <div id="service-intro" className="fade-in text-center mb-2 scroll-mt-[80px] visible">
      <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-black text-[#1773b4] leading-[1.3] mb-3">経営者のミカタは
      </p>
      <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-bold text-black leading-[1.6]"><span className="inline-block bg-[#1773b4] text-white px-3 py-1 rounded-[6px] text-[16px] sm:text-[20px] font-bold mr-1">トークツリー設計</span>から<span className="inline-block bg-[#1773b4] text-white px-3 py-1 rounded-[6px] text-[16px] sm:text-[20px] font-bold mx-1">8,800コール実行</span>まで行う
      </p>
      <p className="text-[26px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3] mt-2">「営業代行サービス」
      </p>
      <p className="text-[14px] sm:text-[16px] text-[#888] mt-2">※人で換算すると約2人分<br />（人の場合：200コール/日 × 22日 = 約4,400コール）
      </p>
      </div>
      <section className="bg-white pt-4 pb-10 px-4 overflow-hidden relative"><svg width="0" height="0" aria-hidden={true} style={{"position": "absolute"}}><defs><filter id="knockout-black" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0
      0 1 0 0 0
      0 0 1 0 0
      1 1 1 0 0"></feColorMatrix></filter></defs></svg>
      <div className="max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 lg:gap-4">
      <div className="fade-in fade-up relative w-full max-w-[360px] flex flex-col items-center justify-center visible" style={{"transitionDelay": "0s"}}>
      <div className="relative w-full aspect-square md:aspect-auto md:h-[360px] pointer-events-none"><img alt="Award Wreath" className="w-full h-full object-contain" src="https://telemo-xeb3.onrender.com/images/golden_laurel_award.png" style={{"filter": "url(\"#knockout-black\")"}} />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{"top": "46%", "width": "62%", "height": "58%", "background": "radial-gradient(circle, rgba(255, 251, 238, 0.95) 0%, rgba(255, 248, 228, 0.7) 50%, rgba(255, 248, 228, 0) 78%)"}}>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pb-[18%]">
      <div className="flex items-baseline justify-center leading-none" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif"}}><span className="text-[96px] lg:text-[124px] font-bold tracking-tight text-black" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.85) 0px 2px 10px, rgb(255, 255, 255) 0px 0px 3px"}}>97</span><span className="text-[38px] lg:text-[48px] font-bold ml-1 text-[#1773b4]" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.9) 0px 0px 6px"}}>%</span>
      </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full" style={{"bottom": "27%", "width": "62%", "height": "40px", "background": "radial-gradient(rgba(30, 18, 4, 0.55) 0%, rgba(30, 18, 4, 0.25) 55%, transparent 82%)"}}>
      </div>
      <div className="absolute left-0 right-0 flex justify-center" style={{"bottom": "29%"}}><span className="text-[18px] lg:text-[24px] font-black tracking-[0.1em] text-white" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif", "textShadow": "rgba(0, 0, 0, 0.9) 0px 1px 2px, rgba(0, 0, 0, 0.7) 0px 0px 8px, rgb(0, 0, 0) 0px 0px 1px", "WebkitTextStroke": "0.4px rgba(0, 0, 0, 0.85)"}}>リピート率</span>
      </div>
      </div>
      </div>
      <div className="fade-in fade-up relative w-full max-w-[360px] flex flex-col items-center justify-center visible" style={{"transitionDelay": "0.15s"}}>
      <div className="relative w-full aspect-square md:aspect-auto md:h-[360px] pointer-events-none"><img alt="Award Wreath" className="w-full h-full object-contain" src="https://telemo-xeb3.onrender.com/images/golden_laurel_award.png" style={{"filter": "url(\"#knockout-black\")"}} />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{"top": "46%", "width": "62%", "height": "58%", "background": "radial-gradient(circle, rgba(255, 251, 238, 0.95) 0%, rgba(255, 248, 228, 0.7) 50%, rgba(255, 248, 228, 0) 78%)"}}>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pb-[18%]">
      <div className="flex items-baseline justify-center leading-none" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif"}}><span className="text-[96px] lg:text-[124px] font-bold tracking-tight text-black" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.85) 0px 2px 10px, rgb(255, 255, 255) 0px 0px 3px"}}>15</span><span className="text-[38px] lg:text-[48px] font-bold ml-1 text-[#1773b4]" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.9) 0px 0px 6px"}}>%</span>
      </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full" style={{"bottom": "27%", "width": "62%", "height": "40px", "background": "radial-gradient(rgba(30, 18, 4, 0.55) 0%, rgba(30, 18, 4, 0.25) 55%, transparent 82%)"}}>
      </div>
      <div className="absolute left-0 right-0 flex justify-center" style={{"bottom": "29%"}}><span className="text-[18px] lg:text-[24px] font-black tracking-[0.1em] text-white" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif", "textShadow": "rgba(0, 0, 0, 0.9) 0px 1px 2px, rgba(0, 0, 0, 0.7) 0px 0px 8px, rgb(0, 0, 0) 0px 0px 1px", "WebkitTextStroke": "0.4px rgba(0, 0, 0, 0.85)"}}>最高アポイント率</span>
      </div>
      </div>
      </div>
      <div className="fade-in fade-up relative w-full max-w-[360px] flex flex-col items-center justify-center visible" style={{"transitionDelay": "0.3s"}}>
      <div className="relative w-full aspect-square md:aspect-auto md:h-[360px] pointer-events-none"><img alt="Award Wreath" className="w-full h-full object-contain" src="https://telemo-xeb3.onrender.com/images/golden_laurel_award.png" style={{"filter": "url(\"#knockout-black\")"}} />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{"top": "46%", "width": "62%", "height": "58%", "background": "radial-gradient(circle, rgba(255, 251, 238, 0.95) 0%, rgba(255, 248, 228, 0.7) 50%, rgba(255, 248, 228, 0) 78%)"}}>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pb-[18%]">
      <div className="flex items-baseline justify-center leading-none" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif"}}><span className="text-[96px] lg:text-[124px] font-bold tracking-tight text-black" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.85) 0px 2px 10px, rgb(255, 255, 255) 0px 0px 3px"}}>88</span><span className="text-[38px] lg:text-[48px] font-bold ml-1 text-[#1773b4]" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.9) 0px 0px 6px"}}>%</span>
      </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full" style={{"bottom": "27%", "width": "62%", "height": "40px", "background": "radial-gradient(rgba(30, 18, 4, 0.55) 0%, rgba(30, 18, 4, 0.25) 55%, transparent 82%)"}}>
      </div>
      <div className="absolute left-0 right-0 flex justify-center" style={{"bottom": "29%"}}><span className="text-[18px] lg:text-[24px] font-black tracking-[0.1em] text-white" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif", "textShadow": "rgba(0, 0, 0, 0.9) 0px 1px 2px, rgba(0, 0, 0, 0.7) 0px 0px 8px, rgb(0, 0, 0) 0px 0px 1px", "WebkitTextStroke": "0.4px rgba(0, 0, 0, 0.85)"}}>決裁者商談率</span>
      </div>
      </div>
      </div>
      </div>
      <div className="text-center mt-6 text-[#999] text-xs tracking-widest">※2023年度実績（自社調べに基づく）
      </div>
      </div>
      </section>
      <div className="fade-in max-w-[960px] mx-auto my-14 sm:my-20 bg-white border-2 border-black p-6 sm:p-10 lg:p-12 visible" style={{"boxShadow": "rgb(23, 115, 180) 8px 8px 0px 0px"}}>
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#1773b4] tracking-[0.3em] font-black mb-4"><span className="w-8 h-[2px] bg-[#1773b4]"></span>WHAT IS SALES OUTSOURCING
      </p>
      <h3 className="text-[24px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3] mb-6 sm:mb-8">そもそも、<span className="text-[#1773b4]">営業代行サービス</span>って？
      </h3>
      <p className="text-[15px] sm:text-[18px] lg:text-[20px] text-[#333] leading-[1.95] font-medium mb-5">営業代行とは、<span className="font-black text-black">貴社の代わりに新規開拓の営業活動を行うサービス</span>のことです。
      </p>
      <p className="text-[14px] sm:text-[17px] text-[#333] leading-[1.95] font-medium mb-6 sm:mb-8">ターゲットリストの作成、トークスクリプトの設計、テレアポ・商談打診までを一気通貫で代行。<br className="hidden sm:inline" />「営業人員を雇う余裕はないが、売上は伸ばしたい」企業の <span className="font-black text-[#1773b4]">最短の解</span> として、多くの会社が導入しています。
      </p>
      <div className="pt-5 sm:pt-6 border-t border-[#eee]">
      <p className="text-[14px] sm:text-[17px] lg:text-[18px] font-bold text-[#333] leading-[1.8]">ただし、営業代行なら何でも良いわけではありません。<br className="hidden sm:inline" /><span className="font-black text-black">選び方を間違えると、高額な費用だけ取られて成果が出ないことも。</span>
      </p>
      <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] font-bold text-[#333] leading-[1.8]">次のセクションでは、そんな「失敗する営業代行」の典型例をお見せします。
      </p>
      </div>
      </div>
      <div id="pain-points" className="mb-16 sm:mb-20 scroll-mt-[80px]">
      <div className="fade-in text-center mb-6 visible">
      <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-black leading-[1.3] tracking-[0.02em]">こんな経験<span className="text-[#1773b4]">ありませんか？</span>
      </h2>
      </div>
      <p className="fade-in text-center text-[16px] sm:text-[18px] text-[#4d4d4d] leading-[2] max-w-[760px] mx-auto mb-10 visible">営業代行を使ったことがある方なら、どれか1つは心当たりがあるはず。<br className="hidden sm:inline" />経営者のミカタは、これらすべてを起きないように設計されました。
      </p>
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-0 mb-8 sm:mb-10">
      <div className="fade-in md:col-span-6 md:col-start-1 md:mt-0 visible" style={{"transitionDelay": "0s"}}>
      <div className="relative bg-white border-2 border-black rounded-[16px] p-4 sm:p-5 pt-8 sm:pt-9 shadow-[4px_4px_0_0_#1773b4]"><span className="absolute top-2 right-3 bg-[#1773b4] text-white text-[10px] sm:text-[11px] font-black tracking-[0.2em] px-3 py-1 rounded-full">契約の縛り</span><span className="absolute top-2 left-3 text-[46px] sm:text-[56px] leading-none text-[#1773b4]/20 select-none pointer-events-none" style={{"fontFamily": "\"Noto Serif JP\", serif"}}>“</span>
      <p className="relative pl-5 sm:pl-6 pt-1 text-[15px] sm:text-[20px] lg:text-[22px] text-black leading-[1.75] font-bold whitespace-pre-line tracking-[0.01em] text-balance" style={{"fontFamily": "\"Noto Serif JP\", serif"}}>半年払ってもアポは片手で数えるほど。解約しても請求書だけ届き続けた。
      </p><span className="absolute -bottom-[14px] left-9 w-0 h-0" style={{"borderLeft": "12px solid transparent", "borderRight": "12px solid transparent", "borderTop": "14px solid rgb(0, 0, 0)"}}></span><span className="absolute -bottom-[10px] left-[42px] w-0 h-0" style={{"borderLeft": "8px solid transparent", "borderRight": "8px solid transparent", "borderTop": "10px solid rgb(255, 255, 255)"}}></span>
      </div>
      <div className="flex items-center mt-3 pl-6 justify-start"><span className="text-[16px] sm:text-[18px] lg:text-[19px] font-black text-[#222]">製造業 / 取締役 様</span>
      </div>
      </div>
      <div className="fade-in md:col-span-6 md:col-start-7 md:mt-14 visible" style={{"transitionDelay": "0.08s"}}>
      <div className="relative bg-white border-2 border-black rounded-[16px] p-4 sm:p-5 pt-8 sm:pt-9 shadow-[4px_4px_0_0_#1773b4]"><span className="absolute top-2 right-3 bg-[#1773b4] text-white text-[10px] sm:text-[11px] font-black tracking-[0.2em] px-3 py-1 rounded-full">ブラックボックス</span><span className="absolute top-2 left-3 text-[46px] sm:text-[56px] leading-none text-[#1773b4]/20 select-none pointer-events-none" style={{"fontFamily": "\"Noto Serif JP\", serif"}}>“</span>
      <p className="relative pl-5 sm:pl-6 pt-1 text-[15px] sm:text-[20px] lg:text-[22px] text-black leading-[1.75] font-bold whitespace-pre-line tracking-[0.01em] text-balance" style={{"fontFamily": "\"Noto Serif JP\", serif"}}>月1回のサマリーPDFだけ。
      何を話したか全く見えない。
      </p><span className="absolute -bottom-[14px] right-9 w-0 h-0" style={{"borderLeft": "12px solid transparent", "borderRight": "12px solid transparent", "borderTop": "14px solid rgb(0, 0, 0)"}}></span><span className="absolute -bottom-[10px] right-[42px] w-0 h-0" style={{"borderLeft": "8px solid transparent", "borderRight": "8px solid transparent", "borderTop": "10px solid rgb(255, 255, 255)"}}></span>
      </div>
      <div className="flex items-center mt-3 pr-6 justify-end"><span className="text-[16px] sm:text-[18px] lg:text-[19px] font-black text-[#222]">IT / マーケ責任者 様</span>
      </div>
      </div>
      <div className="fade-in md:col-span-6 md:col-start-1 md:-mt-4 visible" style={{"transitionDelay": "0.16s"}}>
      <div className="relative bg-white border-2 border-black rounded-[16px] p-4 sm:p-5 pt-8 sm:pt-9 shadow-[4px_4px_0_0_#1773b4]"><span className="absolute top-2 right-3 bg-[#1773b4] text-white text-[10px] sm:text-[11px] font-black tracking-[0.2em] px-3 py-1 rounded-full">ブランド毀損</span><span className="absolute top-2 left-3 text-[46px] sm:text-[56px] leading-none text-[#1773b4]/20 select-none pointer-events-none" style={{"fontFamily": "\"Noto Serif JP\", serif"}}>“</span>
      <p className="relative pl-5 sm:pl-6 pt-1 text-[15px] sm:text-[20px] lg:text-[22px] text-black leading-[1.75] font-bold whitespace-pre-line tracking-[0.01em] text-balance" style={{"fontFamily": "\"Noto Serif JP\", serif"}}>後から録音を聞いて愕然。
      粘る強引トークを、うちの名前で。
      </p><span className="absolute -bottom-[14px] left-9 w-0 h-0" style={{"borderLeft": "12px solid transparent", "borderRight": "12px solid transparent", "borderTop": "14px solid rgb(0, 0, 0)"}}></span><span className="absolute -bottom-[10px] left-[42px] w-0 h-0" style={{"borderLeft": "8px solid transparent", "borderRight": "8px solid transparent", "borderTop": "10px solid rgb(255, 255, 255)"}}></span>
      </div>
      <div className="flex items-center mt-3 pl-6 justify-start"><span className="text-[16px] sm:text-[18px] lg:text-[19px] font-black text-[#222]">SaaS / 事業責任者 様</span>
      </div>
      </div>
      <div className="fade-in md:col-span-6 md:col-start-7 md:mt-10 visible" style={{"transitionDelay": "0.24s"}}>
      <div className="relative bg-white border-2 border-black rounded-[16px] p-4 sm:p-5 pt-8 sm:pt-9 shadow-[4px_4px_0_0_#1773b4]"><span className="absolute top-2 right-3 bg-[#1773b4] text-white text-[10px] sm:text-[11px] font-black tracking-[0.2em] px-3 py-1 rounded-full">営業知見ゼロ</span><span className="absolute top-2 left-3 text-[46px] sm:text-[56px] leading-none text-[#1773b4]/20 select-none pointer-events-none" style={{"fontFamily": "\"Noto Serif JP\", serif"}}>“</span>
      <p className="relative pl-5 sm:pl-6 pt-1 text-[15px] sm:text-[20px] lg:text-[22px] text-black leading-[1.75] font-bold whitespace-pre-line tracking-[0.01em] text-balance" style={{"fontFamily": "\"Noto Serif JP\", serif"}}>AI営業を使ってみたら、
      作ったのは営業素人のエンジニア。
      </p><span className="absolute -bottom-[14px] right-9 w-0 h-0" style={{"borderLeft": "12px solid transparent", "borderRight": "12px solid transparent", "borderTop": "14px solid rgb(0, 0, 0)"}}></span><span className="absolute -bottom-[10px] right-[42px] w-0 h-0" style={{"borderLeft": "8px solid transparent", "borderRight": "8px solid transparent", "borderTop": "10px solid rgb(255, 255, 255)"}}></span>
      </div>
      <div className="flex items-center mt-3 pr-6 justify-end"><span className="text-[16px] sm:text-[18px] lg:text-[19px] font-black text-[#222]">スタートアップ / 代表 様</span>
      </div>
      </div>
      </div>
      <div className="fade-in relative text-center mt-12 sm:mt-16 mb-10 sm:mb-14 pt-10 sm:pt-14 pb-4 sm:pb-6 visible"><span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[80px] sm:text-[140px] lg:text-[180px] font-black leading-none tracking-[-0.02em] text-[#1773b4]/5 select-none overflow-hidden" aria-hidden={true} style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>ANSWER</span>
      <div className="relative">
      <p className="inline-flex items-center gap-3 text-[12px] sm:text-[14px] text-[#1773b4] tracking-[0.3em] font-black mb-4"><span className="w-8 h-[2px] bg-[#1773b4]"></span>経営者のミカタ ANSWER<span className="w-8 h-[2px] bg-[#1773b4]"></span>
      </p>
      <h3 className="text-[30px] sm:text-[44px] lg:text-[56px] font-black leading-[1.2] tracking-[-0.01em]"><span className="text-[#1773b4]">私たちはこうします</span>
      </h3>
      <p className="mt-4 sm:mt-5 text-[14px] sm:text-[18px] text-[#555] font-bold">「よくある話」を、経営者のミカタは<br className="sm:hidden" /><span className="text-[#1773b4] font-black">起きない仕組みにした</span>のです。
      </p>
      </div>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
      <div className="fade-in flex items-center gap-4 sm:gap-6 bg-white border-2 border-black p-4 sm:p-6 visible" style={{"transitionDelay": "0s", "boxShadow": "rgb(23, 115, 180) 6px 6px 0px 0px"}}><span className="shrink-0 inline-flex w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#1773b4] items-center justify-center text-white text-[16px] sm:text-[20px] font-black">01</span>
      <div className="flex-1 min-w-0">
      <p className="text-[11px] sm:text-[12px] font-black text-[#1773b4] tracking-[0.2em] mb-1">契約の縛り
      </p>
      <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.45]"><span>契約は6ヶ月・自動更新。<br className="sm:hidden" /></span><span>合理的なPDCA設計。</span>
      </p>
      </div>
      <div className="hidden md:flex shrink-0 flex-col gap-1 pl-6 border-l border-[#eee] min-w-[180px]"><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>6ヶ月契約</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>自動更新</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>解約料ゼロ</span>
      </div>
      </div>
      <div className="fade-in flex items-center gap-4 sm:gap-6 bg-white border-2 border-black p-4 sm:p-6 visible" style={{"transitionDelay": "0.06s", "boxShadow": "rgb(23, 115, 180) 6px 6px 0px 0px"}}><span className="shrink-0 inline-flex w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#1773b4] items-center justify-center text-white text-[16px] sm:text-[20px] font-black">02</span>
      <div className="flex-1 min-w-0">
      <p className="text-[11px] sm:text-[12px] font-black text-[#1773b4] tracking-[0.2em] mb-1">ブラックボックス
      </p>
      <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.45]"><span>全録音を100%開示。<br className="sm:hidden" /></span><span>誰に何を話したか即確認可。</span>
      </p>
      </div>
      <div className="hidden md:flex shrink-0 flex-col gap-1 pl-6 border-l border-[#eee] min-w-[180px]"><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>全録音開示</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>コール一覧</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>ダッシュボード</span>
      </div>
      </div>
      <div className="fade-in flex items-center gap-4 sm:gap-6 bg-white border-2 border-black p-4 sm:p-6 visible" style={{"transitionDelay": "0.12s", "boxShadow": "rgb(23, 115, 180) 6px 6px 0px 0px"}}><span className="shrink-0 inline-flex w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#1773b4] items-center justify-center text-white text-[16px] sm:text-[20px] font-black">03</span>
      <div className="flex-1 min-w-0">
      <p className="text-[11px] sm:text-[12px] font-black text-[#1773b4] tracking-[0.2em] mb-1">ブランド毀損
      </p>
      <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.45]"><span>15年のプロがスクリプト設計。<br className="sm:hidden" /></span><span>毎日の録音で品質管理。</span>
      </p>
      </div>
      <div className="hidden md:flex shrink-0 flex-col gap-1 pl-6 border-l border-[#eee] min-w-[180px]"><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>プロ設計</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>毎日レビュー</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>ブランド保全</span>
      </div>
      </div>
      <div className="fade-in flex items-center gap-4 sm:gap-6 bg-white border-2 border-black p-4 sm:p-6 visible" style={{"transitionDelay": "0.18s", "boxShadow": "rgb(23, 115, 180) 6px 6px 0px 0px"}}><span className="shrink-0 inline-flex w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#1773b4] items-center justify-center text-white text-[16px] sm:text-[20px] font-black">04</span>
      <div className="flex-1 min-w-0">
      <p className="text-[11px] sm:text-[12px] font-black text-[#1773b4] tracking-[0.2em] mb-1">営業知見ゼロ
      </p>
      <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.45]"><span>15年のプロが設計から実行。<br className="sm:hidden" /></span><span>現場を知る人間が動かす。</span>
      </p>
      </div>
      <div className="hidden md:flex shrink-0 flex-col gap-1 pl-6 border-l border-[#eee] min-w-[180px]"><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>プロが運営</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>15年の現場経験</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#1773b4]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>人による実行</span>
      </div>
      </div>
      </div>
      <div className="fade-in mt-14 sm:mt-20 bg-white text-black overflow-hidden relative border border-[#eee] visible">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{"background": "radial-gradient(circle at 85% 20%, rgb(23, 115, 180) 0%, transparent 50%)"}}>
      </div>
      <div className="relative p-6 sm:p-10 lg:p-14">
      <div className="text-center mb-5 sm:mb-10">
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#1773b4] tracking-[0.3em] font-black mb-3"><span className="w-8 h-[2px] bg-[#1773b4]"></span>HUMAN × AI<span className="w-8 h-[2px] bg-[#1773b4]"></span>
      </p>
      <h3 className="text-[24px] sm:text-[36px] lg:text-[46px] font-black leading-[1.25] tracking-[-0.01em] text-black">営業歴<span className="text-[#1773b4]">15年</span>のプロが、<br className="hidden sm:inline" /><span className="text-[#1773b4]">AI</span>と融合したらどうなるか。
      </h3>
      <p className="mt-4 sm:mt-5 text-[14px] sm:text-[17px] text-[#555] leading-[1.8] max-w-[720px] mx-auto">プロの現場知見で設計し、AIで実行量・データ・品質を底上げ。<br className="hidden sm:inline" />「人がやる営業」の限界を、経営者のミカタはひとつずつ外しました。
      </p>
      </div>
      <div className="overflow-hidden border border-[#e5e5e5]">
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch bg-[#fafafa] border-b border-[#e5e5e5]">
      <div className="px-3 sm:px-6 py-2 sm:py-5 text-[#999] text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase flex items-center justify-center">Item
      </div>
      <div className="px-3 sm:px-6 py-2 sm:py-5 text-center border-l border-[#e5e5e5] bg-white">
      <p className="text-[9px] sm:text-[11px] tracking-[0.2em] font-bold text-[#bbb] mb-0.5 sm:mb-1">HUMAN
      </p>
      <p className="text-[13px] sm:text-[18px] lg:text-[20px] font-black text-[#555]">人の営業
      </p>
      </div>
      <div className="px-3 sm:px-6 py-2 sm:py-5 text-center bg-[#1773b4] border-l border-[#1773b4]">
      <p className="text-[9px] sm:text-[11px] tracking-[0.2em] font-bold text-white/80 mb-0.5 sm:mb-1">経営者のミカタ
      </p>
      <p className="text-[14px] sm:text-[20px] lg:text-[22px] font-black text-white">プロ × AI
      </p>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch border-b border-[#eee]">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">稼働時間</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">平日8時間</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfe4f3] bg-[#eaf3fa] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#1773b4]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#1773b4] leading-[1.3]">24時間365日稼働</span>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch border-b border-[#eee]">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">コール量</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">月500〜1,000件</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfe4f3] bg-[#eaf3fa] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#1773b4]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#1773b4] leading-[1.3]">月8,800コール（約2人分）</span>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch border-b border-[#eee]">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">通話ログ</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">担当メモのみ</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfe4f3] bg-[#eaf3fa] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#1773b4]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#1773b4] leading-[1.3]">全通話を100%記録</span>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch border-b border-[#eee]">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">会話分析</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">担当の感覚</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfe4f3] bg-[#eaf3fa] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#1773b4]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#1773b4] leading-[1.3]">AIが数値で検出</span>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch border-b border-[#eee]">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">改善サイクル</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">個人の経験則</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfe4f3] bg-[#eaf3fa] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#1773b4]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#1773b4] leading-[1.3]">全データから自動学習</span>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch ">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">品質のムラ</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">体調・気分で変動</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfe4f3] bg-[#eaf3fa] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#1773b4]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#1773b4] leading-[1.3]">常に一定・再現性あり</span>
      </div>
      </div>
      </div>
      <p className="mt-10 sm:mt-14 text-center text-[22px] sm:text-[32px] lg:text-[40px] font-black leading-[1.4] tracking-[-0.01em]"><span className="text-black">営業のプロ</span><span className="inline-block mx-2 sm:mx-3 text-[#1773b4]">×</span><span className="text-black">AIの実行力</span><br className="sm:hidden" /><span className="inline-block mx-2 sm:mx-3 text-[#1773b4]">＝</span><span className="text-[#1773b4]">経営者のミカタ</span>
      </p>
      </div>
      </div>
      <div className="fade-in mt-12 sm:mt-16 bg-[#eaf3fa] border-l-[6px] border-[#1773b4] p-6 sm:p-10 lg:p-12 visible">
      <p className="inline-flex items-center gap-2 text-[11px] sm:text-[13px] text-[#1773b4] tracking-[0.3em] font-black mb-4"><span className="w-6 h-[2px] bg-[#1773b4]"></span>VS. OTHER AI SALES
      </p>
      <h4 className="text-[22px] sm:text-[30px] lg:text-[38px] font-black text-black leading-[1.3] mb-8">他のAI営業代行と<span className="text-[#1773b4]">一緒にしないでください</span>
      </h4>
      <div className="mb-7 sm:mb-9">
      <p className="text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">一般的なAI営業は、<span className="font-black text-black">エンジニアが作っている</span>。<br className="sm:hidden" />技術は優れていても、<span className="font-black text-black">営業を知らない</span>。
      </p>
      <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">どれだけ精度が高くても、「何を話すか」「どこで引くか」「どう刺すか」—— この判断こそが<span className="font-black text-[#1773b4]">営業の急所</span>。
      </p>
      <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">営業を知らない人間が設計した仕組みでは、結局<span className="font-black">成果に繋がらない</span>のです。
      </p>
      </div>
      <div className="flex items-center gap-3 my-6 sm:my-8"><span className="h-[2px] flex-1 bg-[#1773b4]/30"></span><span className="text-[11px] sm:text-[12px] font-black text-[#1773b4] tracking-[0.3em]">経営者のミカタ</span><span className="h-[2px] flex-1 bg-[#1773b4]/30"></span>
      </div>
      <div className="mb-7 sm:mb-9">
      <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-black text-black leading-[1.7] mb-3">経営者のミカタは、違います。
      </p>
      <p className="text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium"><span className="font-black text-black">15年以上の営業実績を持つチームが、現場ベースでトーク設計</span>しています。
      </p>
      <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">現場で鍛え上げたトークツリー・KPI・改善ロジックに、AIの実行力と分析力を乗せる。<br />月間8,800コール——人で換算すると約2人分。
      </p>
      <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">「人が設計し、AIが動かし、人が磨く」—— この順番でしか、売れる営業は再現できません。
      </p>
      </div>
      <div className="pt-5 sm:pt-6 border-t-2 border-[#1773b4]/30">
      <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.6]">他のAI営業代行と、<span className="text-[#1773b4]">経営者のミカタを同じ土俵で比べないでください。</span>
      </p>
      <p className="mt-2 text-[13px] sm:text-[16px] text-[#555] font-bold">設計の起点が、そもそも違います。
      </p>
      </div>
      </div>
      <div className="fade-in mt-12 sm:mt-16 bg-white border-2 border-black p-6 sm:p-10 lg:p-12 visible" style={{"boxShadow": "rgb(23, 115, 180) 8px 8px 0px 0px"}}>
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#1773b4] tracking-[0.3em] font-black mb-4"><span className="w-8 h-[2px] bg-[#1773b4]"></span>TALK TREE DESIGN
      </p>
      <h4 className="text-[22px] sm:text-[30px] lg:text-[38px] font-black text-black leading-[1.3] mb-6 sm:mb-8">この仕組みの肝は「<span className="text-[#1773b4]">トークツリーの設計</span>」にすべてある
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
      <div className="flex gap-4 items-start"><span className="shrink-0 inline-flex w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#1773b4] items-center justify-center text-white text-[14px] sm:text-[16px] font-black">01</span>
      <div>
      <p className="text-[16px] sm:text-[20px] font-black text-black mb-1">設計思想
      </p>
      <p className="text-[14px] sm:text-[17px] text-[#333] leading-[1.9] font-medium">営業のプロレベルの<span className="font-black text-black">"無駄のない会話構成"</span>を再現。<br />余計な前置き・曖昧な質問は一切排除しています。
      </p>
      </div>
      </div>
      <div className="flex gap-4 items-start"><span className="shrink-0 inline-flex w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full bg-[#1773b4] items-center justify-center text-white text-[14px] sm:text-[16px] font-black">02</span>
      <div>
      <p className="text-[16px] sm:text-[20px] font-black text-black mb-1">話し方
      </p>
      <p className="text-[14px] sm:text-[17px] text-[#333] leading-[1.9] font-medium">トップ営業マンの<span className="font-black text-black">"間・語尾・テンション"</span>を徹底研究。<br />機械的ではない、自然で説得力のある会話を実現します。
      </p>
      </div>
      </div>
      </div>
      <div className="pt-5 sm:pt-6 border-t border-[#eee]">
      <p className="text-[18px] sm:text-[24px] lg:text-[30px] font-black text-black leading-[1.6]">誰でも成果に近づく会話を<span className="text-[#1773b4]">仕組み化</span>しました。
      </p>
      </div>
      </div>
      <div className="fade-in mt-12 sm:mt-16 visible">
      <div className="text-center mb-8 sm:mb-10">
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#1773b4] tracking-[0.3em] font-black mb-3"><span className="w-8 h-[2px] bg-[#1773b4]"></span>WHY IT WORKS<span className="w-8 h-[2px] bg-[#1773b4]"></span>
      </p>
      <h4 className="text-[24px] sm:text-[36px] lg:text-[42px] font-black text-black leading-[1.3]">営業の本質だけを<span className="text-[#1773b4]">抽出した設計</span>
      </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex gap-4 items-center bg-white border-2 border-black py-5 pr-5 pl-5 sm:py-6 sm:pr-6 sm:pl-20" style={{"boxShadow": "rgb(23, 115, 180) 4px 4px 0px 0px", "transitionDelay": "0s"}}><span className="shrink-0 inline-flex w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full bg-black items-center justify-center text-[#1773b4] text-[15px] sm:text-[17px] font-black">01</span>
      <div className="flex-1 text-center">
      <p className="text-[19px] sm:text-[24px] font-black text-black mb-2">余計な会話は一切しない
      </p>
      <p className="sm:hidden text-[15px] text-[#4d4d4d] leading-[1.8]"><span>無駄な雑談・説明はゼロ<br /></span><span>必要な話だけを最短で</span>
      </p>
      <p className="hidden sm:block text-[18px] text-[#4d4d4d] leading-[1.8]"><span>目的のない雑談・回りくどい説明はゼロ。<br /></span><span>必要な情報だけを、必要な順番で。</span>
      </p>
      </div>
      </div>
      <div className="flex gap-4 items-center bg-white border-2 border-black py-5 pr-5 pl-5 sm:py-6 sm:pr-6 sm:pl-20" style={{"boxShadow": "rgb(23, 115, 180) 4px 4px 0px 0px", "transitionDelay": "0.06s"}}><span className="shrink-0 inline-flex w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full bg-black items-center justify-center text-[#1773b4] text-[15px] sm:text-[17px] font-black">02</span>
      <div className="flex-1 text-center">
      <p className="text-[19px] sm:text-[24px] font-black text-black mb-2">YESを取るための流れ
      </p>
      <p className="sm:hidden text-[15px] text-[#4d4d4d] leading-[1.8]"><span>YESを取る質問設計<br /></span><span>小さなYESを積み重ねる</span>
      </p>
      <p className="hidden sm:block text-[18px] text-[#4d4d4d] leading-[1.8]"><span>相手が「はい」と言いやすい質問設計。<br /></span><span>小さなYESを積み重ねて商談へ導きます。</span>
      </p>
      </div>
      </div>
      <div className="flex gap-4 items-center bg-white border-2 border-black py-5 pr-5 pl-5 sm:py-6 sm:pr-6 sm:pl-20" style={{"boxShadow": "rgb(23, 115, 180) 4px 4px 0px 0px", "transitionDelay": "0.12s"}}><span className="shrink-0 inline-flex w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full bg-black items-center justify-center text-[#1773b4] text-[15px] sm:text-[17px] font-black">03</span>
      <div className="flex-1 text-center">
      <p className="text-[19px] sm:text-[24px] font-black text-black mb-2">温度感の見極め
      </p>
      <p className="sm:hidden text-[15px] text-[#4d4d4d] leading-[1.8]"><span>反応から興味度を即判定<br /></span><span>見込み先にだけ集中</span>
      </p>
      <p className="hidden sm:block text-[18px] text-[#4d4d4d] leading-[1.8]"><span>相手の反応から興味度を即座に判定。<br /></span><span>見込みのある先だけにリソースを集中。</span>
      </p>
      </div>
      </div>
      <div className="flex gap-4 items-center bg-white border-2 border-black py-5 pr-5 pl-5 sm:py-6 sm:pr-6 sm:pl-20" style={{"boxShadow": "rgb(23, 115, 180) 4px 4px 0px 0px", "transitionDelay": "0.18s"}}><span className="shrink-0 inline-flex w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full bg-black items-center justify-center text-[#1773b4] text-[15px] sm:text-[17px] font-black">04</span>
      <div className="flex-1 text-center">
      <p className="text-[19px] sm:text-[24px] font-black text-black mb-2">トスまでの最短導線
      </p>
      <p className="sm:hidden text-[15px] text-[#4d4d4d] leading-[1.8]"><span>無駄な工程は排除<br /></span><span>最短で商談の場へ</span>
      </p>
      <p className="hidden sm:block text-[18px] text-[#4d4d4d] leading-[1.8]"><span>アポイント獲得までの無駄なステップを排除。<br /></span><span>最短ルートで商談の場を作ります。</span>
      </p>
      </div>
      </div>
      </div>
      </div>
      <div className="fade-in mt-10 sm:mt-14 text-center visible">
      <p className="text-[18px] sm:text-[26px] lg:text-[32px] font-black text-black leading-[1.4]">「<span className="text-[#1773b4]">払ったのに成果ゼロ</span>」も、<br />「<span className="text-[#1773b4]">何してるかわからない</span>」も、<br />経営者のミカタでは、<span className="text-[#1773b4]">起きません。</span>
      </p>
      </div>
      </div>
      </div>
      </section>
      <section id="demo-voice" className="pt-2 sm:pt-4 pb-12 sm:pb-16 px-5 sm:px-10 bg-white scroll-mt-[80px]">
      <div className="max-w-[680px] mx-auto">
      <div className="fade-in text-center mb-5 sm:mb-6 visible">
      <p className="text-[12px] text-[#1773b4] tracking-[0.2em] font-bold mb-2">DEMO VOICE</p>
      <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-black text-black leading-[1.3] tracking-[0.02em] mb-2">実際のコール音声はこんな感じです</h2>
      <p className="text-[14px] sm:text-[16px] text-[#4d4d4d] leading-[1.8]">設計したトークツリーをもとにした、実際の受注コールの一部です。<br className="hidden sm:block" />ぜひ再生してお聴きください。</p>
      </div>
      <div className="fade-in visible">
      <AudioPlayer src="/demo-call.m4a" />
      </div>
      </div>
      </section>
      <section id="newcomer" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1240px] mx-auto">
      <p className="fade-in text-[12px] text-[#1773b4] tracking-[0.15em] font-bold mb-3 visible">営業代行を使ったことがない方へ
      </p>
      <h2 className="fade-in font-black text-black leading-[1.3] tracking-[0.02em] mb-10 whitespace-nowrap visible" style={{"fontSize": "clamp(22px, 6.2vw, 44px)"}}>営業の課題、<span className="text-[#1773b4]">こう解決</span>します
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-14">
      <div className="fade-in relative bg-white rounded-[16px] border border-[#e8e8e8] p-6 sm:p-7 overflow-hidden flex flex-col visible" style={{"transitionDelay": "0s"}}><span className="absolute top-5 right-5 z-10 text-[10px] font-black text-white bg-black tracking-[0.25em] px-2.5 py-[4px]">コスト</span>
      <div className="relative mb-5 leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span className="block text-[32px] sm:text-[38px] font-black tracking-[0.02em] text-transparent" style={{"WebkitTextStroke": "1.5px rgb(17, 17, 17)"}}>STEP</span>
      <div className="flex items-end gap-2 -mt-1"><span className="text-[96px] sm:text-[120px] font-black leading-[0.85] text-[#1773b4]">01</span><span className="block w-[10px] h-[60px] sm:h-[72px] bg-black -skew-x-[20deg] mb-3"></span><span className="block w-[4px] h-[60px] sm:h-[72px] bg-[#1773b4] -skew-x-[20deg] mb-3"></span>
      </div>
      <div className="flex items-center gap-2 mt-2"><span className="h-[3px] flex-1 bg-black"></span><span className="h-[3px] w-[20%] bg-[#1773b4]"></span>
      </div>
      </div>
      <h3 className="relative text-[22px] sm:text-[26px] lg:text-[28px] font-black text-black leading-[1.3] mb-4 whitespace-normal sm:whitespace-pre-line">人件費の実態を
      知っていますか
      </h3>
      <p className="relative text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.9] mb-5 flex-1">給与だけじゃない。社会保険（約15%）・交通費（約1万円/月）・残業/有給（約10%増）・教育コスト・管理コスト。そして最大のリスクは離職。採用→教育→戦力化→離職→再採用のループ。
      </p>
      <div className="relative border-t border-[#eee] pt-4">
      <div className="flex items-baseline gap-2 mb-1"><span className="text-[11px] text-[#999] font-bold tracking-[0.1em]">隠れコスト合計</span>
      </div>
      <p className="text-[26px] sm:text-[30px] font-black text-[#1773b4] leading-none mb-1" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>月50万〜
      </p>
      <p className="text-[11px] text-[#888] leading-[1.6]">給与+社保+交通費+教育+管理+離職リスク
      </p>
      </div>
      </div>
      <div className="fade-in relative bg-white rounded-[16px] border border-[#e8e8e8] p-6 sm:p-7 overflow-hidden flex flex-col visible" style={{"transitionDelay": "0.1s"}}><span className="absolute top-5 right-5 z-10 text-[10px] font-black text-white bg-black tracking-[0.25em] px-2.5 py-[4px]">経営者のミカタ</span>
      <div className="relative mb-5 leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span className="block text-[32px] sm:text-[38px] font-black tracking-[0.02em] text-transparent" style={{"WebkitTextStroke": "1.5px rgb(17, 17, 17)"}}>STEP</span>
      <div className="flex items-end gap-2 -mt-1"><span className="text-[96px] sm:text-[120px] font-black leading-[0.85] text-[#1773b4]">02</span><span className="block w-[10px] h-[60px] sm:h-[72px] bg-black -skew-x-[20deg] mb-3"></span><span className="block w-[4px] h-[60px] sm:h-[72px] bg-[#1773b4] -skew-x-[20deg] mb-3"></span>
      </div>
      <div className="flex items-center gap-2 mt-2"><span className="h-[3px] flex-1 bg-black"></span><span className="h-[3px] w-[20%] bg-[#1773b4]"></span>
      </div>
      </div>
      <h3 className="relative text-[22px] sm:text-[26px] lg:text-[28px] font-black text-black leading-[1.3] mb-4 whitespace-normal sm:whitespace-pre-line">離職なし
      感情ブレなし
      </h3>
      <p className="relative text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.9] mb-5 flex-1">離職なし・教育不要・感情ブレなし・パフォーマンス一定。止まらず、忠実に、∞に稼働し続けます。月間8,800コール、人で換算すると約2人分。
      </p>
      <div className="relative border-t border-[#eee] pt-4">
      <div className="flex items-baseline gap-2 mb-1"><span className="text-[11px] text-[#999] font-bold tracking-[0.1em]">経営者のミカタの稼働量</span>
      </div>
      <p className="text-[26px] sm:text-[30px] font-black text-[#1773b4] leading-none mb-1" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>8,800コール/月
      </p>
      <p className="text-[11px] text-[#888] leading-[1.6]">※人の場合：200コール/日 × 22日 = 約4,400コール
      </p>
      </div>
      </div>
      <div className="fade-in relative bg-white rounded-[16px] border border-[#e8e8e8] p-6 sm:p-7 overflow-hidden flex flex-col visible" style={{"transitionDelay": "0.2s"}}><span className="absolute top-5 right-5 z-10 text-[10px] font-black text-white bg-black tracking-[0.25em] px-2.5 py-[4px]">集中</span>
      <div className="relative mb-5 leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span className="block text-[32px] sm:text-[38px] font-black tracking-[0.02em] text-transparent" style={{"WebkitTextStroke": "1.5px rgb(17, 17, 17)"}}>STEP</span>
      <div className="flex items-end gap-2 -mt-1"><span className="text-[96px] sm:text-[120px] font-black leading-[0.85] text-[#1773b4]">03</span><span className="block w-[10px] h-[60px] sm:h-[72px] bg-black -skew-x-[20deg] mb-3"></span><span className="block w-[4px] h-[60px] sm:h-[72px] bg-[#1773b4] -skew-x-[20deg] mb-3"></span>
      </div>
      <div className="flex items-center gap-2 mt-2"><span className="h-[3px] flex-1 bg-black"></span><span className="h-[3px] w-[20%] bg-[#1773b4]"></span>
      </div>
      </div>
      <h3 className="relative text-[22px] sm:text-[26px] lg:text-[28px] font-black text-black leading-[1.3] mb-4 whitespace-normal sm:whitespace-pre-line">本業に
      集中できる
      </h3>
      <p className="relative text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.9] mb-5 flex-1">新規開拓をプロに任せれば、自社は商品開発や顧客フォローなどコア業務に専念できます。
      </p>
      <div className="relative border-t border-[#eee] pt-4">
      <div className="flex items-baseline gap-2 mb-1"><span className="text-[11px] text-[#999] font-bold tracking-[0.1em]">営業工数</span>
      </div>
      <p className="text-[26px] sm:text-[30px] font-black text-[#1773b4] leading-none mb-1" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>実質 0
      </p>
      <p className="text-[11px] text-[#888] leading-[1.6]">自社の強みに時間を使える
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in text-center mt-4 visible">
      <a href="#contact-form" className="btn-accent text-center text-[14px]">まずは10〜15分だけ話しましょう
      </a>
      </div>
      </div>
      </section>
      <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
      <div className="fade-in text-center mb-10 sm:mb-14 visible">
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#1773b4] tracking-[0.3em] font-black mb-3"><span className="w-8 h-[2px] bg-[#1773b4]"></span>PERFORMANCE DATA<span className="w-8 h-[2px] bg-[#1773b4]"></span>
      </p>
      <h2 className="text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4">机上の空論では<span className="text-[#1773b4]">ありません</span>
      </h2>
      <p className="text-[15px] sm:text-[17px] text-[#555] leading-[1.8] max-w-[680px] mx-auto">実際の稼働データを公開します。<br />誇張なし。<br className="sm:hidden" />日次実績に基づく数値のみ。
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
      <div className="fade-in relative bg-white border-2 border-black overflow-hidden visible" style={{"boxShadow": "rgb(23, 115, 180) 6px 6px 0px 0px", "transitionDelay": "0s"}}>
      <div className="bg-black px-5 py-4 flex items-center justify-between"><span className="text-[18px] sm:text-[20px] font-black text-white">法人回線</span><span className="text-[10px] font-black text-[#1773b4] tracking-[0.2em] bg-[#1773b4]/15 px-2.5 py-1 rounded-full">BtoB</span>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">受注率</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#1773b4] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>0.6</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">%</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">日次成約</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#1773b4] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>0.96</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">件</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">売上見込</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#1773b4] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>7</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">万円/日</span>
      </div>
      </div>
      </div>
      </div>
      <div className="fade-in relative bg-white border-2 border-black overflow-hidden visible" style={{"boxShadow": "rgb(23, 115, 180) 6px 6px 0px 0px", "transitionDelay": "0.1s"}}>
      <div className="bg-black px-5 py-4 flex items-center justify-between"><span className="text-[18px] sm:text-[20px] font-black text-white">法人でんき</span><span className="text-[10px] font-black text-[#1773b4] tracking-[0.2em] bg-[#1773b4]/15 px-2.5 py-1 rounded-full">BtoB</span>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">受注率</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#1773b4] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>0.5</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">%</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">日次成約</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#1773b4] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>0.72</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">件</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">売上見込</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#1773b4] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>6</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">万円/日</span>
      </div>
      </div>
      </div>
      </div>
      <div className="fade-in relative bg-white border-2 border-black overflow-hidden visible" style={{"boxShadow": "rgb(23, 115, 180) 6px 6px 0px 0px", "transitionDelay": "0.2s"}}>
      <div className="bg-black px-5 py-4 flex items-center justify-between"><span className="text-[18px] sm:text-[20px] font-black text-white">個人中古車</span><span className="text-[10px] font-black text-[#1773b4] tracking-[0.2em] bg-[#1773b4]/15 px-2.5 py-1 rounded-full">BtoC</span>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">月間審査</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#1773b4] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>5</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">件</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">月間通過</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#1773b4] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>1</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">件</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">粗利</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#1773b4] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>75</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">万円/件</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="fade-in text-center bg-[#eaf3fa] border-l-[6px] border-[#1773b4] py-6 sm:py-8 px-6 sm:px-10 visible">
      <p className="text-[22px] sm:text-[30px] lg:text-[36px] font-black text-black leading-[1.4]">業種を選ばない<span className="text-[#1773b4]">再現性</span>。<br />営業は<span className="text-[#1773b4]">「確率」</span>で作れる。
      </p>
      <p className="mt-4 text-[16px] sm:text-[19px] text-[#555] font-bold">コール数（母数）× 有効率（接触）× 受注率（可能性）＝ 売上
      </p>
      </div>
      <p className="text-[12px] text-[#999] mt-4 text-center">※ 特定企業情報は非開示。日次実績に基づく数値のみ提示。
      </p>
      </div>
      </section>
      <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1240px] mx-auto">
      <div className="fade-in text-center mb-10 sm:mb-14 visible">
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#1773b4] tracking-[0.3em] font-black mb-3"><span className="w-8 h-[2px] bg-[#1773b4]"></span>COST COMPARISON<span className="w-8 h-[2px] bg-[#1773b4]"></span>
      </p>
      <h2 className="text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4">採用<span className="text-[#1773b4]">1人分</span>の予算で<br className="hidden sm:inline" />リスクゼロの営業力を。
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
      <div className="fade-in bg-white border border-[#e5e5e5] overflow-hidden visible">
      <div className="bg-[#fafafa] px-6 py-5 border-b border-[#e5e5e5] text-center">
      <p className="text-[10px] tracking-[0.2em] font-bold text-[#bbb] mb-1">HUMAN
      </p>
      <p className="text-[20px] sm:text-[24px] font-black text-[#555]">人の採用（新卒）
      </p>
      </div>
      <div className="p-5 sm:p-6 space-y-3">
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">給与</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#333]">28万円/月</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">社会保険</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#333]">約4.2万円（15%）</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">交通費</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#333]">約1万円/月</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">残業・有給</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#333]">約2.8万円（10%）</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">離職リスク</span><span className="text-[21px] sm:text-[25px] font-black text-left text-red-500">⚠ あり</span>
      </div>
      </div>
      <div className="bg-[#fafafa] px-6 py-4 border-t border-[#e5e5e5] text-center"><span className="text-[14px] font-bold text-[#888]">月額総コスト：</span><span className="text-[28px] sm:text-[32px] font-black text-[#333] ml-2" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>約35万円</span>
      </div>
      </div>
      <div className="fade-in bg-white border-2 border-[#1773b4] overflow-hidden shadow-[0_12px_30px_rgba(65,172,134,0.15)] visible" style={{"transitionDelay": "0.1s"}}>
      <div className="bg-[#1773b4] px-6 py-5 text-center">
      <p className="text-[10px] tracking-[0.2em] font-bold text-white/70 mb-1">経営者のミカタ
      </p>
      <p className="text-[20px] sm:text-[24px] font-black text-white">経営者のミカタ
      </p>
      </div>
      <div className="p-5 sm:p-6 space-y-3">
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">専任担当</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#1773b4]">配置</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">通信費</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#1773b4]">込み</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">録音・ログ</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#1773b4]">込み</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">文字起こし</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#1773b4]">込み</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">離職リスク</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#1773b4]">✓ なし</span>
      </div>
      </div>
      <div className="bg-[#eaf3fa] px-6 py-4 border-t border-[#cfe4f3] text-center"><span className="text-[14px] font-bold text-[#888]">月額総コスト：</span><span className="text-[28px] sm:text-[32px] font-black text-[#1773b4] ml-2" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>35万円</span><span className="text-[13px] text-[#888] ml-1">（初期費用0円・全部込み）</span>
      </div>
      </div>
      </div>
      <div className="fade-in text-center bg-white border-2 border-black px-4 py-6 sm:p-8 mb-6 sm:mb-10 visible" style={{"boxShadow": "rgb(23, 115, 180) 6px 6px 0px 0px"}}>
      <p className="font-black text-black leading-[1.4] whitespace-nowrap" style={{"fontSize": "clamp(15px, 4.4vw, 32px)"}}>同じコストで、<span className="text-[#1773b4]">リスクがゼロ</span>になる。
      </p>
      <p className="mt-2 text-[14px] sm:text-[16px] text-[#555] font-bold">しかもコール数は人の2倍。教育不要。離職なし。
      </p>
      </div>
      <div className="fade-in mb-10 sm:mb-14 visible">
      <div className="text-center mb-8 sm:mb-10">
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#1773b4] tracking-[0.3em] font-black mb-3"><span className="w-8 h-[2px] bg-[#1773b4]"></span>EMOTIONAL RISK<span className="w-8 h-[2px] bg-[#1773b4]"></span>
      </p>
      <h3 className="text-[24px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3]">人の営業には<span className="text-[#1773b4]">「感情」</span>がある
      </h3>
      <p className="mt-3 text-[15px] sm:text-[17px] text-[#555] font-bold">どんなに優秀でも、人間には感情がある。それが最大のリスクです。
      </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
      <div className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center visible" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 4px 4px 0px 0px", "transitionDelay": "0s"}}><span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#1773b4] text-[14px] sm:text-[15px] font-black mb-3">01</span>
      <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">残業したくない
      </p>
      <p className="text-[15px] sm:text-[15px] text-[#888] leading-[1.7] font-medium">定時後の稼働を嫌がる<br />ワークライフバランス重視
      </p>
      </div>
      <div className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center visible" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 4px 4px 0px 0px", "transitionDelay": "0.06s"}}><span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#1773b4] text-[14px] sm:text-[15px] font-black mb-3">02</span>
      <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">電話がしんどい
      </p>
      <p className="text-[15px] sm:text-[15px] text-[#888] leading-[1.7] font-medium">電話営業のストレス<br />断られることへの恐怖心
      </p>
      </div>
      <div className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center visible" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 4px 4px 0px 0px", "transitionDelay": "0.12s"}}><span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#1773b4] text-[14px] sm:text-[15px] font-black mb-3">03</span>
      <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">人間関係の摩擦
      </p>
      <p className="text-[15px] sm:text-[15px] text-[#888] leading-[1.7] font-medium">チーム内の衝突<br />上司とのコミュ不全
      </p>
      </div>
      <div className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center visible" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 4px 4px 0px 0px", "transitionDelay": "0.18s"}}><span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#1773b4] text-[14px] sm:text-[15px] font-black mb-3">04</span>
      <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">モチベの波
      </p>
      <p className="text-[15px] sm:text-[15px] text-[#888] leading-[1.7] font-medium">やる気の浮き沈みが激しく<br />安定した成果が出ない
      </p>
      </div>
      <div className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center visible" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 4px 4px 0px 0px", "transitionDelay": "0.24s"}}><span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#1773b4] text-[14px] sm:text-[15px] font-black mb-3">05</span>
      <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">突然の離職
      </p>
      <p className="text-[15px] sm:text-[15px] text-[#888] leading-[1.7] font-medium">予告なしの退職<br />採用・教育コストが無駄に
      </p>
      </div>
      </div>
      <div className="fade-in bg-[#eaf3fa] p-8 sm:p-12 text-center visible">
      <p className="font-black text-black leading-[1.5]" style={{"fontSize": "clamp(18px, 5.2vw, 40px)"}}><span className="sm:hidden">経営者のミカタは<br /><span className="text-[#1773b4] whitespace-nowrap">辞めない。飽きない。ブレない。</span></span><span className="hidden sm:inline">経営者のミカタは、<span className="text-[#1773b4]">辞めない。飽きない。ブレない。</span></span>
      </p>
      <p className="mt-4 text-[16px] sm:text-[20px] text-[#555] leading-[1.8]">感情に左右されない。24時間365日、<br className="sm:hidden" />同じ品質で稼働し続けます。
      </p>
      </div>
      </div>
      <div className="fade-in text-center visible">
      <a href="#contact-form" className="btn-accent text-center">まずは10〜15分だけ話しましょう
      </a>
      </div>
      </div>
      </section>
      <section id="flow" className="py-16 sm:py-24 px-5 sm:px-10 bg-white" style={{"fontFamily": "\"Noto Sans JP\", sans-serif"}}>
      <div className="max-w-[1240px] mx-auto text-center">
      <p className="fade-in text-[15px] sm:text-[16px] text-[#1773b4] tracking-[0.1em] font-bold mb-3 visible">ご利用の流れ
      </p>
      <h2 className="fade-in font-bold text-[#333] tracking-[0.03em] mb-16 sm:mb-20 whitespace-nowrap visible" style={{"fontSize": "clamp(22px, 6.2vw, 44px)"}}>最短5営業日でコール開始
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 lg:gap-0 items-stretch">
      <div className="fade-in text-left flex flex-col transition-all duration-300 visible" style={{"transitionDelay": "0s", "transform": "scale(1)", "boxShadow": "rgba(0, 0, 0, 0.03) 0px 2px 8px", "zIndex": "1", "position": "relative"}}>
      <div className="px-6 py-4 flex items-center gap-3 transition-all duration-300" style={{"background": "rgb(23, 115, 180)"}}><span className="text-[36px] sm:text-[42px] font-bold text-white leading-none">01</span><span className="text-[14px] sm:text-[15px] font-bold text-white/80 tracking-[0.1em]">STEP</span>
      </div>
      <div className="bg-[#f3f8fc] border border-[#e5e0d8] border-t-0 px-6 py-6 sm:py-8 flex-1">
      <h3 className="text-[19px] sm:text-[22px] font-bold text-[#333] mb-4 leading-[1.4]">無料相談 (10~15分)
      </h3>
      <p className="text-[14px] sm:text-[16px] text-[#666] leading-[1.8] m-0 whitespace-pre-line">現状の営業体制や課題をヒアリング。
      経営者のミカタが合うかどうか正直にお伝えします。
      </p>
      </div>
      </div>
      <div className="hidden lg:flex items-center justify-center px-2"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="#1773b4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="flex lg:hidden items-center justify-center py-2"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6V22M14 22L8 16M14 22L20 16" stroke="#1773b4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="fade-in text-left flex flex-col transition-all duration-300 visible" style={{"transitionDelay": "0.15s", "transform": "scale(1.05)", "boxShadow": "rgba(65, 172, 134, 0.25) 0px 8px 30px", "zIndex": "10", "position": "relative"}}>
      <div className="px-6 py-4 flex items-center gap-3 transition-all duration-300" style={{"background": "rgb(15, 90, 146)"}}><span className="text-[36px] sm:text-[42px] font-bold text-white leading-none">02</span><span className="text-[14px] sm:text-[15px] font-bold text-white/80 tracking-[0.1em]">STEP</span>
      </div>
      <div className="bg-[#f3f8fc] border border-[#e5e0d8] border-t-0 px-6 py-6 sm:py-8 flex-1">
      <h3 className="text-[19px] sm:text-[22px] font-bold text-[#333] mb-4 leading-[1.4]">ご提案・お見積り
      </h3>
      <p className="text-[14px] sm:text-[16px] text-[#666] leading-[1.8] m-0 whitespace-pre-line">ターゲットリスト・スクリプト・KPIを設計。
      ご納得いただけた場合のみ契約へ。
      </p>
      </div>
      </div>
      <div className="hidden lg:flex items-center justify-center px-2"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="#1773b4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="flex lg:hidden items-center justify-center py-2"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6V22M14 22L8 16M14 22L20 16" stroke="#1773b4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="fade-in text-left flex flex-col transition-all duration-300 visible" style={{"transitionDelay": "0.3s", "transform": "scale(1)", "boxShadow": "rgba(0, 0, 0, 0.03) 0px 2px 8px", "zIndex": "1", "position": "relative"}}>
      <div className="px-6 py-4 flex items-center gap-3 transition-all duration-300" style={{"background": "rgb(23, 115, 180)"}}><span className="text-[36px] sm:text-[42px] font-bold text-white leading-none">03</span><span className="text-[14px] sm:text-[15px] font-bold text-white/80 tracking-[0.1em]">STEP</span>
      </div>
      <div className="bg-[#f3f8fc] border border-[#e5e0d8] border-t-0 px-6 py-6 sm:py-8 flex-1">
      <h3 className="text-[19px] sm:text-[22px] font-bold text-[#333] mb-4 leading-[1.4]">コール開始
      </h3>
      <p className="text-[14px] sm:text-[16px] text-[#666] leading-[1.8] m-0 whitespace-pre-line">契約後最短5営業日でコール開始。
      専任チームが月間8,800コールを実行します。
      </p>
      </div>
      </div>
      <div className="hidden lg:flex items-center justify-center px-2"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="#1773b4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="flex lg:hidden items-center justify-center py-2"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6V22M14 22L8 16M14 22L20 16" stroke="#1773b4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="fade-in text-left flex flex-col transition-all duration-300 visible" style={{"transitionDelay": "0.45s", "transform": "scale(1)", "boxShadow": "rgba(0, 0, 0, 0.03) 0px 2px 8px", "zIndex": "1", "position": "relative"}}>
      <div className="px-6 py-4 flex items-center gap-3 transition-all duration-300" style={{"background": "rgb(23, 115, 180)"}}><span className="text-[36px] sm:text-[42px] font-bold text-white leading-none">04</span><span className="text-[14px] sm:text-[15px] font-bold text-white/80 tracking-[0.1em]">STEP</span>
      </div>
      <div className="bg-[#f3f8fc] border border-[#e5e0d8] border-t-0 px-6 py-6 sm:py-8 flex-1">
      <h3 className="text-[19px] sm:text-[22px] font-bold text-[#333] mb-4 leading-[1.4]">レポート・改善
      </h3>
      <p className="text-[14px] sm:text-[16px] text-[#666] leading-[1.8] m-0 whitespace-pre-line">全コールログをリアルタイム共有。
      データをもとにスクリプトやリストを継続改善。
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in mt-14 sm:mt-16 visible">
      <a href="#contact-form" className="inline-block px-6 py-4 sm:px-14 sm:py-5 text-white font-bold text-[15px] sm:text-[20px] rounded-full no-underline hover:scale-[1.05] whitespace-nowrap" style={{"background": "rgb(23, 115, 180)", "boxShadow": "rgba(23, 115, 180, 0.3) 0px 8px 20px", "animation": "2s ease-in-out 0s infinite normal none running flow-cta-pulse"}}>まずは10〜15分だけ話しましょう
      </a>
      </div>
      </div><style dangerouslySetInnerHTML={{ __html: `
      @keyframes flow-cta-pulse {
      0%, 100% { transform: scale(1); box-shadow: 0 8px 20px rgba(23, 115, 180, 0.3); }
      50% { transform: scale(1.05); box-shadow: 0 12px 32px rgba(65, 172, 134, 0.5); }
        }
      ` }} />
      </section>
      <section id="faq" className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
      <p className="fade-in text-[13px] sm:text-[14px] text-[#1773b4] tracking-[0.2em] font-bold mb-3 text-center visible">FAQ
      </p>
      <h2 className="fade-in text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4 text-center visible">よくある<span className="text-[#1773b4]">ご質問</span>
      </h2>
      <p className="fade-in text-[#4d4d4d] text-center mb-12 whitespace-nowrap visible" style={{"fontSize": "clamp(12px, 3.6vw, 16px)"}}>経営者のミカタについて、よくいただくご質問をまとめました。
      </p>
      <div className="max-w-[860px] mx-auto">
      <div className="fade-in border-b border-[#eee] visible" style={{"transitionDelay": "0s"}}>
      <button className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none">
      <div className="flex items-start gap-3 sm:gap-4 pr-4"><span className="text-[15px] sm:text-[16px] font-black text-[#1773b4] mt-0.5 shrink-0">Q.</span><span className="text-[15px] sm:text-[17px] font-bold text-black leading-[1.5]">本当に月間8,800コールされますか？</span>
      </div><span className="text-[20px] text-[#1773b4] shrink-0 transition-transform duration-300" style={{"transform": "rotate(0deg)"}}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{"maxHeight": "0px", "opacity": "0"}}>
      <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 pl-0"><span className="text-[15px] sm:text-[16px] font-black text-[#999] mt-0.5 shrink-0">A.</span>
      <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.8]">はい、8,800コールを保証しています。人で換算すると約2人分の稼働量です（※人の場合：200コール/日 × 22日 = 約4,400コール）。毎日のコール数はリアルタイムで共有されるため、進捗をいつでも確認できます。万が一、月間コール数が保証に満たなかった場合は翌月に繰り越し対応いたします。
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in border-b border-[#eee] visible" style={{"transitionDelay": "0.05s"}}>
      <button className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none">
      <div className="flex items-start gap-3 sm:gap-4 pr-4"><span className="text-[15px] sm:text-[16px] font-black text-[#1773b4] mt-0.5 shrink-0">Q.</span><span className="text-[15px] sm:text-[17px] font-bold text-black leading-[1.5]">どんな業種に対応していますか？</span>
      </div><span className="text-[20px] text-[#1773b4] shrink-0 transition-transform duration-300" style={{"transform": "rotate(0deg)"}}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{"maxHeight": "0px", "opacity": "0"}}>
      <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 pl-0"><span className="text-[15px] sm:text-[16px] font-black text-[#999] mt-0.5 shrink-0">A.</span>
      <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.8]">BtoB商材なら基本的に全業種対応可能。IT・SaaS、人材、不動産、製造業など幅広い実績があります。初回ヒアリングで最適なアプローチを設計します。
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in border-b border-[#eee] visible" style={{"transitionDelay": "0.1s"}}>
      <button className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none">
      <div className="flex items-start gap-3 sm:gap-4 pr-4"><span className="text-[15px] sm:text-[16px] font-black text-[#1773b4] mt-0.5 shrink-0">Q.</span><span className="text-[15px] sm:text-[17px] font-bold text-black leading-[1.5]">トークスクリプトは誰がどうやって作りますか？</span>
      </div><span className="text-[20px] text-[#1773b4] shrink-0 transition-transform duration-300" style={{"transform": "rotate(0deg)"}}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{"maxHeight": "0px", "opacity": "0"}}>
      <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 pl-0"><span className="text-[15px] sm:text-[16px] font-black text-[#999] mt-0.5 shrink-0">A.</span>
      <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.8]">営業経験15年以上のプロが、貴社の商材・ターゲットに合わせてトークツリーを設計します。営業のプロレベルの無駄のない会話構成に、トップ営業マンの間・語尾・テンションを組み合わせた設計思想です。作成費用は月額料金に含まれており、運用データをもとに継続的に改善していきます。
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in border-b border-[#eee] visible" style={{"transitionDelay": "0.15s"}}>
      <button className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none">
      <div className="flex items-start gap-3 sm:gap-4 pr-4"><span className="text-[15px] sm:text-[16px] font-black text-[#1773b4] mt-0.5 shrink-0">Q.</span><span className="text-[15px] sm:text-[17px] font-bold text-black leading-[1.5]">契約期間はどのくらいですか？</span>
      </div><span className="text-[20px] text-[#1773b4] shrink-0 transition-transform duration-300" style={{"transform": "rotate(0deg)"}}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{"maxHeight": "0px", "opacity": "0"}}>
      <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 pl-0"><span className="text-[15px] sm:text-[16px] font-black text-[#999] mt-0.5 shrink-0">A.</span>
      <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.8]">初期契約は6ヶ月間です。以降は6ヶ月単位での自動更新となります。成果を出すにはPDCAを回す期間が必要なため、この設計にしています。
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in border-b border-[#eee] visible" style={{"transitionDelay": "0.2s"}}>
      <button className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none">
      <div className="flex items-start gap-3 sm:gap-4 pr-4"><span className="text-[15px] sm:text-[16px] font-black text-[#1773b4] mt-0.5 shrink-0">Q.</span><span className="text-[15px] sm:text-[17px] font-bold text-black leading-[1.5]">初期費用はかかりますか？</span>
      </div><span className="text-[20px] text-[#1773b4] shrink-0 transition-transform duration-300" style={{"transform": "rotate(0deg)"}}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{"maxHeight": "0px", "opacity": "0"}}>
      <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 pl-0"><span className="text-[15px] sm:text-[16px] font-black text-[#999] mt-0.5 shrink-0">A.</span>
      <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.8]">初期費用は一切かかりません。トークツリー設計・ターゲットリスト作成・専任担当者の配置まで、すべて月額料金に含まれています。月額の詳細はお問い合わせ時にご案内いたします。
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in border-b border-[#eee] visible" style={{"transitionDelay": "0.25s"}}>
      <button className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none">
      <div className="flex items-start gap-3 sm:gap-4 pr-4"><span className="text-[15px] sm:text-[16px] font-black text-[#1773b4] mt-0.5 shrink-0">Q.</span><span className="text-[15px] sm:text-[17px] font-bold text-black leading-[1.5]">人の営業と比べてどのくらいコスト削減できますか？</span>
      </div><span className="text-[20px] text-[#1773b4] shrink-0 transition-transform duration-300" style={{"transform": "rotate(0deg)"}}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{"maxHeight": "0px", "opacity": "0"}}>
      <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 pl-0"><span className="text-[15px] sm:text-[16px] font-black text-[#999] mt-0.5 shrink-0">A.</span>
      <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.8]">人を雇う場合、給与だけでなく社会保険（約15%）・交通費（約1万円/月）・残業/有給コスト（約10%増）・教育コスト・管理コストがかかります。さらに最大のリスクは離職です。経営者のミカタなら離職なし・教育不要・パフォーマンス一定で、営業2人分の稼働を実現します。具体的な月額はお問い合わせ時にご案内いたします。
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in border-b border-[#eee] visible" style={{"transitionDelay": "0.3s"}}>
      <button className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none">
      <div className="flex items-start gap-3 sm:gap-4 pr-4"><span className="text-[15px] sm:text-[16px] font-black text-[#1773b4] mt-0.5 shrink-0">Q.</span><span className="text-[15px] sm:text-[17px] font-bold text-black leading-[1.5]">どのくらいで成果が出ますか？</span>
      </div><span className="text-[20px] text-[#1773b4] shrink-0 transition-transform duration-300" style={{"transform": "rotate(0deg)"}}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{"maxHeight": "0px", "opacity": "0"}}>
      <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 pl-0"><span className="text-[15px] sm:text-[16px] font-black text-[#999] mt-0.5 shrink-0">A.</span>
      <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.8]">業種やターゲットによりますが、多くの場合1〜2週間で最初のアポイントが発生しています。月間8,800コールの実行量があるため、短期間でPDCAを回すことが可能です。
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in border-b border-[#eee] visible" style={{"transitionDelay": "0.35s"}}>
      <button className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none">
      <div className="flex items-start gap-3 sm:gap-4 pr-4"><span className="text-[15px] sm:text-[16px] font-black text-[#1773b4] mt-0.5 shrink-0">Q.</span><span className="text-[15px] sm:text-[17px] font-bold text-black leading-[1.5]">途中でスクリプトやターゲットの変更はできますか？</span>
      </div><span className="text-[20px] text-[#1773b4] shrink-0 transition-transform duration-300" style={{"transform": "rotate(0deg)"}}>+</span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{"maxHeight": "0px", "opacity": "0"}}>
      <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 pl-0"><span className="text-[15px] sm:text-[16px] font-black text-[#999] mt-0.5 shrink-0">A.</span>
      <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.8]">はい、いつでも変更可能です。コールデータの分析結果をもとに、トークツリーやターゲットリストの最適化を提案させていただきます。追加費用はかかりません。
      </p>
      </div>
      </div>
      </div>
      </div>
      <div className="fade-in text-center mt-12 visible">
      <p className="text-[14px] text-[#999] mb-4">その他のご質問は、お気軽にお問い合わせください。
      </p>
      <a href="#contact-form" className="btn-accent text-center text-[14px]">お問い合わせはこちら
      </a>
      </div>
      </div>
      </section>
      <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-10" style={{"background": "radial-gradient(at 80% 30%, rgb(23, 115, 180) 0%, transparent 60%)"}}>
      </div>
      <div className="relative z-10 max-w-[1240px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
      <p className="fade-in text-[13px] text-[#1773b4] tracking-[0.2em] font-bold mb-4 visible">無料相談
      </p>
      <h2 className="fade-in font-black text-white leading-[1.3] mb-5 visible" style={{"fontSize": "clamp(18px, 5.2vw, 42px)"}}><span className="whitespace-nowrap">現状の営業コストと比較した</span><br /><span className="whitespace-nowrap"><span className="text-[#1773b4]">"削減インパクト"</span>をその場で算出</span>
      </h2>
      <p className="fade-in text-[15px] sm:text-[17px] text-white/70 leading-[1.8] mb-8 visible">採用コスト・離職リスク・教育コスト——<br className="hidden sm:inline" />これらを数字で可視化し、経営者のミカタ導入の効果を正直にお伝えします。<br className="hidden sm:inline" />合わなければ、それでOKです。
      </p>
      <div className="fade-in flex flex-col sm:flex-row gap-4 visible">
      <a href="#contact-form" className="inline-flex items-center justify-center bg-[#1773b4] text-white text-[16px] sm:text-[18px] font-bold h-[60px] sm:h-[68px] px-10 sm:px-14 rounded-[96px] no-underline hover:bg-[#0e5a92] transition-colors">無料相談を予約する
      </a>
      <a href="#document-request" className="inline-flex items-center justify-center border-2 border-white/30 text-white text-[14px] sm:text-[16px] font-bold h-[60px] sm:h-[68px] px-8 sm:px-12 rounded-[96px] no-underline hover:bg-white/10 transition-colors">まずは資料だけ見る
      </a>
      </div>
      </div>
      <div className="fade-in visible">
      <div className="bg-white/[0.06] border border-white/10 rounded-none p-6 sm:p-8">
      <p className="text-[18px] sm:text-[20px] text-white font-black mb-8">無料相談でわかること
      </p>
      <div className="space-y-0">
      <div className="flex gap-5 items-start py-5 sm:py-6 border-b border-white/10"><span className="text-[18px] sm:text-[20px] font-black text-[#1773b4] mt-0.5 shrink-0">01</span>
      <div>
      <p className="text-[18px] sm:text-[20px] text-white font-bold mb-2">採用コストの可視化
      </p>
      <p className="text-[15px] sm:text-[16px] text-white/50 leading-[1.8]">現状の営業人件費と経営者のミカタのコスト差を算出します。
      </p>
      </div>
      </div>
      <div className="flex gap-5 items-start py-5 sm:py-6 border-b border-white/10"><span className="text-[18px] sm:text-[20px] font-black text-[#1773b4] mt-0.5 shrink-0">02</span>
      <div>
      <p className="text-[18px] sm:text-[20px] text-white font-bold mb-2">離職リスクの試算
      </p>
      <p className="text-[15px] sm:text-[16px] text-white/50 leading-[1.8]">離職で発生する再採用・再教育コストを試算します。
      </p>
      </div>
      </div>
      <div className="flex gap-5 items-start py-5 sm:py-6 "><span className="text-[18px] sm:text-[20px] font-black text-[#1773b4] mt-0.5 shrink-0">03</span>
      <div>
      <p className="text-[18px] sm:text-[20px] text-white font-bold mb-2">削減インパクトの提示
      </p>
      <p className="text-[15px] sm:text-[16px] text-white/50 leading-[1.8]">削減コストと稼働量を具体的な数字でお伝えします。
      </p>
      </div>
      </div>
      </div>
      <div className="mt-6 pt-5 border-t border-white/10">
      <div className="flex flex-wrap gap-5 text-[15px] sm:text-[16px] text-white/50"><span>所要時間：10〜15分</span><span>費用：無料</span><span>売り込み：なし</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="contact-form" className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[520px] mx-auto">
      <div className="fade-in text-center mb-8 visible">
      <p className="text-[12px] text-[#1773b4] tracking-[0.15em] font-bold mb-2">お問い合わせ
      </p>
      <h2 className="text-[24px] sm:text-[28px] font-bold text-black leading-[1.4] tracking-[0.04em]">まずは状況を教えてください
      </h2>
      </div>
      <DiagnosisQuiz />
      </div>
      </section>
      <section id="document-request" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[720px] mx-auto">
      <div className="fade-in text-center mb-8 visible">
      <p className="text-[12px] text-[#1773b4] tracking-[0.25em] font-bold mb-3">DOCUMENT REQUEST
      </p>
      <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-black text-black leading-[1.3] tracking-[0.02em] mb-3">資料請求
      </h2>
      <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.9]">サービス概要・料金・導入事例をまとめた資料をお送りします。<br className="hidden sm:block" />下記フォームにご入力ください（所要1分）。
      </p>
      </div>
      <form className="fade-in bg-white border border-[#e5e5e5] rounded-[16px] p-6 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] visible">
      <div className="space-y-4 sm:space-y-5 mb-5">
      <div>
      <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">お名前<span className="text-[10px] font-bold text-white bg-[#1773b4] px-1.5 py-[1px] rounded-[3px]">必須</span>
      </label><input required placeholder="例：山田 太郎" className="w-full px-4 py-3.5 rounded-[10px] border-2 border-[#e5e5e5] text-[14px] text-black bg-[#fafafa] focus:outline-none focus:border-[#1773b4] focus:bg-white transition-colors placeholder:text-[#ccc]" type="text" style={{"caretColor": "transparent !important"}} />
      </div>
      <div>
      <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">会社名<span className="text-[10px] font-bold text-white bg-[#1773b4] px-1.5 py-[1px] rounded-[3px]">必須</span>
      </label><input required placeholder="例：株式会社○○○○" className="w-full px-4 py-3.5 rounded-[10px] border-2 border-[#e5e5e5] text-[14px] text-black bg-[#fafafa] focus:outline-none focus:border-[#1773b4] focus:bg-white transition-colors placeholder:text-[#ccc]" type="text" style={{"caretColor": "transparent !important"}} />
      </div>
      <div>
      <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">部署・役職<span className="text-[10px] font-bold text-[#999] bg-[#eee] px-1.5 py-[1px] rounded-[3px]">任意</span>
      </label><input placeholder="例：営業部 部長" className="w-full px-4 py-3.5 rounded-[10px] border-2 border-[#e5e5e5] text-[14px] text-black bg-[#fafafa] focus:outline-none focus:border-[#1773b4] focus:bg-white transition-colors placeholder:text-[#ccc]" type="text" style={{"caretColor": "transparent !important"}} />
      </div>
      <div>
      <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">電話番号<span className="text-[10px] font-bold text-white bg-[#1773b4] px-1.5 py-[1px] rounded-[3px]">必須</span>
      </label><input required placeholder="例：09012345678" className="w-full px-4 py-3.5 rounded-[10px] border-2 border-[#e5e5e5] text-[14px] text-black bg-[#fafafa] focus:outline-none focus:border-[#1773b4] focus:bg-white transition-colors placeholder:text-[#ccc]" type="tel" style={{"caretColor": "transparent !important"}} />
      </div>
      <div>
      <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">メールアドレス<span className="text-[10px] font-bold text-white bg-[#1773b4] px-1.5 py-[1px] rounded-[3px]">必須</span>
      </label><input required placeholder="例：sample@example.com" className="w-full px-4 py-3.5 rounded-[10px] border-2 border-[#e5e5e5] text-[14px] text-black bg-[#fafafa] focus:outline-none focus:border-[#1773b4] focus:bg-white transition-colors placeholder:text-[#ccc]" type="email" style={{"caretColor": "transparent !important"}} />
      </div>
      </div>
      <div className="mb-6">
      <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">ご質問・ご要望<span className="text-[10px] font-bold text-[#999] bg-[#eee] px-1.5 py-[1px] rounded-[3px]">任意</span>
      </label><textarea rows={4} placeholder="導入時期・想定コール数・課題など、お気軽にご記入ください" className="w-full px-4 py-3 rounded-[10px] border-2 border-[#e5e5e5] text-[14px] text-black bg-[#fafafa] focus:outline-none focus:border-[#1773b4] focus:bg-white transition-colors placeholder:text-[#ccc] resize-none" style={{"caretColor": "transparent !important"}}></textarea>
      </div>
      <button type="submit" className="btn-accent w-full text-center cursor-pointer text-[14px]">資料を受け取る
      </button>
      <p className="text-[11px] text-[#999] mt-4 text-center leading-[1.7]">入力情報は資料送付・サービスのご案内にのみ使用し、第三者に提供することはありません。
      </p>
      </form>
      </div>
      </section>
      <section className="py-16 sm:py-24 px-5 sm:px-10 relative overflow-hidden" style={{"background": "linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(26, 37, 55) 50%, rgb(26, 46, 70) 100%)"}}>
      <div className="absolute top-0 left-0 w-full h-full opacity-25" style={{"background": "radial-gradient(at 30% 50%, rgb(23, 115, 180) 0%, transparent 60%)"}}>
      </div>
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
      <p className="fade-in text-[18px] sm:text-[22px] text-[#1773b4] tracking-[0.15em] font-black mb-5 visible">経営者のミカタ
      </p>
      <h2 className="fade-in text-[32px] sm:text-[44px] lg:text-[52px] font-black text-white leading-[1.3] tracking-[0.04em] mb-6 visible" style={{"textShadow": "rgba(0, 0, 0, 0.9) 0px 2px 12px, rgba(0, 0, 0, 0.6) 0px 0px 24px"}}>営業のプロが作った<br />日本一正直な営業代行
      </h2>
      <p className="fade-in text-[20px] sm:text-[24px] text-white font-bold mb-4 visible" style={{"textShadow": "rgba(0, 0, 0, 0.9) 0px 1px 8px"}}>かけた分だけ、全部見える。<br className="sm:hidden" />それが経営者のミカタです。
      </p>
      <p className="fade-in text-[#1773b4] font-black mb-10 visible" style={{"textShadow": "rgba(0, 0, 0, 0.9) 0px 1px 8px", "fontSize": "clamp(13px, 4vw, 20px)"}}><span className="whitespace-nowrap">現状の営業コストと比較した</span><br className="sm:hidden" /><span className="whitespace-nowrap">"削減インパクト"をその場で算出します</span>
      </p>
      <div className="fade-in flex flex-col sm:flex-row gap-3 justify-center visible">
      <a href="#contact-form" className="inline-flex items-center justify-center bg-[#1773b4] hover:bg-[#0e5a92] text-white font-bold text-[15px] sm:text-[17px] px-8 sm:px-10 py-4 sm:py-5 rounded-full no-underline transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.5)]">まずは10〜15分だけ話しましょう
      </a>
      <a href="#document-request" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold text-[15px] sm:text-[17px] px-8 sm:px-10 py-4 sm:py-5 rounded-full no-underline transition-colors">資料請求
      </a>
      </div>
      </div>
      </section></main>
  );
}
