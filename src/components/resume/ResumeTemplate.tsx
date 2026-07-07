import type { ResumeData } from "@/types/resume";
import { formatPeriod, languageLevelLabel } from "@/lib/resume/format";

interface ResumeTemplateProps {
  data: ResumeData;
  mode: "preview" | "print" | "public";
}

function hasText(value: string | undefined) {
  return Boolean(value && value.trim().length > 0);
}

function ContactBlock({ data }: { data: ResumeData }) {
  const contacts = [
    data.contacts.phone,
    data.contacts.email,
    data.contacts.city,
    data.contacts.telegram,
    data.contacts.website
  ].filter(hasText);

  return (
    <section className="resume-section">
      <h2>Контакты</h2>
      {contacts.length ? (
        contacts.map((item) => (
          <p key={item} style={{ margin: "0 0 7px" }}>
            {item}
          </p>
        ))
      ) : (
        <p className="resume-muted">Контакты появятся здесь.</p>
      )}
      {data.preferences.showSalary && hasText(data.personal.salary) ? (
        <p style={{ margin: "12px 0 0" }}>
          <strong>Зарплата:</strong> {data.personal.salary}
        </p>
      ) : null}
    </section>
  );
}

function SkillsBlock({ data }: { data: ResumeData }) {
  return (
    <section className="resume-section">
      <h2>Навыки</h2>
      {data.skills.length ? (
        <div className="skill-list">
          {data.skills.map((skill) => (
            <span className="skill-chip" key={skill.id}>
              {skill.name}
            </span>
          ))}
        </div>
      ) : (
        <p className="resume-muted">Добавьте ключевые навыки.</p>
      )}
    </section>
  );
}

function SideContent({ data, showPhoto }: { data: ResumeData; showPhoto: boolean }) {
  return (
    <aside className="resume-side">
      {showPhoto && data.photo?.selectedPath ? (
        <div className="photo-box">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Фото кандидата" src={data.photo.selectedPath} />
        </div>
      ) : null}
      <ContactBlock data={data} />
      <SkillsBlock data={data} />
      {data.languages.length ? (
        <section className="resume-section">
          <h2>Языки</h2>
          {data.languages.map((language) => (
            <p key={language.id} style={{ margin: "0 0 7px" }}>
              {language.name} - {languageLevelLabel(language.level)}
            </p>
          ))}
        </section>
      ) : null}
    </aside>
  );
}

function MainContent({ data }: { data: ResumeData }) {
  return (
    <main className="resume-main">
      <header>
        <h1 className="resume-name">{data.contacts.fullName || "Ваше имя"}</h1>
        <div className="resume-position">{data.contacts.position || "Желаемая должность"}</div>
      </header>

      {hasText(data.about) ? (
        <section className="resume-section">
          <h2>О себе</h2>
          <p style={{ whiteSpace: "pre-line" }}>{data.about}</p>
        </section>
      ) : null}

      <section className="resume-section">
        <h2>Опыт работы</h2>
        {data.experience.length ? (
          data.experience.map((item) => (
            <article key={item.id} style={{ marginBottom: 18 }}>
              <strong>{item.position}</strong>
              <div>
                {item.company}
                {item.city ? `, ${item.city}` : ""}
              </div>
              <div className="resume-muted">{formatPeriod(item.startDate, item.endDate, item.isCurrent)}</div>
              {item.description.length ? (
                <ul>
                  {item.description.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))
        ) : (
          <p className="resume-muted">Добавьте опыт или оставьте раздел пустым.</p>
        )}
      </section>

      <section className="resume-section">
        <h2>Образование</h2>
        {data.education.length ? (
          data.education.map((item) => (
            <article key={item.id} style={{ marginBottom: 14 }}>
              <strong>{item.institution || "Учебное заведение"}</strong>
              <div>{[item.degree, item.faculty, item.specialty].filter(Boolean).join(", ")}</div>
              <div className="resume-muted">{[item.startYear, item.endYear].filter(Boolean).join(" - ")}</div>
            </article>
          ))
        ) : (
          <p className="resume-muted">Добавьте образование.</p>
        )}
      </section>

      {data.courses.length ? (
        <section className="resume-section">
          <h2>Курсы</h2>
          {data.courses.map((item) => (
            <article key={item.id} style={{ marginBottom: 12 }}>
              <strong>{item.title}</strong>
              <div>{[item.organization, item.year].filter(Boolean).join(", ")}</div>
              {item.description ? <div className="resume-muted">{item.description}</div> : null}
            </article>
          ))}
        </section>
      ) : null}
    </main>
  );
}

export function ResumeTemplate({ data, mode }: ResumeTemplateProps) {
  const showPhoto = data.preferences.template === "start_photo" && data.preferences.showPhoto;
  const content = (
    <div className="resume-template">
      <SideContent data={data} showPhoto={showPhoto} />
      <MainContent data={data} />
    </div>
  );

  if (mode === "preview") {
    return (
      <div className="resume-preview-frame" data-testid="resume-preview-frame">
        <div className="resume-a4 preview" data-testid="resume-preview">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="resume-a4" data-testid="resume-preview">
      {content}
    </div>
  );
}
