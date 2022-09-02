
import { useState } from "react"

export const SearchMoviesForm = ({onSubmit})=>{
const [state,setState] = useState({
    search:"",
})
const handleChange=({target})=>{
const{name,value} = target;
setState({
    ...state,
    [name]:value,
})
}
const handleSubmit =(e)=>{
e.preventDefault();
onSubmit ({...state});
setState({
    search:"",
})

}
return <form c onSubmit={handleSubmit}>
    <input name = "search" value={state.search} onChange={handleChange } placeholder="Search" type="text" required />
<button type="submit">Search</button>
</form>
}