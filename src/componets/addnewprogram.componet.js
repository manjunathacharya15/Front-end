import React,{Component} from 'react';
export default class Addnewprogram extends Component{
    render(){
        return(
            <form  >
            <div class="input-group mb-3">
           <label for="email" class="col-lg-2">PROGRAM NAME:</label>
<input type="text" id="email" placeholder=" PROGRAMNAME" name="email"></input>
</div>

<div class="input-group mb-3">
           <label for="email" class="col-lg-2">FEATURED IMAGE</label>
<input type="text" id="email" placeholder=" FEATUREDIMAGE" name="email"></input>
</div>
<div class="input-group mb-3">
           <label for="email" class="col-lg-2">PROGRAM DESCRIPTION:</label>
<input type="text" id="email" placeholder="PROGRAMDESCRIPTION " name="email"></input>
</div>
<div class="input-group mb-3">
           <label for="email" class="col-lg-2">PROGRAM DURATION:</label>
<input type="text" id="email" placeholder=" PROGRAMDURATION" name="email"></input>
</div>
<div class="input-group mb-3">
           <label for="email" class="col-lg-2">TOTAL EXERCISES:</label>
<input type="number" id="text" placeholder=" TOTALEXERCISES" name="email"></input>
</div>
<div class="input-group mb-3">
           <label for="email" class="col-lg-2">PROGRAM PRICE:</label>
<input type="number" id="text" placeholder=" PROGRAMPRICE" name="email"></input>
</div>

           

           
           
   
  
  <div>
          <br/>
   
 <button type="submit" class="btn btn-default">Submit</button></div>
   </form>

        )
    }
    
}