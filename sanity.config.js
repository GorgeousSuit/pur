import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "z1kyi1cx",
  dataset: "production",
  title: "Admin Panel",
  apiVersion: "2023-10-25",
  basePath: "/admin",
  plugins: [deskTool()],
  useCdn: false,
  schema: { types: schemas },
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

export default config
