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

const TOTAL = QUESTIONS.length;

export default function DiagnosisQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const done = step >= TOTAL;

  const select = (option: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = option;
      return next;
    });
    setStep((s) => s + 1);
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const scrollToForm = () => {
    document
      .getElementById("document-request")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const current = QUESTIONS[step];
  const progress = done ? 100 : ((step + 1) / TOTAL) * 100;

  return (
    <>
      {/* progress */}
      <div className="fade-in mb-8 visible">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[11px] text-[#999]">
            {done ? "完了" : `STEP ${step + 1} / ${TOTAL}`}
          </p>
        </div>
        <div className="w-full h-[3px] bg-[#e5e5e5] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1773b4] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* question / completion */}
      {!done ? (
        <div key={step} className="step-enter step-active">
          <p className="text-[20px] sm:text-[24px] font-bold text-black leading-[1.4] mb-6">
            {current.q}
          </p>
          <div className="space-y-2.5">
            {current.options.map((option) => {
              const selected = answers[step] === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => select(option)}
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
      ) : (
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
            ご回答ありがとうございます
          </p>
          <p className="text-[14px] text-[#4d4d4d] leading-[1.8] mb-7">
            いただいた内容をもとに、最適なプランと活用事例をまとめた資料を
            <br className="hidden sm:block" />
            ご用意しています。下記フォームからお受け取りください。
          </p>
          <button
            type="button"
            onClick={scrollToForm}
            className="w-full px-5 py-4 rounded-[12px] text-[15px] font-bold text-white bg-[#1773b4] hover:bg-[#0f5a92] transition-colors cursor-pointer"
          >
            資料を受け取る
          </button>
          <button
            type="button"
            onClick={() => {
              setAnswers([]);
              setStep(0);
            }}
            className="mt-4 text-[13px] text-[#999] hover:text-[#1773b4] transition-colors cursor-pointer"
          >
            最初からやり直す
          </button>
        </div>
      )}
    </>
  );
}
