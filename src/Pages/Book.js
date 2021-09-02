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
    render(){
        return(
            <div>           
             <div class="form">
            <form action="" method="GET">
                <div class="personal">
                <fieldset>  
                    <legend>Personal Details</legend>
              <label for="name" id="name">Username</label>  
              <input type="text" id="name" name="client_Username" placeholder="username" pattern="[a-zA-Z]" value={this.state.client_Username} onChange={(event)=>{this.setState({client_Username:event.target.value})}}/>
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
              <select name="Rooms">
                  <option value="">Rooms</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
              </select>
              <label for="">Check-in</label>  
              <input type="date" placeholder="Check-in" min="2021-05-05"/>
              <label for="">Check-out</label>  
              <input type="date" placeholder="Check-out"/>
             <select name="Guest" required>
                  <option value="">Guests</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
              </select>
              <br/>
              <button id="BtnSubmit">Submit</button>
              </fieldset>
              </div>
            </form>
            </div>

            </div>
        )
    }
}
export default Book;