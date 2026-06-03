import { useState } from "react";

type Question = {
  q: string;
  options: string[];
};

const QUESTIONS: Question[] = [
  { q: "コールセンターはありますか？", options: ["はい", "いいえ"] },
  {
    q: "現在、新規開拓の営業はどうしていますか？",
    options: ["自社で対応している", "外部に委託している", "ほとんど手付かず"],
  },
  {
    q: "1ヶ月にどれくらい新規アプローチできていますか？",
    options: ["〜500件", "500〜2,000件", "2,000件以上 / 把握していない"],
  },
  {
    q: "営業における一番の課題は？",
    options: [
      "人手・リソース不足",
      "成果（アポ・受注）が出ない",
      "ノウハウ・仕組みがない",
      "コストが高い",
    ],
  },
  {
    q: "営業にかけられる月の予算は？",
    options: ["〜30万円", "30〜80万円", "80万円以上", "まだ決めていない"],
  },
  {
    q: "いつ頃から始めたいですか？",
    options: ["できるだけ早く", "1〜3ヶ月以内", "まずは情報収集から"],
  },
];

const QCOUNT = QUESTIONS.length; // 6
const FORM_STEPS = 2; // 入力2ステップ
const TOTAL = QCOUNT + FORM_STEPS; // 8
const STEP_PROFILE = QCOUNT; // step index 6
const STEP_CONTACT = QCOUNT + 1; // step index 7
const STEP_DONE = TOTAL; // step index 8

const inputClass =
  "w-full px-4 py-3.5 rounded-[10px] border-2 border-[#e5e5e5] text-[14px] text-black bg-[#fafafa] focus:outline-none focus:border-[#1773b4] focus:bg-white transition-colors placeholder:text-[#ccc]";

const requiredBadge = (
  <span className="text-[10px] font-bold text-white bg-[#1773b4] px-1.5 py-[1px] rounded-[3px]">
    必須
  </span>
);
const optionalBadge = (
  <span className="text-[10px] font-bold text-[#999] bg-[#eee] px-1.5 py-[1px] rounded-[3px]">
    任意
  </span>
);

type FormState = {
  name: string;
  company: string;
  dept: string;
  phone: string;
  email: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  company: "",
  dept: "",
  phone: "",
  email: "",
  message: "",
};

const CONTACT_EMAIL = "bright-kanri@right.ne.jp";

