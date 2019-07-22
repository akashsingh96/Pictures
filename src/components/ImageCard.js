import React from 'react'

class ImageCard extends React.Component{
    
    constructor(props){
        super(props)
        this.state={spans:0}
        this.imageRefs=React.createRef()
    }

    setSpans=()=>{
        console.log(this)//Had asked a question on this on Udemy concerned about the value of this when using the normal function
        const height=this.imageRefs.current.clientHeight

        const spans=Math.ceil(height/10)

        this.setState({spans})//ES6 syntax

    }

    componentDidMount(){
        this.imageRefs.current.addEventListener('load',this.setSpans)//Our node in the dom does not look into the image unless we click
    }

    render(){
        const {description,urls}= this.props.image
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRefs} src={urls.regular} alt={description}/>
            </div>
        )

    }
    

}


export default ImageCard