import SignIn from "./SignIn";

export default function NavigationBar() {
  return (
    <div className="w-full h-auto bg-seek-light-grey flex justify-between">
      <div className="m-2 flex">
      <img src="seek-logo.png" alt="seek" className="mr-2 h-[36px]"></img><span className="text-xl font-seek font-semibold tracking-wide">/ finder</span>
      </div>
      <SignIn />
    </div>
  )
}