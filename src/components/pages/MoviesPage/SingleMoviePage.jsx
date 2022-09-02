import { Link,useParams, useNavigate, Outlet , useLocation} from "react-router-dom"
import { useState,useEffect } from "react";
import { getSingleMovie } from "services/Api";
import { SingleMovie } from "components/Movies/SingleMovie";
import css from './SingleMoviePage.module.css'


 const SingleMoviePage =()=>{
//    const params=useParams();
const {id}=useParams();
const navigate=useNavigate();

const [state,setState] = useState({
    item:{},
    loading:false,
    error:null,

})
const location=useLocation();
// console.log(location.state.from);
const from=location.state?.from||"/movies";
useEffect(()=>{

    const fetchMoviesById = async()=>{
        setState((prevState)=>
            ({
                ...prevState,
                loading:true,
                error:null,
            })
        );
            try {
                const data = await getSingleMovie(id);
                console.log(data)
                setState(prevState=>{
                    return{
                        ...prevState,
                        item:data
    
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
    fetchMoviesById();
    },[id])
    const {item,loading,error} = state;
    // const {backdrop_path,overview,genres,original_title} = item;
    console.log(item)

    const goBack = ()=>navigate(location.state.from);
    return(
        <>
        <button className={css.btn} onClick={goBack}>Go Back</button>
         {loading && <p> Movie load....</p> }
     {error&& <p> Movie load failed</p> }
        <SingleMovie item={state.item}/>
        <Link className={css.cast} state={{from}} to={`cast`}>Cast</Link>
        <Link  className={css.rev}  state={{from}} to={`/movies/${id}/reviews`}>Reviews</Link>
        <Outlet/>


        </>
    )

}


export default SingleMoviePage;  