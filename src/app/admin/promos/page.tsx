import { AdminShell } from "@/components/layout/AppChrome";

export default function AdminPromosPage() {
  return (
    <AdminShell title="Промокоды mock">
      <div className="ui-card table-card">
        <div className="table-row table-row--head"><span>Код</span><span>Тип</span><span>Статус</span></div>
        <div className="table-row"><span>FREE_ACCESS</span><span>preview-only</span><span>disabled</span></div>
        <div className="table-row"><span>PARTNER99</span><span>mock</span><span>disabled</span></div>
      </div>
    </AdminShell>
  );
}
