import { Project } from "@/lib/types";
import Image from "next/image";

interface WorkPreviewProps {
  project: Project
}

export default function WorkPreview({ project }: WorkPreviewProps) {

  return (
    <section className="w-full mx-auto flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col gap-4">
        <div className="flex flex-row gap-8 items-end">
          <div className="w-[65%]">
            <a href={project.link} className="w-fit">
              <Image src={project.big_image_url} alt={project.button_text} width={720} height={576} className="w-full h-auto" />
            </a>
          </div>
          <div className="w-[18%] mb-8">
            <Image src={project.small_image_url} alt={project.button_text} width={216} height={270} className="w-full h-auto" />
          </div>
        </div>
        <div className="mx-4 flex flex-col gap-4">
          <a href={project.link} className="w-fit">
            <div className="border-1 border-black rounded-full py-1 px-4 font-medium">{project.button_text}</div>
          </a>
          <p className="w-[50%] font-light">{project.paragraph_text}</p>
        </div>
      </div>
    </section>
  );
}
