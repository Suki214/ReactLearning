import React, {Component} from 'react'


class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            buttomText: "",
            randomImg:"http://i.imgflip.com/lbij.jpg"
        }
    }
    render(){
        return(
            <h1>Meme Generator Section</h1>
        )
    }    
}
export default MemeGenerator