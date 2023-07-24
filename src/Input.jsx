import { Component } from 'react';
import './assets/css/style.css'




class Textarea extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            maxLen : this.props.maxLen
        }
    }


    render() {


        return (
            <>
                <textarea style={
                    this.props.style
                } className='t-area' maxLength={this.props.maxLen} placeholder={"چیزی بنویسید"} onInput={(e)=>{
                    this.setState({
                        maxLen : this.props.maxLen - e.target.value.length   
                    })
                }}></textarea>
                <p>مقدار{this.state.maxLen} کاراکتر باقی مانده</p>
            </>
        )
    }




}
export default Textarea

