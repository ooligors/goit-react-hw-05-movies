import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { MovieCast } from "components/Movies/MovieCast";
import { getSingleMovieCast } from "services/Api";
import css from './CastPage.module.css'


 const CastPage = () => {
    
   
    
    const [state,setState] = useState({
        items:{},
        loading:false,
        error:null,
    
    })
    const {id}=useParams();
    useEffect(()=>{
    
        const fetchMoviesByCast = async()=>{
            setState((prevState)=>
                ({
                    ...prevState,
                    loading:true,
                    error:null,
                })
            );
                try {
                    const data = await getSingleMovieCast(id);
                    console.log(data)
                    setState(prevState=>{
                        return{
                            ...prevState,
                            items:data.cast
        
                        }
                    })
                } catch (error) {
                    setState((prevState)=>({
        ...prevState,
        error,
                    }))
                }
                finally{
                    
                    setState(prevState=>{
        return{
            ...prevState,
            loading:false,
        }
                    })
                }
            
        }
        fetchMoviesByCast();
        },[id])
   
        

   const{items,loading,error}=state;
   

    return (
        <>
           
            {items.length > 0 && <ul className={css.ul}><MovieCast items={items} /></ul>} 
            {items.length <1 && <p> there are nothing </p>   } 

            {loading && <p>...load information</p>}
            {error && <p>...Information load failed</p>}
        </>
    )
}
export default CastPage;