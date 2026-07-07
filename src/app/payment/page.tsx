import Link from "next/link";
import { PageShell, Section, LockedFeatureCard } from "@/components/layout/AppChrome";
import { Badge, Input } from "@/components/ui/Primitives";

export default function PaymentPage() {
  return (
    <PageShell>
      <section className="payment-shell">
        <div>
          <Badge tone="warning">Закрыто в Slice 1</Badge>
          <h1>Оплата один раз, без подписки</h1>
          <p>
            AI-версия резюме стоит 99 ₽ один раз. Сейчас это только визуальный экран: платёжный модуль, провайдер и
            вебхуки не подключены.
          </p>
          <div className="payment-list">
            <span>5 строгих пресетов</span>
            <span>Бессрочная ссылка</span>
            <span>Личный кабинет</span>
            <span>PDF и DOCX позже</span>
          </div>
        </div>
        <form className="payment-card">
          <strong>AI-версия резюме · 99 ₽</strong>
          <label>Куда прислать доступ<Input placeholder="Email будет использоваться после подключения модуля" /></label>
          <button className="button" disabled type="button">
            Платёжный модуль будет подключён позже
          </button>
          <Link className="secondary-button" href="/constructor">
            Вернуться к бесплатному резюме
          </Link>
        </form>
      </section>
      <Section>
        <LockedFeatureCard title="Платёжный backend" text="Здесь намеренно нет создания платежей, редиректов и webhook-логики." />
      </Section>
    </PageShell>
  );
}
