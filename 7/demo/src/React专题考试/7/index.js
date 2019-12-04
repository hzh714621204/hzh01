
import React,{Component} from 'react';

function MyConfig(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        let res = confirm("确定删除吗")
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    });
    return p;  
}
class App extends Component{
    
    render(){
        return (
                <div>
                    hallo
                </div>)
    }
    componentDidMount(){
        var res=MyConfig();
        console.log(res)
    }
}
export default App


