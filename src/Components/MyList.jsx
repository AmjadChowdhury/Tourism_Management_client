import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ListCard from "./ListCard";


const MyList = () => {
    const loadedList = useLoaderData()
    const [lists,setLists] = useState(loadedList)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {
                lists?.map(list => <ListCard 
                    key={list._id}
                    lists={lists} 
                    list={list}
                    setLists={setLists}></ListCard>)
            }
        </div>
    );
};

export default MyList;