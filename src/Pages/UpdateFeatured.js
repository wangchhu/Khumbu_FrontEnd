import axios from "axios";
import React, { Component } from "react";

class UpdateFeatured extends Component{
    state={
        Hotel_name:"",
        Location:"",
        Price:"",
        id : this.props.match.params.id,

    };
    componentDidMount(){
        axios.get("http://localhost:3001/Featured/single/"+ this.state.id)
      
        .then((response)=>{
            this.setState({
                Hotel_name:response.data.Hotel_name,
                Location:response.data.Location,
                Price:response.data.Price
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
    UpdateFeatured=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:3001/Featured/update",this.state)
        axios.get('http://localhost:3001/Featured/show')
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
            <h2 class="heading2">Update Featured Hotels</h2>
            <div class="Rows">
            <form>
                <p class="update">Hotel name<input type="text" name="Hotel_name" value={this.state.Hotel_name} onChange={this.changeHandler}/></p>
                <p class="update">Location<input type="text" name="Location"  value={this.state.Location} onChange={this.changeHandler}/></p>
                <p class="update">Price<input type="number" name="Price"  value={this.state.Price} onChange={this.changeHandler}/></p>
                <p class="update"><button onClick={this.UpdateFeatured}>Update</button></p>
            </form>
            </div>
            </div> 

            </div>
    
        )
    }
}

export default UpdateFeatured;