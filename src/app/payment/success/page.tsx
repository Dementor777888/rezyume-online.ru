import Link from "next/link";
import { PageShell, Section } from "@/components/layout/AppChrome";
import { Badge } from "@/components/ui/Primitives";

export default function PaymentSuccessPage() {
  return (
    <PageShell>
      <Section eyebrow="Success shell" title="Экран успеха оплаты" text="Визуальная заглушка для будущего paid flow. Реальная успешная оплата не имитируется.">
        <div className="ui-card success-shell">
          <Badge tone="locked">Mock state</Badge>
          <h2>Файлы и доступ появятся после подключения платежей</h2>
          <p>Сейчас этот маршрут нужен, чтобы навигация будущего сценария не была битой.</p>
          <Link className="button" href="/constructor">
            Вернуться в конструктор
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
