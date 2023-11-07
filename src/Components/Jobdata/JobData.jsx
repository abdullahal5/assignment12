import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Buttons from "../Buttons/Buttons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";



const JobData = () => {
    const [items, setItems] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(items)
    const menuItems = [...new Set(items.map((val) => val.category))]
    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res => res.json())
        .then(data => {
            setItems(data)
            setLoading(false)
        })
    },[])

    const filterItems = (cat) =>{
        const newItems = items.filter((newval) => newval.category === cat)
        setFilteredData(newItems)
        
    }
    return (
      <div>
        <div className="">
          <h1 className="text-3xl  font-semibold text-center my-7">
            Job by <span className="text-[#00B0FF]">category</span>
          </h1>
        </div>

        <Buttons
          menuItems={menuItems}
          filterItems={filterItems}
          setItems={setItems}
          items={items}
          setFilteredData={setFilteredData}
        ></Buttons>
        <Card
          loading={loading}
          items={items}
          filteredData={filteredData}
        ></Card>
      </div>
    );
};

export default JobData;