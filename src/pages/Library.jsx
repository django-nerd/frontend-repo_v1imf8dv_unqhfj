export default function Library() {
  const items = []
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Your library</h2>
      {items.length === 0 ? (
        <p className="text-slate-600">No books yet. Purchase a book and it will appear here.</p>
      ) : (
        <div>TODO</div>
      )}
    </section>
  )
}
