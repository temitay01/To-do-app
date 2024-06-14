import Button from "./Button"

function Footer ({tasks,handleClear}){
  return(  <div className="footer">{`You have ${tasks.length} pending tasks`}<Button name="Clear All" handleClick={handleClear} /></div>)
}
export default Footer