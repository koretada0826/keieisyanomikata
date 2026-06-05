import { useState } from "react";

const ITEMS: { q: string; a: string }[] = [
  {
    q: "本当に月間8,800コールされますか？",
    a: "はい、8,800コールを保証しています。人で換算すると約2人分の稼働量です（※人の場合：200コール/日 × 22日 = 約4,400コール）。毎日のコール数はリアルタイムで共有されるため、進捗をいつでも確認できます。万が一、月間コール数が保証に満たなかった場合は翌月に繰り越し対応いたします。",
  },
  {
    q: "どんな業種に対応していますか？",
    a: "BtoB商材なら基本的に全業種対応可能。IT・SaaS、人材、不動産、製造業など幅広い実績があります。初回ヒアリングで最適なアプローチを設計します。",
  },
  {
    q: "トークスクリプトは誰がどうやって作りますか？",
    a: "営業経験15年以上のプロが、貴社の商材・ターゲットに合わせてトークツリーを設計します。営業のプロレベルの無駄のない会話構成に、トップ営業マンの間・語尾・テンションを組み合わせた設計思想です。作成費用は月額料金に含まれており、運用データをもとに継続的に改善していきます。",
  },
  {
    q: "契約期間はどのくらいですか？",
    a: "初期契約は6ヶ月間です。以降は6ヶ月単位での自動更新となります。成果を出すにはPDCAを回す期間が必要なため、この設計にしています。",
  },
  {
    q: "初期費用はかかりますか？",
    a: "初期費用は20万円です。トークツリー設計・ターゲットリスト作成・専任担当者の配置までを含みます。以降は月額料金のみで、追加費用はかかりません。詳細はお問い合わせ時にご案内いたします。",
  },
  {
    q: "人の営業と比べてどのくらいコスト削減できますか？",
    a: "人を雇う場合、給与だけでなく社会保険（約15%）・交通費（約1万円/月）・残業/有給コスト（約10%増）・教育コスト・管理コストがかかります。さらに最大のリスクは離職です。経営者のミカタなら離職なし・教育不要・パフォーマンス一定で、営業2人分の稼働を実現します。具体的な月額はお問い合わせ時にご案内いたします。",
  },
  {
    q: "どのくらいで成果が出ますか？",
    a: "業種やターゲットによりますが、多くの場合1〜2週間で最初のアポイントが発生しています。月間8,800コールの実行量があるため、短期間でPDCAを回すことが可能です。",
  },
  {
    q: "途中でスクリプトやターゲットの変更はできますか？",
    a: "はい、いつでも変更可能です。コールデータの分析結果をもとに、トークツリーやターゲットリストの最適化を提案させていただきます。追加費用はかかりません。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-[860px] mx-auto">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="fade-in border-b border-[#eee] visible">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer bg-transparent border-none"
            >
              <div className="flex items-start gap-3 sm:gap-4 pr-4">
                <span className="text-[15px] sm:text-[16px] font-black text-[#1773b4] mt-0.5 shrink-0">
                  Q.
                </span>
                <span className="text-[15px] sm:text-[17px] font-bold text-black leading-[1.5]">
                  {item.q}
                </span>
              </div>
              <span
                className="text-[20px] text-[#1773b4] shrink-0 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isOpen ? "600px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4 pb-5 sm:pb-6 pl-0">
                <span className="text-[15px] sm:text-[16px] font-black text-[#999] mt-0.5 shrink-0">
                  A.
                </span>
                <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.8]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
