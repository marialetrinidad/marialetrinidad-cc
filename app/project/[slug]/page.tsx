import { projects } from "@/lib/projects"
import { Block } from "@/lib/types"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

function BlockRenderer({ block }: { block: Block }) {
    if (block.type === "paragraph") {
        return (
            <div className="mx-4 md:mx-12 flex flex-col gap-4">
                {block.title && <h3 className="bros-oskon text-2xl md:text-4xl">{block.title}</h3>}
                <p className="font-light max-w-[700px]">{block.paragraph}</p>
            </div>
        )
    }

    if (block.type === "image_paragraph") {
        const isLeft = block.image_orientation === "LEFT"
        return (
            <div className={`mx-4 md:mx-12 flex flex-col gap-8 md:gap-12 items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="w-full md:w-[45%] shrink-0">
                    {block.image_url
                        ? <Image src={block.image_url} alt={block.headline ?? ""} width={800} height={600} className="w-full h-auto" />
                        : <div className="w-full h-auto" />
                    }
                </div>
                <div className="flex flex-col gap-4 md:my-auto">
                    {block.headline && <h3 className="bros-oskon text-2xl md:text-4xl">{block.headline}</h3>}
                    {block.paragraph && <p className="font-light">{block.paragraph}</p>}
                </div>
            </div>
        )
    }

    if (block.type === "images") {
        return (
            <div className="flex flex-col md:flex-row gap-4 mx-4 md:mx-12">
                {block.images.map((img, i) => (
                    img.image_url
                        ? img.link
                            ? <a key={i} href={img.link} className="w-full"><Image key={i} src={img.image_url} alt="" width={800} height={600} className="w-full h-auto" /></a>
                            : <Image key={i} src={img.image_url} alt="" width={800} height={600} className="w-full h-auto" />
                        : <div className="w-full h-auto" />
                ))}
            </div>
        )
    }

    if (block.type === "iframe") {
    return (
        <div className="mx-4 md:mx-12 justify-center">
            <div className="w-full aspect-square md:aspect-[16/7]">
                <iframe
                    src={block.src}
                    className="w-full h-full"
                    style={{ border: "none" }}
                    allow="vr; gyroscope; accelerometer"
                    loading="lazy"
                />
            </div>
        </div>
        )
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) notFound()

    return (
        <div className="flex flex-col gap-16 my-12 md:my-24 mx-auto">
            <div className="flex flex-col gap-8 md:gap-16 mx-4 md:mx-12">
            <h1 className="bros-oskon text-3xl md:text-5xl tracking-wide max-w-full md:max-w-[75%]">{project.title}</h1>
            <Image
                src={project.hero_image_url}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto"
            />
            </div>

            <div className="flex flex-col gap-4 max-w-[700px] mx-4 md:mx-12">
                <span className="font-medium text-sm">{project.description.headline}</span>
                <h1 className="bros-oskon text-2xl md:text-4xl tracking-wide">{project.description.title}</h1>
                <p className="font-light">{project.description.paragraph_text}</p>
            </div>

            <div className="flex flex-col gap-16 md:gap-24 mt-8 md:mt-16">
                {project.blocks.map((block, i) => (
                    <BlockRenderer key={i} block={block} />
                ))}
            </div>
            <div className="mx-4 md:mx-12 flex flex-col gap-4">
                <a href="/" className="w-fit">
                    <div className="flex flex-row items-center gap-2 border-1 border-black rounded-full py-1 px-4 font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        <span>
                            BACK TO OVERVIEW
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}
