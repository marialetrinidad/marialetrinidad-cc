import { Project } from "@/lib/types";
import Image from "next/image";

interface HeroParagraphProps {
  paragraph: string
}

export default function HeroParagraph({ paragraph }: HeroParagraphProps) {

  return (
    <section className="w-full mx-auto flex justify-center my-12">
      <div className="max-w-[600px]">
        <p className="text-3xl/10 bros-oskon tracking-wide">{paragraph}</p>
      </div>
    </section>
  );
}
