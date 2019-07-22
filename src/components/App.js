import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
class App extends React.Component{
    state={images:[]}

    ///(this.setState is not a function) error because in this case this will not be the instance of the App class
    //*************************************************************************************************************/
    // async onSearchSubmit(term){
    //     const response=await axios.get('https://api.unsplash.com/search/photos',{
    //         headers:{Authorization:'Client-ID 376c795aef0aef0fd052e7fa550588b52a0723ad4516038b11f3d8f1bf9fe917'},
    //         params:{query:term}
    //     })
    //     console.log(this)
    //     this.setState({images:response.data.results})
    // }

    onSearchSubmit= async term=>{
        const response=await unsplash.get('/search/photos',{
            //headers:{Authorization:'Client-ID 376c795aef0aef0fd052e7fa550588b52a0723ad4516038b11f3d8f1bf9fe917'},
            params:{query:term}
        })
        console.log(this)
        this.setState({images:response.data.results})
    }

    
    render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
    
}

export default App