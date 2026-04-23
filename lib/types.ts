export interface Project {
   big_image_url: string
   small_image_url: string
   button_text: string
   link: string
   paragraph_text: string
}

export type BlockImages = {
   type: "images",
   images: {
      image_url: string
   }[]
}

export type BlockImageParagraph = {
   type: "image_paragraph",
   image_orientation: "LEFT" | "RIGHT"
   image_url: string,
   paragraph: string | null,
   headline: string | null
}

export type BlockParagraph = {
   type: "paragraph",
   title: string | null,
   paragraph: string
}

export type Block = BlockImages | BlockImageParagraph | BlockParagraph

export interface ProjectPage {
   slug: string
   title: string
   hero_image_url: string
   description: {
      headline: string
      title: string
      paragraph_text: string
   }
   blocks: Block[]
}

export interface IllustrationImage {
   image_url: string
}

export interface Client {
   label: string
   url_text: string
   url: string
}