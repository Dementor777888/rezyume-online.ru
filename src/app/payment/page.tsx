import Link from "next/link";
import { PageShell, Section, LockedFeatureCard } from "@/components/layout/AppChrome";
import { Badge, Input } from "@/components/ui/Primitives";

export default function PaymentPage() {
  return (
    <PageShell>
      <section className="payment-shell">
        <div>
          <Badge tone="warning">UI-only</Badge>
          <h1>Оплата один раз. Без подписки. 99 ₽</h1>
          <p>
            Экран подготовлен визуально по design_system. Платёжный модуль, провайдер оплаты и вебхуки не подключены.
          </p>
          <div className="payment-list">
            <span>5 locked-шаблонов</span>
            <span>Бессрочная ссылка</span>
            <span>Личный кабинет</span>
            <span>Дополнительные форматы позже</span>
          </div>
        </div>
        <form className="payment-card">
          <label>Контакт для будущего кабинета<Input placeholder="Будет использоваться после подключения модуля" /></label>
          <details>
            <summary>У меня есть промокод</summary>
            <Input placeholder="Поле UI-only" />
          </details>
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
