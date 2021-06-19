import React ,{Component} from 'react';

class ErrorBoundary extends Component{
   constructor(props){
       super(props)
       this.state={
           hasError: false
       }
   }
   componentDidCatch(){
       this.setstate({hasError:true});
   }
   render(){
           if (this.state.hasError){
               return <h1>Oooops  That is not good</h1>
           }
           return this.props.childern;
           
       }
   }
export default ErrorBoundary;