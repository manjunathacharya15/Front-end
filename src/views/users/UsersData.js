import React,{ Component } from "react";
import axios from 'axios'
export default class usersData extends Component{
  constructor(props){
    super(props);
    this.state={userDetails:[]};
  }
  componentDidMount(){
    axios.get('http://localhost:80/customers/')
    .then(response=>{
      this.setState({
        userDetails: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
}


// //
// const usersData = [
//   {slno: 1, FullName: 'Manjunath R',Email_ID:'manju72nath@gmail.com', Phone_Number:'7259632496',Created_Date: '2021/04/30', status: 'Active', Actions: ''},
//   {slno: 2, FullName: 'Raja R',Email_ID:'rraja9513@gmail.com', Phone_Number:'7619224167',Created_Date: '2021/04/30', status: 'Active', Actions: ''},
//   {slno: 3, FullName: 'Priyanka',Email_ID:'priyanka@gmail.com', Phone_Number:'7259567496',Created_Date: '2021/04/30', status: 'Pending', Actions: ''},
//   {slno: 4, FullName: 'Aditya',Email_ID:'aditya@gmail.com', Phone_Number:'7258907496',Created_Date: '2021/04/30', status: 'Banned', Actions: ''},

// ]//


