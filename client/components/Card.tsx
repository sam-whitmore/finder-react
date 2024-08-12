import { Organisation } from '../../models/organisations'

export default function Card(organisation: Organisation) {
  return (
    <div className="absolute h-[40em] w-[25em] max-w-screen max-h-screen border-2 border-seek-light-grey rounded-[24px] shadow-sm hover:shadow-lg bg-white">
      <div className="relative h-[25em] w-full border-b-2 border-seek-light-grey">
        <div className="absolute p-4">
          <p className="text-2xl">{organisation.name}</p>
        </div>
        <div className="h-full w-full rounded-t-[20px]">
          <img src={organisation.logo} alt={organisation.name} className="h-full w-full m-auto object-contain rounded-t-[22px]"></img>
        </div>
        <div className="absolute bottom-0 left-0 p-4">
          <p>Lorem ipsum...</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex justify-between w-full px-4 pb-4">
        <img src="cross.svg" alt="remove" className="h-10 stroke-seek-deep-blue hover:animate-spin-90 fill-seek-deep-blue"></img>
        <img src="plus.svg" alt="add" className="h-10 stroke-seek-pink hover:animate-spin-90"></img>
      </div>
    </div>
  )
}
