import { createContext, useState } from 'react'

const DataContext=createContext()

const DataProvider =({children})=>{
const [index,setIndex]=useState(0)


    return(
 <DataContext.Provider
 
 value={{index,setIndex}}
 >
    {children}
 </DataContext.Provider>
    )
}

export {DataContext,DataProvider}