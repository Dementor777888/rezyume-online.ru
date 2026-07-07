import Link from "next/link";
import { PageShell, Section } from "@/components/layout/AppChrome";
import { Input } from "@/components/ui/Primitives";

export default function LoginPage() {
  return (
    <PageShell>
      <Section eyebrow="Вход" title="Вход в кабинет" text="Пароль будет выдаваться после подключения AI-версии. Сейчас это заблокированный экран без авторизации.">
        <form className="auth-card">
          <label>Email<Input placeholder="Будет подключено позже" /></label>
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
