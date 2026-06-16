import { useState } from "react";

const ACCESS_KEY = "674fd906-41b2-43a7-b4ba-da680df31659";

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

const EMPTY: FormState = {
  name: "",
  company: "",
  dept: "",
  phone: "",
  email: "",
  message: "",
};

export default function DocumentRequestForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const setField = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const valid =
    form.name.trim() !== "" &&
    form.company.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.email.trim() !== "";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || submitting) return;
    setSubmitting(true);
    setError("");

    const payload = {
      access_key: ACCESS_KEY,
      subject: `【資料請求】${form.company} ${form.name} 様`,
      from_name: "経営者のミカタ LP（資料請求）",
      お名前: form.name,
      会社名: form.company,
      "部署・役職": form.dept || "（未記入）",
      電話番号: form.phone,
      メールアドレス: form.email,
      "ご質問・ご要望": form.message || "（なし）",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
      } else {
        setError("送信に失敗しました。お手数ですが時間をおいて再度お試しください。");
      }
    } catch {
      setError("通信エラーが発生しました。ネットワークをご確認のうえ再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="fade-in bg-white border border-[#e5e5e5] rounded-[16px] p-8 sm:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-center visible">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf3fa]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1773b4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-[20px] sm:text-[24px] font-bold text-black leading-[1.4] mb-3">
          送信が完了しました
        </p>
        <p className="text-[14px] text-[#4d4d4d] leading-[1.8]">
          ご請求ありがとうございます。担当者より、ご記入のメールアドレス宛に
          <br className="hidden sm:block" />
          資料をお送りいたします。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="fade-in bg-white border border-[#e5e5e5] rounded-[16px] p-6 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] visible"
    >
      <div className="space-y-4 sm:space-y-5 mb-5">
        <div>
          <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
            お名前{requiredBadge}
          </label>
          <input
            required
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
            required
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
        <div>
          <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
            電話番号{requiredBadge}
          </label>
          <input
            required
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
            required
            type="email"
            placeholder="例：sample@example.com"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="flex items-center gap-2 text-[12px] font-bold text-black mb-1.5">
          ご質問・ご要望{optionalBadge}
        </label>
        <textarea
          rows={4}
          placeholder="導入時期・想定コール数・課題など、お気軽にご記入ください"
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>
      {error && (
        <p className="mb-4 text-[13px] text-[#d33] leading-[1.6] text-center">{error}</p>
      )}
      <button
        type="submit"
        disabled={!valid || submitting}
        className={`btn-accent w-full text-center text-[14px] ${
          valid && !submitting ? "cursor-pointer" : "opacity-60 cursor-not-allowed"
        }`}
      >
        {submitting ? "送信中…" : "資料を受け取る"}
      </button>
      <p className="text-[11px] text-[#999] mt-4 text-center leading-[1.7]">
        入力情報は資料送付・サービスのご案内にのみ使用し、第三者に提供することはありません。
      </p>
    </form>
  );
}
