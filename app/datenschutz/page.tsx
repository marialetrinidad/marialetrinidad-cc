import HeroParagraph from "@/components/HeroParagraph";
import { LegalParagraph } from "@/lib/types";

const paragraph = "Datenschutz"

const legal_paragraphs: LegalParagraph[] = [
    {
        title: "Datenschutzerklärung",
        paragraphs: [
            "Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Website kann grundsätzlich ohne Angabe personenbezogener Daten genutzt werden.",
            "1. Verantwortliche Person:",
            "Maria Alejandra Trinidad Avila maria.atrinidad@gmail.com",
            "2. Hosting: Diese Website wird bei einem externen Dienstleister (Webhoster) gehostet. Beim Aufruf der Website werden automatisch Informationen durch den Server erfasst (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp). Diese Daten dienen der technischen Bereitstellung und Sicherheit der Website.",
            "3. Kontaktaufnahme: Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.",
            "4. Cookies: Diese Website verwendet ggf. technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind.",
            "5. Ihre Rechte: Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten. Bei Fragen können Sie sich jederzeit per E-Mail an mich wenden."
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