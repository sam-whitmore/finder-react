import Card from './Card'

import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'

export default function Finder() {
  const organisations = useQuery(api.organisations.get)

  return (
    <div className="w-full h-full flex justify-center bg-gradient-to-bl from-seek-pink to-seek-blue">
      {organisations?.map((organisation) => (
        <Card key={organisation._id} {...organisation} />
      ))}
    </div>
  )
}
