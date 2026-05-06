import HeroParagraph from "@/components/HeroParagraph";
import { LegalParagraph } from "@/lib/types";

const paragraph = "Impressum"

const legal_paragraphs: LegalParagraph[] = [
    {
        title: "Impressum",
        paragraphs: [
            "Maria Alejandra Trinidad Avila, Viktoriastraße 28 | 52066 Aachen",
            "Kontakt: maria.atrinidad@gmail.com",
            "Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV: Maria Alejandra Trinidad Avila | Adresse wie oben",
            "Hinweis: Diese Website dient ausschließlich der Präsentation persönlicher Arbeiten und Projekte.",
        ]
    }
]

export default function Impressum() {
    return (
        <div className="flex flex-col gap-2 mx-4 mb-24">
            <HeroParagraph paragraph={paragraph} />
            <div className="flex justify-center">
                <div className="max-w-[850px] w-full flex flex-col gap-12">
                    {legal_paragraphs.map((section, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <h2 className="bros-oskon text-xl">{section.title}</h2>
                            {section.paragraphs.map((p, j) => (
                                <p key={j} className="font-light text-base leading-relaxed">{p}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        
             <div className="mx-4 md:mx-12 flex flex-col gap-4 mt-12">
                <a href="/" className="w-fit">
                    <div className="flex flex-row items-center gap-2 border border-black rounded-full py-1 px-4 font-medium">
                        <span>← BACK TO OVERVIEW</span>
                    </div>
                </a>
            </div>

        </div>
    )
}