import React,{Component} from'react';
import axios from'axios';

class AddFeatured extends Component{
    state={
        Hotel_name:"",
        Location:"",
        Address:"",
        Price:"",
        Image:"",
        config:{
            headers:{'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }

    inputHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    fileHandler=(e)=>{
        this.setState({
            // Image:e.target.files[0]
        })
    }
    AddFeatured=(e)=>{
        e.preventDefault();
        const data=new FormData()

        data.append('Hotel_name',this.state.Hotel_name)
        data.append('Location',this.state.Location)
        data.append('Price', this.state.Price)
        data.append('Address',this.state.Address)
        data.append('config',this.state.config)

        axios({
            method:'post',
            url:'http://localhost:3000/Trending/insert',
            headers:{'authorization': `Bearer ${localStorage.getItem('token')}`},
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
                    <h2 class="heading2">Add Featured</h2>
                    <div class="Rows">
                <form class="addpro">
                <p class="addp">Hotel_name<input type="text" name="Hotel_name" value={this.state.Hotel_name} onChange={this.inputHandler}/></p>
                <p class="addp good">Location<input type="textarea" name="Location"  value={this.state.Location} onChange={this.inputHandler}/></p>
                <p class="addp good">Address<input type="textarea" name="Address"  value={this.state.Address} onChange={this.inputHandler}/></p>
                {/* <p class="addp">Price<select class="addp"> <option>Select Type</option>
                    <option name="type" value={this.state.type} onChange={this.inputHandler.select}>Aggressive</option>
                    <option name="type" value={this.state.type} onChange={this.inputHandler.select}>Non-Aggressive</option>
                    <option name="type" value={this.state.type} onChange={this.inputHandler.select}>None</option></select> </p> */}
                <p class="addp">Price<input type="Number" name="Price"  value={this.state.Price} onChange={this.inputHandler}/></p>
                <div class="image"> 
                <input type="file" name="Image" onChange={this.fileHandler}></input></div>
               <div class="btncia"> <button class="ciabtn" href="/Travel" onClick={this.AddTrending}>Add</button></div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
export default AddFeatured;