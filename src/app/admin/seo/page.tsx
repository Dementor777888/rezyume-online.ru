import { AdminShell } from "@/components/layout/AppChrome";

export default function AdminSeoPage() {
  return (
    <AdminShell title="SEO-меты">
      <div className="ui-card table-card">
        <div className="table-row table-row--head"><span>Маршрут</span><span>Title</span><span>Статус</span></div>
        <div className="table-row"><span>/primery/prodazhi</span><span>Резюме для продаж</span><span>черновик</span></div>
        <div className="table-row"><span>/shablony/clean</span><span>Шаблон Чистый</span><span>закрыт</span></div>
      </div>
    </AdminShell>
  );
}
