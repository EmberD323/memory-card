import { useEffect} from "react";


function Card({setImageData,imageData}){
    
    
    useEffect(()=>{
        fetch('https://api.giphy.com/v1/gifs/search?api_key=umtptu3tvniAcZ1z26Rp8TGGqKerXjsM&q=dog&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips',
            {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                let gifArray = [];
                for(let i=0;i<response.data.length;i++){
                    let gifObject = {id:response.data[i].id, url:response.data[i].images.original.url, title:response.data[i].title, isClicked:"no"};
                    gifArray.push(gifObject);

                }
                setImageData(gifArray);
                
            });
    
    
    },[]);
    return(
        <>
         {imageData.map((gif)=>{
             return(
                <div className="card" key={gif.id}>
                    <img id={gif.id}  src={gif.url} alt={gif.title} />
                </div>
             ) 
             
         })}
        </>
    )
   
}



export default Card