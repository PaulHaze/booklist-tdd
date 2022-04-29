export function Home() {
  return (
    <div className="h-[100vh] bg-gradient-to-br from-teal-700/20 to-sky-500/30 flex  p-md">
      <section>
        <h2 data-test="heading">Bookish</h2>
        <div data-test="book-list">
          <div className="book-item">
            <h2>Refactoring</h2>
          </div>
          <div className="book-item">
            <h2>Domain-driven design</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
