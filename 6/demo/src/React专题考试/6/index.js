import React,{Component} from 'react';
import PropTypes from 'prop-types'
class InputNumber extends Component{
    constructor(props){
        super(props)
        this.state = {
			inputValue: ''
		}
    }
    static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func,
	}
	static defaultProps = {
		onChange: () => {}
    }
    get isControl(){
		return 'value' in this.props
	}
    get value(){
        if (this.isControl){
            return this.props.value
        }else{
            return this.state.inputValue
        }
        
    }
    render(){
        
        const{
            onChange,
            value,
            defaultValue,
            ...rest
        }=this.props
        return (
            <div>
                <input 
                    value={this.value} 
                    onChange={(e)=>{
                        if(!this.isControl){
                            this.setState({
                                inputValue: e.target.value
                            })
                        }
                        this.props.onChange(e)
                    }}
                >

                </input>
            </div>)
    }
    componentWillMount() {
		this.props.defaultValue && this.setState({inputValue: this.props.defaultValue})
	}
}
class App extends Component{
    constructor(props){
        super(props)
        this.state={value:'hzha'}
    }
    defvalues=1
    render(){
        return (
                <div>
                    <InputNumber 
                        value={this.state.value} 
                        onChange={e=>{this.setState({value:e.target.value})}}
                    />
                    <InputNumber 
                        defaultValue={this.defvalues}   
                    /> 
                    
                </div>)
    }
}
export default App