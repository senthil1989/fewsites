export const TABS = 'TABS';
export  const handleChange=(newValue,menu,indexes)=> {
        return(
            {type:TABS,
            newValue,
            menu,
            indexes
            }
        )
}