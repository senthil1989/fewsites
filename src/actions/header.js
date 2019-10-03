export const TABS = 'TABS';
export  const handleChange=(newValue,menu,indexes)=> {
    console.log(newValue)
        return(
            {type:TABS,
            newValue,
            menu,
            indexes
            }
        )
}