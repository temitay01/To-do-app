import Button from "./Button"


function inputForm({onChange,value,onClick}){
    return(
        <form className="input-form" onSubmit={(e)=> e.preventDefault()}><input placeholder="Add Your Task Here" value={value} onChange={onChange} />
        <Button handleClick={onClick} name="Add"/>
        </form>
    )
}

export default inputForm