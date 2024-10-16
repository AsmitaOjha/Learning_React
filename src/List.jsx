import { useLayoutEffect } from "react";

function List(){
    const fruits = [{id:1,name :"Apple", calories : 95}, 
                    {id:2,name :"Banana", calories: 45}, 
                    {id:3,name: "Cherry", calories: 103}, 
                    {id:4,name: "Date", calories: 230}, 
                    {id:5,name: "Elderberry",calories: 356}];
   // fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetical
    fruits.sort((a,b)=> b.name.localeCompare(a.name)); //reverse alphabetical
    
    const listItems = fruits.map((fruit) => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);
    return(<ol>{listItems}</ol>);
}
export default List