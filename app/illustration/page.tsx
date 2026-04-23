import HeroParagraph from "@/components/HeroParagraph";
import { IllustrationImage } from "@/lib/types";
import Image from "next/image";

const illustrations: IllustrationImage[] = [
    {
        image_url: "/illustrations/critical_thought.jpg"
    },
]

export default function Illustration() {

    const paragraph = "Illustration is more than just a passion for me. I pour a part of myself into each piece, expressing stories through vibrant colors and intricate details - and I am delighted to share it with you."

    return <div className="flex flex-col gap-8 mx-4 mb-24">
        <HeroParagraph paragraph={paragraph} />
        <div className="grid grid-cols-3 gap-4">
            {illustrations.map((illustration) => (
                <Image key={illustration.image_url} src={illustration.image_url} alt="Illustration" width={600} height={800} />
            ))}
        </div>
    </div>
}