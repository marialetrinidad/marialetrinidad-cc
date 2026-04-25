import { projects } from "@/lib/projects"
import { Block } from "@/lib/types"
import Image from "next/image"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

function BlockRenderer({ block }: { block: Block }) {
    if (block.type === "paragraph") {
        return (
            <div className="mx-12 flex flex-col gap-4">
                {block.title && <h3 className="bros-oskon text-3xl">{block.title}</h3>}
                <p className="font-light max-w-[700px]">{block.paragraph}</p>
            </div>
        )
    }

    if (block.type === "image_paragraph") {
        const isLeft = block.image_orientation === "LEFT"
        return (
            <div className={`mx-12 flex gap-12 items-start ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                <div className="w-[45%] shrink-0">
                    {block.image_url
                        ? <Image src={block.image_url} alt={block.headline ?? ""} width={800} height={600} className="w-full h-auto" />
                        : <div className="w-full h-auto" />
                    }
                </div>
                <div className="flex flex-col gap-4 my-auto">
                    {block.headline && <h3 className="bros-oskon text-3xl">{block.headline}</h3>}
                    {block.paragraph && <p className="font-light">{block.paragraph}</p>}
                </div>
            </div>
        )
    }

    if (block.type === "images") {
        return (
            <div className="flex flex-row gap-4">
                {block.images.map((img, i) => (
                    img.image_url
                        ? <Image key={i} src={img.image_url} alt="" width={800} height={600} className="w-full h-auto" />
                        : <div className="w-full h-auto" />
                ))}
            </div>
        )
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) notFound()

    return (
        <div className="flex flex-col gap-16 mx-4 mb-24 mt-24 max-w-[1200px] mx-auto">
            <h1 className="bros-oskon text-5xl tracking-wide">{project.title}</h1>
            <Image
                src={project.hero_image_url}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto"
            />

            <div className="flex flex-col gap-4 max-w-[700px] mx-12">
                <span className="font-medium text-sm">{project.description.headline}</span>
                <h1 className="bros-oskon text-3xl tracking-wide">{project.description.title}</h1>
                <p className="font-light">{project.description.paragraph_text}</p>
            </div>

            <div className="flex flex-col gap-24 mt-16">
                {project.blocks.map((block, i) => (
                    <BlockRenderer key={i} block={block} />
                ))}
            </div>
        </div>
    )
}
