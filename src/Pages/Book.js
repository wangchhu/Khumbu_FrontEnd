import { Component } from "react";
import axios from 'axios';

class Book extends Component{

    state={
        client_Username:"",
        Email:"",
        Phone:"",
        Check_in:"",
        Check_out:"",
        Rooms:"",
        Guest:""
    }
    
    inputHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    Book=(e)=>{
        console.log(this.state)
        e.preventDefault();
        const data={
            'client_Username':this.state.client_Username,
            'Email': this.state.Email,
            'Phone':this.state.Phone,
            'Check_in':this.state.Check_in,
            'Check_out': this.state.Check_out,
            'Rooms':this.state.Rooms,
            'Guest': this.state.Guest
        };


        console.log(data)
        axios({
            method: 'post',
            url:"http://localhost:3001/client/insert",
            data:data
        })
        //     // client_Username:this.state.client_Username,
        //     // Email:this.state.Email,
        //     // Phone:this.state.Phone,
        //     // Rooms:this.state.Rooms,
        //     // Check_in:this.state.Check_in,
        //     // Check_out:this.state.Check_out,
        //     // Guest:this.state.Check_out
        
        // axios.post("http://localhost:3001/client/insert", data)
        .then((response)=>{
            console.log(response)
           
        })
        .catch((err)=>{
            console.log(err.response)
        })

    }

    // changeHandler =(e)=>{
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     }
    //     )
    // }
    SelectChange = e=>(
        this.setState({
            Rooms: e.target.value
        },()=>{
            console.log(this.state)
        })
       
    )
    selectRoom (Arr){
        
        return Arr.map((value, key)=>(
            <>
            <option key={key} value= {value}>{value}</option>
            </>
        ))
        
                  
    }
        
    componentDidMount(){
        console.log(this.state)
    }
    render(){
        let values = [1,2,3,4,5,6,7,8,9, 10]
        return(
            <div class="container">           
             <div class="form">
            <form action="" method="POST">
                <div class="personal">
                        <div>
                           <button class="btnbook" >
                           <a href="/"> Back</a>
                            </button>
                        </div>
                <fieldset>  
                    <legend>Personal Details</legend>
              <label for="name" id="name">Username</label>  
              <input type="text" id="name" name="client_Username" placeholder="username"  value={this.state.client_Username} onChange={this.inputHandler}/>
              <label for="email">E-mail</label>  
              <input type="text" id="email" name="Email" placeholder="e-mail" value={this.state.Email} onChange={this.inputHandler}/>
              <label for="phone">Phone</label> 
              <input type="number"  id="phone" name="Phone" placeholder="phone" value={this.state.Phone} onChange={this.inputHandler}/>

             </fieldset>
            </div>
             <br/>
             <div class="Booking">
             <fieldset>
                 <legend>Booking Details</legend>            
              
              <label for="">Check-in</label>  
              <input type="date" name="Check_in" placeholder="Check-in" min="2021-05-05"  value={this.state.Check_in} onChange={this.inputHandler}/>
              <label for="">Check-out</label>  
              <input type="date" name="Check_out"placeholder="Check-out"  value={this.state.Check_out} onChange={this.inputHandler} />
                <label>No. of Room</label>
                <select name="Rooms" value={this.state.Rooms}
                                     onChange={this.SelectChange}>
                                         <option value="">... </option>
                 {this.selectRoom(values)}
              </select>
              <label>No. of Guest</label>
             <select name="Guest" value={this.state.Guest} 
                            onChange={this.inputHandler} required>
                  <option value="">...</option>
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
              <button id="BtnSubmit" onClick={this.Book}>Submit</button>
             
              </fieldset>
              
              </div>
              
            </form>
            </div>

            </div>
        )
    }
}
export default Book;