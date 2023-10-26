import { getProjects } from "@sanity/sanity-utils"

const page = async () => {
	const projects = await getProjects();
  return (
	<div>{projects.map((product) => (
		<div key={product.name}>{product.name}</div>
	))}</div>
  )
}

export default page