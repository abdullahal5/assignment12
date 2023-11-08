import { useState } from "react";

const Buttons = ({
  menuItems,
  filterItems,
  items,
  setFilteredData,
}) => {
  console.log(menuItems)
  const [activeButton, setActiveButton] = useState(null);
  const [activeButton1, setActiveButton1] = useState(false);
  
    const handleButtonClick = (val) => {
      setActiveButton(val);
      setActiveButton1(false)
    };
    const handleButtonClick1 = (e) =>{
      setActiveButton1(e)
      setActiveButton('')
    }
  return (
    <div className="flex lg:flex-row md:flex-row flex-col lg:w-full md:w-full mx-auto w-40 justify-center gap-10">
      {menuItems.map((val, idx) => (
        <button
          className={`px-4 py-2 ${
            activeButton === val ? "bg-[#00B0FF] text-white" : " btn"
          } rounded-md`}
          onClick={() => (filterItems(val), handleButtonClick(val))}
          key={idx}
        >
          {val}
        </button>
      ))}
      <button
        className={`px-4 py-2 ${
          activeButton1 ? "bg-[#00B0FF] text-white" : " btn"
        } rounded-md`}
        onClick={() => (setFilteredData(items), handleButtonClick1(true))}
      >
        All
      </button>
    </div>
  );
};

export default Buttons;