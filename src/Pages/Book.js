import { Component } from "react";
import axios from 'axios';

class Book extends Component{

    state={
        client_Username:"",
        Email:"",
        Phone:"",
        Rooms:"",
        Check_in:"",
        Check_out:"",
        Guest:""
    }

    SendUserData=()=>{
        const data={
            client_Username:this.state.client_Username,
            Email:this.state.Email,
            Phone:this.state.Phone,
            Rooms:this.state.Rooms,
            Check_in:this.state.Check_in,
            Check_out:this.state.Check_out,
            Guest:this.state.Check_out
        }
        axios.post("http://localhost:3001/client/insert", data)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    constructor(props) {
        super(props);
        this.state = {value: '1'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({Rooms: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }

    render(){
        return(
            <div>           
             <div class="form">
            <form action="" method="GET">
                <div class="personal">
                <fieldset>  
                    <legend>Personal Details</legend>
              <label for="name" id="name">Username</label>  
              <input type="text" id="name" name="client_Username" placeholder="username"  value={this.state.client_Username} onChange={(event)=>{this.setState({client_Username:event.target.value})}}/>
              <label for="email">E-mail</label>  
              <input type="text" id="email" name="Email" placeholder="e-mail" value={this.state.Email} onChange={(event)=>{this.setState({Email:event.target.value})}}/>
              <label for="phone">Phone</label>  
              <input type="number" id="phone" name="Phone" placeholder="phone" value={this.state.Phone} onChange={(event)=>{this.setState({Phone:event.target.value})}}/>
             </fieldset>
            </div>
             <br/>
             <div class="Booking">
             <fieldset>
                 <legend>Booking Details</legend>
              <select name="Rooms" value={this.state.Rooms} onChange={this.handleChange}>
                  <option value="">Rooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
              </select>
              <label for="">Check-in</label>  
              <input type="date" name="Check_in" placeholder="Check-in" min="2021-05-05" value={this.state.Check_in} onChange={(event)=>{this.setState({Check_in:event.target.value})}}/>
              <label for="">Check-out</label>  
              <input type="date" name="Check_out "placeholder="Check-out" value={this.state.Check_out} onChange={(event)=>{this.setState({Check_out:event.target.value})}}/>
             <select name="Guest" value={this.state.Guest} onChange={this.handleChange} required>
                  <option value="">Guests</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
              </select>
              <br/>
              <button id="BtnSubmit" onClick={this.SendUserData}>Submit</button>
              </fieldset>
              </div>
            </form>
            </div>

            </div>
        )
    }
}
export default Book;