import { PageShell, Section, LockedFeatureCard } from "@/components/layout/AppChrome";
import { Input, Textarea } from "@/components/ui/Primitives";

export default function SupportPage() {
  return (
    <PageShell>
      <section className="catalog-hero">
        <span className="eyebrow">Поддержка</span>
        <h1>Помощь по резюме и PDF</h1>
        <p>Форма визуальная: отправку сообщений и email-интеграции не подключаем в этом каркасе.</p>
      </section>
      <Section>
        <div className="support-grid">
          <form className="ui-card support-form">
            <label>Ваше имя<Input placeholder="Анна" /></label>
            <label>Контакт для ответа<Input placeholder="Telegram или телефон" /></label>
            <label>Сообщение<Textarea placeholder="Опишите вопрос" rows={6} /></label>
            <button className="button" disabled type="button">
              Отправка будет подключена позже
            </button>
          </form>
          <LockedFeatureCard title="Telegram bot" text="В design_system предусмотрена поддержка через бота. Подключение реального канала будет отдельным этапом." />
        </div>
      </Section>
    </PageShell>
  );
}
