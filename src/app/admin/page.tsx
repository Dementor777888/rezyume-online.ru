import { AdminShell } from "@/components/layout/AppChrome";
import { Badge } from "@/components/ui/Primitives";
import { adminMetrics } from "@/lib/product/mock";

export default function AdminPage() {
  return (
    <AdminShell title="Кабинет администратора">
      <div className="metric-grid">
        {adminMetrics.map(([label, value]) => (
          <div className="ui-card metric-card" key={label}>
            <Badge tone="neutral">{label}</Badge>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