export default function DiagnosisQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [mailtoHref, setMailtoHref] = useState("");

  const selectAnswer = (option: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = option;
      return next;
    });
    setStep((s) => s + 1);
  };

  const back = () => setStep((s) => Math.max(0, s - 1));
  const setField = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const reset = () => {
    setAnswers([]);
    setForm(EMPTY_FORM);
    setStep(0);
  };

  const profileValid = form.name.trim() !== "" && form.company.trim() !== "";
  const contactValid = form.phone.trim() !== "" && form.email.trim() !== "";

  const submit = () => {
    if (!contactValid) return;
    const qaLines = QUESTIONS.map(
      (q, i) => `${i + 1}. ${q.q}\n   → ${answers[i] ?? "（未回答）"}`
    );
    const body = [
      "■ 診断の回答",
      ...qaLines,
      "",
      "■ お客様情報",
      `お名前：${form.name}`,
      `会社名：${form.company}`,
      `部署・役職：${form.dept || "（未記入）"}`,
      `電話番号：${form.phone}`,
      `メールアドレス：${form.email}`,
      `ご質問・ご要望：${form.message || "（なし）"}`,
    ].join("\n");
    const subject = `【資料請求】${form.company} ${form.name} 様`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setMailtoHref(href);
    window.location.href = href;
    setStep(STEP_DONE);
  };

  const progress = ((Math.min(step, TOTAL) + (step >= STEP_DONE ? 0 : 1)) / TOTAL) * 100;
  const stepLabel =
    step >= STEP_DONE ? "完了" : `STEP ${step + 1} / ${TOTAL}`;

  return (
    <>
      {/* progress */}
      <div className="fade-in mb-8 visible">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[11px] text-[#999]">{stepLabel}</p>
        </div>
        <div className="w-full h-[3px] bg-[#e5e5e5] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1773b4] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 質問ステップ（STEP 1〜6） */}
      {step < STEP_PROFILE && (
        <div key={step} className="step-enter step-active">
          <p className="text-[20px] sm:text-[24px] font-bold text-black leading-[1.4] mb-6">
            {QUESTIONS[step].q}
          </p>
          <div className="space-y-2.5">
            {QUESTIONS[step].options.map((option) => {
              const selected = answers[step] === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectAnswer(option)}
                  className={`w-full text-left px-5 py-4 rounded-[12px] border-2 text-[14px] font-medium transition-all cursor-pointer ${
                    selected
                      ? "border-[#1773b4] bg-[#eaf3fa] text-[#1773b4]"
                      : "border-[#e5e5e5] bg-[#f7f7f7] text-black hover:border-[#1773b4]"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {step > 0 && (
            <button
              type="button"
              onClick={back}
              className="mt-5 text-[13px] text-[#999] hover:text-[#1773b4] transition-colors cursor-pointer"
            >
              ← 前の質問にもどる
            </button>
          )}
        </div>
      )}

      {/* 入力ステップ1（STEP 7）: お名前・会社名・部署 */}
      {step === STEP_PROFILE && (
        <div key="profile" className="step-enter step-active">
          <p className="text-[20px] sm:text-[24px] font-bold text-black leading-[1.4] mb-2">
            あと少しです。お送り先を教えてください
          </p>
          <p className="text-[13px] text-[#999] mb-6">
            ご回答にあわせた資料をお送りします（所要1分）。
          </p>
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
                お名前{requiredBadge}
              </label>
              <input
                type="text"
                placeholder="例：山田 太郎"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
                会社名{requiredBadge}
              </label>
              <input
                type="text"
                placeholder="例：株式会社○○○○"
                value={form.company}
                onChange={(e) => setField("company", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
                部署・役職{optionalBadge}
              </label>
              <input
                type="text"
                placeholder="例：営業部 部長"
                value={form.dept}
                onChange={(e) => setField("dept", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => profileValid && setStep(STEP_CONTACT)}
            disabled={!profileValid}
            className={`mt-6 w-full px-5 py-4 rounded-[12px] text-[15px] font-bold text-white transition-colors ${
              profileValid
                ? "bg-[#1773b4] hover:bg-[#0f5a92] cursor-pointer"
                : "bg-[#cbd5e0] cursor-not-allowed"
            }`}
          >
            次へ
          </button>
          <button
            type="button"
            onClick={back}
            className="mt-4 text-[13px] text-[#999] hover:text-[#1773b4] transition-colors cursor-pointer"
          >
            ← 前にもどる
          </button>
        </div>
      )}

      {/* 入力ステップ2（STEP 8）: 連絡先・送信 */}
      {step === STEP_CONTACT && (
        <div key="contact" className="step-enter step-active">
          <p className="text-[20px] sm:text-[24px] font-bold text-black leading-[1.4] mb-6">
            ご連絡先を入力してください
          </p>
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
                電話番号{requiredBadge}
              </label>
              <input
                type="tel"
                placeholder="例：09012345678"
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
                メールアドレス{requiredBadge}
              </label>
              <input
                type="email"
                placeholder="例：sample@example.com"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
                ご質問・ご要望{optionalBadge}
              </label>
              <textarea
                rows={3}
                placeholder="導入時期・想定コール数・課題など、お気軽にご記入ください"
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={submit}
            disabled={!contactValid}
            className={`mt-6 w-full px-5 py-4 rounded-[12px] text-[15px] font-bold text-white transition-colors ${
              contactValid
                ? "bg-[#1773b4] hover:bg-[#0f5a92] cursor-pointer"
                : "bg-[#cbd5e0] cursor-not-allowed"
            }`}
          >
            資料を受け取る
          </button>
          <button
            type="button"
            onClick={back}
            className="mt-4 text-[13px] text-[#999] hover:text-[#1773b4] transition-colors cursor-pointer"
          >
            ← 前にもどる
          </button>
        </div>
      )}

      {/* 完了画面 */}
      {step >= STEP_DONE && (
        <div className="step-enter step-active text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf3fa]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1773b4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-[20px] sm:text-[24px] font-bold text-black leading-[1.4] mb-3">
            メールソフトを起動しました
          </p>
          <p className="text-[14px] text-[#4d4d4d] leading-[1.8] mb-7">
            内容が入力済みのメールが開きます。そのまま
            <br className="hidden sm:block" />
            <span className="font-bold text-black">送信</span>
            してください。担当者より折り返しご連絡いたします。
          </p>
          {mailtoHref && (
            <a
              href={mailtoHref}
              className="inline-block w-full px-5 py-4 rounded-[12px] text-[15px] font-bold text-white bg-[#1773b4] hover:bg-[#0f5a92] transition-colors no-underline"
            >
              メールが開かない場合はこちら
            </a>
          )}
          <button
            type="button"
            onClick={reset}
            className="mt-4 block w-full text-[13px] text-[#999] hover:text-[#1773b4] transition-colors cursor-pointer"
          >
            最初からやり直す
          </button>
        </div>
      )}
    </>
  );
}
