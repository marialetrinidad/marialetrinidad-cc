import HeroParagraph from "@/components/HeroParagraph";
import { LegalParagraph } from "@/lib/types";

const paragraph = "Datenschutz"

const legal_paragraphs: LegalParagraph[] = [
    {
        title: "Überschrift",
        paragraphs: [
            "Absatz 1",
            "Absatz 2",
            "Absatz 3",
            "Absatz 4"
        ]
    }
]

export default function Datenschutz() {
    return (
        <div className="flex flex-col gap-8 mx-4 mb-24">
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
        </div>
    )
}