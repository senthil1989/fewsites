export const TABS = 'TABS';
export  const handleChange=(newValue,menu)=> {
        return(
            {type:TABS,
            newValue,
            menu
            }
        )
}