import { Pause, Play } from "lucide-react";
import type { AudioBriefing } from "@/data/audioBriefings";
import { usePersistentAudioPlayer } from "@/components/audio/usePersistentAudioPlayer";

interface AudioBriefingCardProps {
  briefing: AudioBriefing;
  compact?: boolean;
  className?: string;
}

const formatAudioTime = (value: number) => {
  if (!Number.isFinite(value) || value < 0) return "00:00";
  const mins = Math.floor(value / 60);
  const secs = Math.floor(value % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const AudioBriefingCard = ({ briefing, compact = false, className = "" }: AudioBriefingCardProps) => {
  const {
    canPlay,
    isPlaying,
    currentTime,
    duration,
    maxTime,
    toggle: handleToggle,
    seek: handleSeek,
    prime: handlePrime,
  } = usePersistentAudioPlayer(briefing);
  const timeLabel = duration > 0
    ? `${formatAudioTime(currentTime)} / ${formatAudioTime(duration)}`
    : briefing.duration;
  const rootWidthClass = compact ? "max-w-[20rem]" : "max-w-[28rem]";
  const cardClass = compact
    ? "rounded-xl px-2.5 py-1.5"
    : "rounded-2xl px-3 py-2";
  const controlGapClass = compact ? "gap-2" : "gap-2.5";
  const buttonClass = compact ? "w-7 h-7" : "w-8 h-8";
  const sliderShellClass = compact
    ? "h-7 min-w-[7rem] rounded-lg px-2"
    : "h-8 min-w-[8rem] rounded-xl px-2.5";
  const labelClass = compact
    ? "text-[10px] tracking-[0.06em]"
    : "text-[11px] tracking-[0.08em]";
  const timeClass = compact ? "text-[10px]" : "text-[11px]";
  const label = compact ? "Briefing" : briefing.shortLabel;

  return (
    <div id={briefing.id} className={`w-full ${rootWidthClass} ${className}`.trim()}>
      <div className={`group relative border border-border/60 bg-background/92 backdrop-blur-sm shadow-[0_14px_28px_-20px_rgba(0,0,0,0.55)] ${cardClass}`}>
        <div className={`relative flex items-center ${controlGapClass}`}>
          <button
            type="button"
            onClick={handleToggle}
            onMouseEnter={handlePrime}
            onFocus={handlePrime}
            onTouchStart={handlePrime}
            disabled={!canPlay}
            aria-label={`${isPlaying ? "Pause" : "Play"} ${briefing.shortLabel}`}
            className={`${buttonClass} rounded-full inline-flex items-center justify-center transition-colors shrink-0 ${
              canPlay
                ? "text-white shadow-sm"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
            style={canPlay ? { background: "linear-gradient(135deg, hsl(38 82% 50%), hsl(38 75% 45%))" } : undefined}
          >
            {isPlaying ? (
              <Pause className={compact ? "w-3 h-3" : "w-3.5 h-3.5"} />
            ) : (
              <Play className={`${compact ? "w-3 h-3" : "w-3.5 h-3.5"} ml-0.5`} />
            )}
          </button>

          <span className={`${labelClass} font-semibold uppercase text-foreground/80 whitespace-nowrap`}>
            {label}
          </span>

          <div className={`${sliderShellClass} flex-1 bg-muted/60 inline-flex items-center`}>
            <input
              type="range"
              min={0}
              max={maxTime}
              step={0.01}
              value={Math.min(currentTime, maxTime)}
              disabled={!canPlay}
              onChange={(e) => handleSeek(Number(e.target.value))}
              aria-label={`Seek ${briefing.shortLabel}`}
              className={`w-full h-1.5 appearance-none rounded-full ${
                canPlay ? "accent-[hsl(var(--forest))] cursor-pointer" : "accent-muted cursor-not-allowed"
              }`}
            />
          </div>

          <span className={`${timeClass} text-muted-foreground whitespace-nowrap tabular-nums`}>
            {canPlay ? timeLabel : `${briefing.duration} soon`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioBriefingCard;
