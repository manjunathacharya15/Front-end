import React,{Component} from 'react';
export default class Videocomponet extends Component{
    render(){
        return(
            <form>
            <div class="input-group mb-3">
           
      <span class="input-group-text" id="basic-addon1">SLNO:    </span>
<input type="number" class="form-control" placeholder="SLNO" aria-label="Username" aria-describedby="basic-addon1"/>

            </div>
           
            <div class="input-group mb-3 sm-3">
           
           <span class="input-group-text" id="basic-addon1">VideoName:</span>
   <input type="file" class="form-control" placeholder="Videoname" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
                 <div class="input-group mb-3">
           
           <span class="input-group-text" id="basic-addon1">Category:</span>
   <input type="text" class="form-control" placeholder="Category" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
                 <div class="input-group mb-3">
           
           <span class="input-group-text" id="basic-addon1">SubCategory:</span>
   <input type="text" class="form-control" placeholder="SubCategory" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
                  <div class="input-group mb-3">
           
      <span class="input-group-text" id="basic-addon1">Packages</span>
<input type="number" class="form-control" placeholder="Packages" aria-label="Username" aria-describedby="basic-addon1"/>

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