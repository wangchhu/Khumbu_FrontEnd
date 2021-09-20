import axios from "axios";
import React, { Component } from "react";

class UpdateCities extends Component{
    state={
        City_name:"",
        Number_of_Hotel:"",
        Average_Price:"",
        id : this.props.match.params.id,

    };
    componentDidMount(){
        axios.get("http://localhost:3001/cities/single/"+ this.state.id)
      
        .then((response)=>{
            this.setState({
                City_name:response.data.City_name,
                Number_of_Hotel:response.data.Number_of_Hotel,
                Average_Price:response.data.Average_Price
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
    UpdateCities=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:3001/cities/update",this.state)
        axios.get('http://localhost:3001/cities/show')
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
            <h2 class="heading2">Update Cities</h2>
            <div class="Rows">
            <form>
                <p class="update">City name<input type="text" name="City_name" value={this.state.City_name} onChange={this.changeHandler}/></p>
                <p class="update">No of Hotel<input type="text" name="Number_of_Hotel"  value={this.state.Number_of_Hotel} onChange={this.changeHandler}/></p>
                <p class="update">Average Price<input type="number" name="Average_Price"  value={this.state.Average_Price} onChange={this.changeHandler}/></p>
                <p class="update"><button onClick={this.UpdateCities}>Update</button></p>
            </form>
            </div>
            </div> 

            </div>
    
        )
    }
}

export default UpdateCities;