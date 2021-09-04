import React,{Component} from'react';
import axios from'axios';

class AddCities extends Component{
    state={
        City_name:"",
        Number_of_Hotel:"",
        Average_Price:"",
        Image:"",
        // config:{
        //     headers:{'authorization': `Bearer ${localStorage.getItem('token')}`}
        // }
    }

    inputHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    fileHandler=(e)=>{
        this.setState({
            cimage:e.target.files[0]
        })
    }
    AddCities=(e)=>{
        e.preventDefault();
        const data=new FormData()
        data.append('Image', this.state.cimage)
        data.append('City_name',this.state.City_name)
        data.append('Number_of_Hotel',this.state.Number_of_Hotel)
        data.append('Average_Price', this.state.Average_Price)
        // data.append('config',this.state.config)

        axios({
            method:'post',
            url:'http://localhost:3001/Cities/insert',
            // headers:{'authorization': `Bearer ${localStorage.getItem('token')}`},
            data:data
        })
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
                    <h2 class="heading2">Add Cities</h2>
                    <div class="Rows">
                <form class="addpro">
                <p class="addp">City name<input type="text" name="City_name" value={this.state.City_name} onChange={this.inputHandler}/></p>
                <p class="addp good">Number of Hotel<input type="Number" name="Number_of_Hotel"  value={this.state.Number_of_Hotel} onChange={this.inputHandler}/></p>
                {/* <p class="addp">Price<select class="addp"> <option>Select Type</option>
                    <option name="type" value={this.state.type} onChange={this.inputHandler.select}>Aggressive</option>
                    <option name="type" value={this.state.type} onChange={this.inputHandler.select}>Non-Aggressive</option>
                    <option name="type" value={this.state.type} onChange={this.inputHandler.select}>None</option></select> </p> */}
                <p class="addp">Price<input type="Number" name="Average_Price"  value={this.state.Average_Price} onChange={this.inputHandler}/></p>
                <div class="image"> 
                <input type="file" name="Image" onChange={this.fileHandler}></input></div>
               <div class="btncia"> <button class="ciabtn" href="/Travel" onClick={this.AddCities}>Add</button></div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
export default AddCities;