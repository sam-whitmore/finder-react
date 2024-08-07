import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function App() {
  const organisations = useQuery(api.organisations.get);

  return (
    <>
      <div className="app">
        <h1 className="text-3xl">Finder</h1>
        <em>Seek and you shall Find</em>
        <br />
        {organisations?.map(({ _id, name }) => <div key={_id}>{name}</div>)}
      </div>
    </>
  )
}
