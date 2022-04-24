import React from 'react';
import jsonData from '../data.json';

export const DataContext = React.createContext();

const DataProvider = ({children}) => {

    const [data, setData] = [jsonData]

    return (
    <DataContext.Provider value={{ data, setData}}>
        {
        children
        }
    </DataContext.Provider>
    );
};

// const ChildComponent = () => {
//   const { color } = React.useContext(ExampleContext);

//   return <p style={{ color }}>This text is {color}</p>;
// };


export default DataProvider;