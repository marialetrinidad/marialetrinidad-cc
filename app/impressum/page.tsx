import HeroParagraph from "@/components/HeroParagraph";

const paragraph = "Impressum"

export default function Impressum() {
    return <div className="flex flex-col gap-8 mx-4 mb-24">
        <HeroParagraph paragraph={paragraph} />
    </div>
}