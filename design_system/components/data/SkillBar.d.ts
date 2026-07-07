export interface SkillBarProps {
  label: string;
  level?: number;
  max?: number;
  color?: string;
  /** Text color for the label — override on dark/colored backgrounds (e.g. "#fff" on a dark sidebar). Defaults to var(--ink), which only has enough contrast on light backgrounds. */
  labelColor?: string;
  /** Color of the unfilled track segments. Defaults to var(--line). */
  trackColor?: string;
}

export function SkillBar(props: SkillBarProps): JSX.Element;
