import Bar from "./Bar";

function AppInput({onChange,value}){
    return(
        <Bar value={value} onChange={onChange}/>
    )
}

export default AppInput