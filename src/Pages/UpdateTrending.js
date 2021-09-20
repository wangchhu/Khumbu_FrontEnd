import axios from "axios";
import React, { Component } from "react";

class UpdateTrending extends Component{
    state={
        Hotel_name:"",
        Location:"",
        Price:"",
        id : this.props.match.params.id,

    };
    componentDidMount(){
        axios.get("http://localhost:3001/Trending/single/"+ this.state.id)
      
        .then((response)=>{
            this.setState({
                pname:response.data.pname,
                type:response.data.type,
                type2:response.data.type2,
                price:response.data.price
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
        )
    }
    UpdateTrending=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:3001/Trending/update",this.state)
        axios.get('http://localhost:3001/Trending/show')
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }


    render(){ 
        return(
            <div>
            <div class="add">                 
            <h2 class="heading2">Update Trending Hotels</h2>
            <div class="Rows">
            <form>
                <p class="update">Hotel name<input type="text" name="Hotel_name" value={this.state.Hotel_name} onChange={this.changeHandler}/></p>
                <p class="update">Location<input type="text" name="Location"  value={this.state.Location} onChange={this.changeHandler}/></p>
                <p class="update">Price<input type="number" name="Price"  value={this.state.Price} onChange={this.changeHandler}/></p>
                <p class="update"><button onClick={this.UpdateTrending}>Update</button></p>
            </form>
            </div>
            </div> 

            </div>
    
        )
    }
}

export default UpdateTrending;