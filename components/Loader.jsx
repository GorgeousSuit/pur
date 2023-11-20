import Logo from "public/assets/icons/U.svg"

const Loader = () => {
  return (
	<div className="flex-center absolute top-0 left-0 w-screen h-[100svh] bg-[#080505] origin-top z-[100]"><Logo className="animate-pulse"/></div>
  )
}

export default Loader