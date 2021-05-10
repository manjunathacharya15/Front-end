import React,{Component} from 'react'
export default class trainercomponet extends Component{
    render(){
        return(
            <form>
            <div class="input-group mb-3">
           
      <span class="input-group-text" id="basic-addon1">SLNO:    </span>
<input type="text" class="form-control" placeholder="SLNO" aria-label="Username" aria-describedby="basic-addon1"/>

            </div>
           
            <div class="input-group mb-3 sm-3">
           
           <span class="input-group-text" id="basic-addon1">FULLNAME:</span>
   <input type="text" class="form-control" placeholder="FULLNAME" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
                 <div class="input-group mb-3">
           
           <span class="input-group-text" id="basic-addon1">EMAIL:</span>
   <input type="text" class="form-control" placeholder="EMAIL" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
                 <div class="input-group mb-3">
           
           <span class="input-group-text" id="basic-addon1">PHONE NUMBER:</span>
   <input type="text" class="form-control" placeholder="PHONENUMBER" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
                  <div class="input-group mb-3">
           
      <span class="input-group-text" id="basic-addon1">CREATED DATE</span>
<input type="number" class="form-control" placeholder="CREATED DATE" aria-label="Username" aria-describedby="basic-addon1"/>

            </div>
            <div class="input-group mb-3">
           
           <span class="input-group-text" id="basic-addon1">Status</span>
   <input type="text" class="form-control" placeholder="Status" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
                 <div class="input-group mb-3">
           
           <span class="input-group-text" id="basic-addon1">Actions</span>
   <input type="text" class="form-control" placeholder="Actions" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
         
        
         
        <center> <button type="submit" class="btn btn-default">Submit</button></center>
         </form>

        )
    }
}