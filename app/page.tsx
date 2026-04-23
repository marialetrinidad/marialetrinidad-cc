import WorkPreview from "@/components/WorkPreview"
import { Project } from "@/lib/types"
import Image from "next/image"

const projects: Project[] = [
   {
      big_image_url: "/big_image.png",
      small_image_url: "/small_image.png",
      button_text: "LISTEN TO WHAT FEAR SOUNDS LIKE",
      link: "/project/fear",
      paragraph_text: "What does it feel like to move through a city as a woman? Two audio pieces presented at K21 Kunstsammlung Nordrhein-Westfalen explore safety, fear, and the small invisible decisions women make every time they step outside. Research made audible."
   },
   {
      big_image_url: "/big_image.png",
      small_image_url: "/small_image.png",
      button_text: "LISTEN TO WHAT FEAR SOUNDS LIKE",
      link: "/fear",
      paragraph_text: "What does it feel like to move through a city as a woman? Two audio pieces presented at K21 Kunstsammlung Nordrhein-Westfalen explore safety, fear, and the small invisible decisions women make every time they step outside. Research made audible."
   },
   {
      big_image_url: "/big_image.png",
      small_image_url: "/small_image.png",
      button_text: "LISTEN TO WHAT FEAR SOUNDS LIKE",
      link: "/fear",
      paragraph_text: "What does it feel like to move through a city as a woman? Two audio pieces presented at K21 Kunstsammlung Nordrhein-Westfalen explore safety, fear, and the small invisible decisions women make every time they step outside. Research made audible."
   },
   {
      big_image_url: "/big_image.png",
      small_image_url: "/small_image.png",
      button_text: "LISTEN TO WHAT FEAR SOUNDS LIKE",
      link: "/fear",
      paragraph_text: "What does it feel like to move through a city as a woman? Two audio pieces presented at K21 Kunstsammlung Nordrhein-Westfalen explore safety, fear, and the small invisible decisions women make every time they step outside. Research made audible."
   },
]

export default function Home() {
   return <div className="flex flex-col gap-8 mt-16 mb-24">
      <div className="w-full mx-auto flex justify-center">
         <Image className="max-w-[600px]" src="/hero_description.png" alt="Hero" width={2000} height={1000} />
      </div>
      <div className="flex flex-col gap-16 mt-16">
         {projects.map((project) => (
            <WorkPreview key={project.link} project={project} />
         ))}
      </div>
   </div>
}
