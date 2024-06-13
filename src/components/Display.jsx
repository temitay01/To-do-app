function display({tasks}){
    
    return(
        <div className='display-area'><ul className='the-list'>{tasks.map((task,index)=>(<li key={index}>{task  }</li>))}</ul></div>
    )
}

export default display