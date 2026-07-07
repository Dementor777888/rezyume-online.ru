import Link from "next/link";
import { PageShell, Section } from "@/components/layout/AppChrome";
import { Badge } from "@/components/ui/Primitives";

export default function PaymentSuccessPage() {
  return (
    <PageShell>
      <Section eyebrow="Оплата" title="Экран успеха оплаты" text="Маршрут подготовлен визуально, но реальная успешная оплата не имитируется.">
        <div className="ui-card success-shell">
          <Badge tone="locked">Закрыто в Slice 1</Badge>
          <h2>Файлы и доступ появятся после подключения платежей</h2>
          <p>Бесплатный PDF доступен в рабочем конструкторе без оплаты и регистрации.</p>
          <Link className="button" href="/constructor">
            Вернуться в конструктор
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
