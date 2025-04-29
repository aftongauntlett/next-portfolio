interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <h2 className="text-3xl mb-4">{title}</h2>
      {children}
    </section>
  );
}
