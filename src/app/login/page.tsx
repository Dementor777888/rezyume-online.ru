import Link from "next/link";
import { PageShell, Section } from "@/components/layout/AppChrome";
import { Input } from "@/components/ui/Primitives";

export default function LoginPage() {
  return (
    <PageShell>
      <Section eyebrow="Auth shell" title="Вход в личный кабинет" text="Кабинет будет доступен после подключения платного контура. Сейчас это UI-only экран.">
        <form className="auth-card">
          <label>Контакт для входа<Input placeholder="Будет подключено позже" /></label>
          <label>Пароль<Input placeholder="Пароль из письма" type="password" /></label>
          <button className="button" disabled type="button">
            Вход будет подключён позже
          </button>
          <Link href="/constructor">Продолжить бесплатно без регистрации</Link>
        </form>
      </Section>
    </PageShell>
  );
}
