
const Buttons = ({
  menuItems,
  filterItems,
  items,
  setFilteredData,
}) => {
    
  return (
    <div className="flex justify-center gap-10">
      {menuItems.map((val, idx) => (
        <button
        className="btn"
          onClick={() => filterItems(val)}
          key={idx}
        >
          {val}
        </button>
      ))}
      <button
      className="btn"
        onClick={() => setFilteredData(items)}>
        All
      </button>
    </div>
  );
};

export default Buttons;