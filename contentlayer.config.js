import { defineDocumentType, makeSource } from "contentlayer/source-files"
import { remarkCodeHike } from "@code-hike/mdx"


/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    site: {
      type: 'string',
    },
    github: {
      type: 'string',
    }

  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    navigation: {
      type: 'list',
      of: { type: 'string' },
    },
    picture: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    premium: {
      type: 'boolean',
    },
  },
  computedFields,
}))


export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page],
  mdx: {
    remarkPlugins: [
      [remarkCodeHike, { theme: "nord", showCopyButton: true, lineNumbers: true, maxHeight: 200 }],
    ],
  },

})
