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
        image_url: "/illustrations/mt-illustration-friends-cozy-community.jpg"
    },
    {
        image_url: "/illustrations/mountain-peru-illustration-application-pillow-tufting.jpg"
    },
    {
        image_url: "/illustrations/illustration-bonn-kirschblueten-breitestr.jpg"
    },
    {
        image_url: "/illustrations/mt-illustration-typography.PNG"
    },
    {
        image_url: "/illustrations/mt-illustration-mothersday.PNG"
    },
    {
        image_url: "/illustrations/book-cover-design-ireland-cork-shandon.jpg"
    },
    {
        image_url: "/illustrations/sign-museum-signage-sign-information-visualization.jpg"
    },
    {
        image_url: "/illustrations/mt-illustration-mural-cork-ireland-shandon-heritage-art.png"
    },
    {
        image_url: "/illustrations/mt-illustration-family-pencil.jpg"
    },
    {
        image_url: "/illustrations/critical_thought.jpg"
    },
    {
        image_url: "/illustrations/illustration-character-fresh.jpg"
    },
    {
        image_url: "/illustrations/illustration-cologne-art-mural-2.jpg"
    },
    {
        image_url: "/illustrations/illustration-portfolio-summer-euro.jpg"
    },
    {
        image_url: "/illustrations/mt-illustration-brunch-friends.PNG"
    },
    {
        image_url: "/design/mt-illustration-summer-vibes.PNG"
    },
    {
        image_url: "/illustrations/mt-digital-illustration-family.jpg"
    },
]

export default function Illustration() {

    const paragraph = "Illustration is more than just a passion for me. I pour a part of myself into each piece, expressing stories through vibrant colors and intricate details - and I am delighted to share it with you."

    return <div className="flex flex-col gap-8 mx-4 mb-24">
        <HeroParagraph paragraph={paragraph} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {illustrations.map((illustration) => (
                <Image key={illustration.image_url} src={illustration.image_url} alt="Illustration" width={600} height={800} />
            ))}
        </div>
    </div>
}