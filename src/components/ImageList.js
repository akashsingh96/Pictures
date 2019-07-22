import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard';

// const ImageList=(props)=>{
//     const images=props.images.map(image=>{
//         return(
//             <img alt={image.description} src={image.urls.regular} key={image.id}/>
//         )
//     })
//     return(<div>{images}</div>)
// }
/**************************Destructuring image object************************************************************* */

// const ImageList=(props)=>{
//     const images=props.images.map(({description,urls,id})=>{
//         return(
//             <img alt={description} src={urls.regular} key={id}/>
//         )
//     })
//     return(<div className='image-list'>{images}</div>)
// }

/*******************************Using ImageCard Component************************************************** */
const ImageList=(props)=>{
    const images=props.images.map(image=>{
        return(
            <ImageCard image={image} key={image.id}/>
        )
    })
    return(<div className='image-list'>{images}</div>)
}

export default ImageList