


import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { MovieReviews } from "components/Movies/MovieReviews";
import { getSingleMovieReviews } from "services/Api";
import css from '../../Movies/MovieCastReview.module.css';


 const ReviewsPage = () => {
    
       const [state,setState] = useState({
        items:{},
        loading:false,
        error:null,
    
    })
  
    const {id}=useParams();
    useEffect(()=>{
    
        const fetchMoviesByReviews = async()=>{
            setState((prevState)=>
                ({
                    ...prevState,
                    loading:true,
                    error:null,
                })
            );
                try {
                    const data = await getSingleMovieReviews(id);
                    console.log(data)
                    console.log(data.results);
                    console.log(data.results);
                    setState(prevState=>{
                        return{
                            ...prevState,
                            items:data.results  //////////////////
       
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
        fetchMoviesByReviews();
        },[id])
   
        

   const{items,loading,error}=state;
   console.log(items)

    return (
        <>           
            {items.length > 0 ? <ul className={css.list}><MovieReviews items={items} /></ul> : <p>We don`t have any reviews for this movie.</p> }
            {/* {items.length <1 &&  <p>We don`t have any reviews for this movie.</p>    }  */}

            {loading && <p>...load information</p>}
            {error && <p>...Information load failed</p>}
        </>
    )
}
export default ReviewsPage;