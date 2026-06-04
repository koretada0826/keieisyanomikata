import { useRef, useState } from "react";

function formatTime(t: number) {
  if (!isFinite(t) || t < 0) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      void a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const v = Number(e.target.value);
    a.currentTime = v;
    setCurrent(v);
  };

  const pct = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-4 sm:gap-5 rounded-[16px] border border-[#e5e5e5] bg-white px-5 py-4 sm:px-7 sm:py-5 shadow-[0_4px_20px_rgba(23,115,180,0.08)]">
      {/* 再生 / 一時停止ボタン */}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "一時停止" : "再生"}
        className="shrink-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#1773b4] text-white hover:bg-[#0f5a92] transition-colors cursor-pointer shadow-[0_4px_14px_rgba(23,115,180,0.4)]"
      >
        {playing ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}>
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden={true} style={{ marginLeft: 2 }}>
            <path d="M7 5.5v13a1 1 0 0 0 1.54.84l10-6.5a1 1 0 0 0 0-1.68l-10-6.5A1 1 0 0 0 7 5.5Z" />
          </svg>
        )}
      </button>

      {/* シークバー＋時間 */}
      <div className="flex-1 min-w-0">
        <div className="relative h-2">
          {/* トラック背景 */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-1.5 rounded-full bg-[#d9e6f0] overflow-hidden">
            <div
              className="h-full bg-[#1773b4] rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>
          {/* つまみ */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-[#1773b4] shadow-[0_1px_4px_rgba(0,0,0,0.3)] pointer-events-none"
            style={{ left: `${pct}%` }}
          />
          {/* 操作用の透明レンジ */}
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.05}
            value={current}
            onChange={onSeek}
            aria-label="再生位置"
            className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[12px] font-medium text-[#888] tabular-nums">
          <span>{formatTime(current)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onEnded={() => {
          setPlaying(false);
          setCurrent(0);
        }}
      />
    </div>
  );
}
