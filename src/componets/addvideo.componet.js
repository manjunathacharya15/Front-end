import React,{Component} from 'react';
import Reactplayer from 'react-player'
export default class Addvideocomponet extends Component{
    render(){
        return(
            <div>
                    <Reactplayer controls url="https://www.youtube.com/watch?v=OKL8Mw9EqZQ" />
            </div>
            

        )
    }
}