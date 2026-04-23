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

const paragraph = "Hey there! I'm Maria, a designer, illustrator and urban researcher interested in how cities can become more caring, inclusive and human. Ready to create something together?"

const description_paragraphs: string[] = [
    "My background is in Product Design (BA, University of Applied Sciences Aachen), where I first learned to design objects and experiences that put people at the center. Over time, my curiosity expanded from designing products to thinking about the spaces and systems that shape everyday life in cities.",
    "I’m currently pursuing a Joint Master’s in Redesigning Post-Industrial Cities, a multidisciplinary programme across Germany, Ireland and the Netherlands. My work explores feminist urbanism, participatory design and placemaking as ways for communities to reclaim and co-create their public spaces.",
    "With experience across spatial, product, UX and integrated design, I enjoy moving between digital and physical environments. I’m especially interested in translating everyday experiences into visual and spatial strategies—through mapping, storytelling, and collaborative design processes.",
    "Curious by nature and passionate about collaboration, I see design as a tool for connection, empathy and care — a way to shape environments that truly reflect the people who inhabit them.",
    "If you’d like to collaborate, exchange ideas, or talk about cities and belonging, I’d love to hear from you."
]


export default function About() {
    return <div className="flex flex-col gap-8 mx-4 mb-24">
        <HeroParagraph paragraph={paragraph} />
        <div className="mx-4 grid grid-cols-2 gap-4">
            <Image className="rotate-180" src="/portrait.jpg" alt="Portrait" width={600} height={1000} />
            <div className="flex flex-col gap-24">
                <div className="flex flex-col gap-8">
                    {description_paragraphs.map((description_paragraph) => (
                        <p className="font-roboto font-light">{description_paragraph}</p>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-semibold">CLIENTS</span>
                    {clients.map((client) => (
                        <div className="flex flex-col">
                            <span className="font-light">{client.label}</span>
                            <a href={client.url}>
                                <span className="underline font-light">{client.url_text}</span>
                            </a>
                        </div>
                    ))}
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