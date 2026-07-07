import { AdminShell } from "@/components/layout/AppChrome";
import { articles, catalogSections } from "@/lib/product/mock";

export default function AdminContentPage() {
  return (
    <AdminShell title="Контент mock">
      <div className="content-grid">
        {[...catalogSections.map((item) => item.name), ...articles.map((item) => item.title)].map((title) => (
          <div className="ui-card content-card" key={title}>
            <h3>{title}</h3>
            <p>Карточка контента без write-action.</p>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
