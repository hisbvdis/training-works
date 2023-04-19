export default ({search, liftSearch, stock, liftStock}) => {
  return (<>
    <p>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(evt) => liftSearch(evt.target.value)}
      />
    </p>
    <label>
      <input
        type="checkbox"
        value={stock}
        onChange={() => liftStock(!stock)}
      />
      <span>Only show products in stock</span>
    </label>
  </>)
}