export interface LegalSection {
  heading?: string;
  paragraphs: string[];
}

export interface LegalTemplateProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalTemplate({
  title,
  lastUpdated,
  sections,
}: LegalTemplateProps) {
  return (
    <main className="py-14 bg-eumedical-light-grey/50">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">

        {/* Document Title */}
        <h1 className="font-dinosaur text-3xl md:text-4xl text-eumedical-dark-blue mb-4">
          {title}
        </h1>
        <p className="font-arial text-sm text-gray-500 border-b border-gray-100 pb-8 mb-8">
          {lastUpdated}
        </p>

        {/* Document body */}
        <div className="space-y-2">
          {sections.map((section, sectionIndex) => (
            <section key={sectionIndex}>
              {section.heading && (
                <h2 className="font-didact text-xl font-bold text-eumedical-dark-blue mt-8 mb-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p 
                  key={paragraphIndex} 
                  className="font-arial text-base text-gray-700 leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
