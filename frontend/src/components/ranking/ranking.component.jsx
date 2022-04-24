import React from "react";
import "./ranking.css"


const data = [
    { name: "Anom Brus", no: 1, num_collection: 100 },
    { name: "Dam Stank", no: 2, num_collection: 120},
    { name: "Jujustsu Kaisen", no: 3, num_collection: 110},
    { name: "Kimestsu no Yaiba", no: 4, num_collection: 100 },
    { name: "Harry Potter", no: 5, num_collection: 120},
    { name: "Rone Weslay", no: 6, num_collection: 110},
    { name: "Anom", no: 7, num_collection: 100 },
    { name: "Anom", no: 8, num_collection: 120},
    { name: "Anom", no: 9, num_collection: 110},
    { name: "Anom", no: 10, num_collection: 110}
  ]
function Ranking() {
    function position(val){
        if (val ===1)
            return <img src="./gold.png" alt="" />
        else if (val===2)
            return <img src="./silver.png" alt="" />
        else if (val===3)
            return <img src="./copper.png" alt="" />
        else 
        return val
    }

    return (
        <div id="ranking" >
            <div className="title">
                <h3>My Ranking : 167</h3>
                <h3>My card: 97</h3>
                <h2>Ranking</h2>
            </div>
            <div className="table">
            <table>
                <tr>
                <th>No</th>
                <th>Name</th>
                <th>Card of collection</th>
                </tr>
                {data.map((val, key) => {
                return (
                    <tr key={key}>
                     <td>{position(val.no)}</td>
                    <td>{val.name}</td>
                    <td>{val.num_collection}</td>
                    </tr>
                )
                })}
            </table>
            </div>
            </div>
    );
}

export default Ranking;
