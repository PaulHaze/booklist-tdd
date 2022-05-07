export function Wrapper({ title = 'Bookish', children }) {
  return (
    <div className="grad-bg flex flex-col p-md">
      <h1 className="mb-4" data-test="heading">
        {title}
      </h1>
      {children}
    </div>
  );
}
