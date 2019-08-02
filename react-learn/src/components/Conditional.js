import React from 'react'

function Conditional(props){
    if(props.isLoading)
    return(
        <h1>Is Loaing</h1>
    )
    else{
        return(
            <h1>Load completed</h1>
        )
    }
}

export default Conditional