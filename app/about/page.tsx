import HeroParagraph from "@/components/HeroParagraph";
import { Client } from "@/lib/types";
import Image from "next/image";

const clients: Client[] = 
[
    {
        label: "yellow design | yellow lab Cologne",
        url_text: "yellowdesign.com",
        url: "https://yellowdesign.com"
    },
    {
        label: "248 Studios",
        url_text: "248studios.com",
        url: "https://248studios.com"
    },
    {
        label: "Artletic Studios",
        url_text: "artletic-studios.com",
        url: "https://artletic-studios.com"
    },
    {
        label: "vabula",
        url_text: "vabula.de",
        url: "https://vabula.de"
    },
    {
        label: "Ensys S.A.C.",
        url_text: "ensys.pe",
        url: "https://ensys.pe"
    },
    {
        label: "academa GmbH",
        url_text: "academa.de",
        url: "https://academa.de"
    },
    {
        label: "Snor Studio",
        url_text: "snor_studio",
        url: "https://www.instagram.com/snor_studio"
    },
    {
        label: "Tullius Bestattungen",
        url_text: "tullius-bestattungen.de",
        url: "https://tullius-bestattungen.de"
    },
    {
        label: "Notare in Brühl",
        url_text: "notare-bruehl.de",
        url: "https://notare-bruehl.de"
    },
    {
        label: "BaumEntscheid",
        url_text: "baumentscheid.de",
        url: "https://baumentscheid.de"
    },
]

const paragraph = "Hi there! I'm Mariale and I turn research into stories people can actually feel. Ready to create something together?"

const description_paragraphs: string[] = [
    "I'm a designer, illustrator, urban researcher and I turn research into stories people can feel.",
    "With a background in Product Design (BA, University of Applied Sciences Aachen) and a MSc in Redesigning Post-Industrial Cities, a multidisciplinary programme across Germany, Ireland and the Netherlands; I work at the intersection of design, research, and communication.",
    "My work is about taking complex ideas, data, and lived experiences and making them visible, legible, and compelling for broader audiences. I do this through illustration, data visualization, mapping, zines, booklets, websites, and audio storytelling. And moving between digital and physical formats depending on what the story needs.",
    "I work with researchers, institutions, organizations, and communities who have something important to say and need help saying it in a way that reaches beyond the page.",
    "If you have a project, a dataset, a report, or a research process that deserves a wider audience, I'd love to hear about it!"
]


export default function About() {
    return <div className="flex flex-col gap-8 mx-4 mb-24">
        <HeroParagraph paragraph={paragraph} />
        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image className="rotate-180 w-full h-auto" src="/portrait.jpg" alt="Portrait" width={600} height={1000} />
            <div className="flex flex-col gap-24">
                <div className="flex flex-col gap-8">
                    {description_paragraphs.map((description_paragraph) => (
                        <p key={description_paragraph} className="font-roboto font-light">{description_paragraph}</p>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-semibold">CLIENTS</span>
                    {clients.map((client) => (
                        <div key={client.label} className="flex flex-col">
                            <span className="font-light">{client.label}</span>
                            <a href={client.url}>
                                <span className="underline font-light">{client.url_text}</span>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-semibold">CONFERENCES</span>
                    <div className="flex flex-row gap-1">
                        <span className="font-light">threads: cities of care | RGS-IBG Annual International Conference, London, September 2026. Session: Designing Pluriversality in Times of Crisis: Envisioning Spatial Justice Through Alternative Cartographies.</span>
                    </div>
                    <div className="flex flex-row gap-1">
                        <span className="font-light">Everyday Life as Expertise: Feminist Co-Creation in a Historic Neighbourhood | Future City Regions Conference, RWTH Aachen, November 2026.</span>
                    </div>
                </div>
                 <div className="flex flex-col gap-4">
                    <span className="font-semibold">LET'S GET IN TOUCH</span>
                    <a href="mailto:maria.atrinidad@gmail.com">
                        <span className="underline font-light">maria.atrinidad@gmail.com</span>
                    </a>
                    <div className="flex flex-row gap-1">
                        <span className="font-light">Connect on</span>
                        <a href="https://www.linkedin.com/in/maria-a-trinidad">
                            <span className="underline font-light">Linkedin</span>
                        </a>
                    </div>
                    <div className="flex flex-row gap-1">
                        <span className="font-light">Follow me on</span>
                        <a href="https://www.instagram.com/marialetrinidad">
                            <span className="underline font-light">Instagram</span>
                        </a>
                    </div>
             </div>
        </div>
    </div>
    </div>
}