import HeroParagraph from "@/components/HeroParagraph";
import { IllustrationImage } from "@/lib/types";
import Image from "next/image";

const illustrations: IllustrationImage[] = [ 
    {
        image_url: "/illustrations/women-city-safety-fear-pink.jpg"
    },
    {
        image_url: "/illustrations/postcard-hands-stitched-handmade.jpg"
    },
    {
        image_url: "/illustrations/zine-urban-research-design-feminist-archival.png"
    },
    {
        image_url: "/illustrations/masterplan-illustration-marialetrinidad-sustainability-regeneration-city-light-feminist.jpg"
    },
    {
        image_url: "/illustrations/sign-museum-signage-sign-information-visualization.jpg"
    },
    {
        image_url: "/illustrations/mt-illustration-friends-cozy-community.jpg"
    },
    {
        image_url: "/illustrations/mountain-peru-illustration-application-pillow-tufting.jpg"
    },
    {
        image_url: "/illustrations/illustration-bonn-kirschblueten-breitestr.jpg"
    },
    {
        image_url: "/illustrations/book-cover-design-ireland-cork-shandon.jpg"
    },
    {
        image_url: "/illustrations/data-visualization-datavisualization-map-cartography-spatial-exclusion-art-method-rotterdam.jpg"
    },
    {
        image_url: "/illustrations/cover-master-3to4-magazine-editorial-stitched-city-cork-shandon-ireland.jpg"
    },
    {
        image_url: "/illustrations/mt-illustration-mural-cork-ireland-shandon-heritage-art.png"
    },
    {
        image_url: "/illustrations/illustration-cologne-art-mural-2.jpg"
    },
    {
        image_url: "/illustrations/marialetrinidad-masterplan-illustration-marialetrinidad-sustainability-regeneration-city-light-feminist.jpg"
    },
    {
        image_url: "/illustrations/mt-illustration-typography.PNG"
    },
    {
        image_url: "/illustrations/critical_thought.jpg"
    },
    {
        image_url: "/illustrations/marialetrinidad-data-visualization-datavisualization-map-cartography-spatial-exclusion-art-method-rotterdam.jpg"
    },
    {
        image_url: "/illustrations/marialetrinidad-datavisualization-map-cartography-spatial-exclusion-art-method-rotterdam.jpg"
    },
]

export default function Illustration() {

    const paragraph = "I illustrate what data cannot hold: the hesitation before a dark alley, the warmth of a space made with care, the story behind a number. My illustrations are research outputs, communication tools, and acts of attention. They take the form of editorial images, report and book covers, maps, icons, signs, zines, and whatever else a story needs to be seen. If you have something that needs to become visual, I'd love to hear about it."
    return <div className="flex flex-col gap-8 mx-4 mb-24">
        <HeroParagraph paragraph={paragraph} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {illustrations.map((illustration) => (
                <Image key={illustration.image_url} src={illustration.image_url} alt="Illustration" width={600} height={800} />
            ))}
        </div>
    </div>
}