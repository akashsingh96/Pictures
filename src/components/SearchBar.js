import React from 'react'

class SearchBar extends React.Component{
    state={term:''}
    // onInputChange(event){
    //     console.log(event.target.value)
    // }
    // onFormSubmit(event){
    //     event.preventDefault()
    //     console.log(this.state.term)  //this will throw error so prefer using arrow functions
    // }

    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.onSubmit(this.state.term)  //this will throw error so prefer using arrow functions
    }
    render(){
        return(
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' value={this.state.term} onChange={e=>this.setState({term:e.target.value})}/>
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar