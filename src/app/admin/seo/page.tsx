import { AdminShell } from "@/components/layout/AppChrome";

export default function AdminSeoPage() {
  return (
    <AdminShell title="SEO-меты mock">
      <div className="ui-card table-card">
        <div className="table-row table-row--head"><span>Route</span><span>Title</span><span>State</span></div>
        <div className="table-row"><span>/primery/prodazhi</span><span>Резюме для продаж</span><span>mock</span></div>
        <div className="table-row"><span>/shablony/clean</span><span>Шаблон Чистый</span><span>locked</span></div>
      </div>
    </AdminShell>
  );
}
