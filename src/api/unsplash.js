import axios from 'axios'


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{Authorization:'Client-ID 376c795aef0aef0fd052e7fa550588b52a0723ad4516038b11f3d8f1bf9fe917'}
})

//********************************************************************* */
// const unsplash=async (term)=>{
//     const response=await axios.get('https://api.unsplash.com/search/photos',{
//         params:{query:term},
//         headers:{Authorization:'Client-ID 376c795aef0aef0fd052e7fa550588b52a0723ad4516038b11f3d8f1bf9fe917'}
//     })

//     console.log(response.data.results)
// }

// export default unsplash
//<SearchBar onSubmit={unsplash}/>