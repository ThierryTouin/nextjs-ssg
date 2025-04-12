export default function Card({ title, children }: { title: string, children: React.ReactNode }) {
    return (
      <div className="border rounded-xl p-4 shadow-md bg-white my-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div> {children} </div>
      </div>
    )
  }
  