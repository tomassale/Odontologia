export interface Subsection {
  id: string;
  subtitle: string;
  items: string[];
}

export interface LegalDataProps {
  id: string;
  title: string;
  description: string;
  subsections: Subsection[];
}

interface Props {
  data: LegalDataProps;
}

export const LegalSection = ({ data }: Props) => {
  return (
    <section className="legal-section">
      <h2>{data.title}</h2>
      
      {data.description && <p className="section-description">{data.description}</p>}
      
    {data.subsections?.map((sub) => (
      <div key={sub.id} className="legal-subsection">
        <h3>{sub.subtitle}</h3>
        <ul>
          {sub.items?.map((item, index) => (
            <li key={`${sub.id}-item-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
    </section>
  );
};