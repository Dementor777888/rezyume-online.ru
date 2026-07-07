import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type Tone = "brand" | "free" | "locked" | "neutral" | "warning";

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" }) {
  return (
    <button className={variant === "primary" ? "button" : variant === "secondary" ? "secondary-button" : "ghost-button"} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`ui-card ${className}`}>{children}</div>;
}

export function Badge({ children, tone = "brand" }: { children: ReactNode; tone?: Tone }) {
  return <span className={`ui-badge ui-badge--${tone}`}>{children}</span>;
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="ui-chip">{children}</span>;
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="ui-input" {...props} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="ui-input ui-textarea" {...props} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className="ui-input" {...props} />;
}

export function Checkbox({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="ui-checkbox">
      <input type="checkbox" {...props} /> <span>{label}</span>
    </label>
  );
}

export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <Card className="state-card">
      <Badge tone="neutral">Empty state</Badge>
      <h2>{title}</h2>
      <p>{text}</p>
    </Card>
  );
}

export function LoadingState({ title = "Загрузка" }: { title?: string }) {
  return (
    <Card className="state-card">
      <Badge tone="neutral">Loading</Badge>
      <h2>{title}</h2>
      <p>Состояние подготовлено для будущего подключения данных.</p>
    </Card>
  );
}

export function ErrorState({ title = "Что-то пошло не так" }: { title?: string }) {
  return (
    <Card className="state-card">
      <Badge tone="warning">Error</Badge>
      <h2>{title}</h2>
      <p>Показываем понятную ошибку, не раскрывая служебные детали.</p>
    </Card>
  );
}
