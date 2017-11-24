import React from "react";

const PipeBody = ({children}) => (
    <div className='pipe'>
     {children}
    </div>
);

class Bubble extends React.Component {

    // componentDidUpdate() {
    //     this.getDOMNode().addEventListener('transitionend', this.onTransitionEnd, false);
    //   }

    render() {
        const {size, color, speed} = this.props;
        const style = {
            backgroundColor: color,
            height: size,
            width: size,
            borderRadius: size,
            transition: `transform ${speed}s ease-in-out`
        }
        return (
            <div onTransitionEnd={()=>this.onTransitionEnd()} style={style} className='bubble'>
            </div>
        );
    }

    onTransitionEnd() {
        console.log('iuyuyuyuy');
    }
}

export default class Pipe extends React.Component {
    render() {
        return(
            <div className='pipe-div'>
                <PipeBody>
                    <Bubble size={40} speed={10} color='red'/>
                    <Bubble size={20} speed={7} color='blue'/>
                </PipeBody>            
            </div>
        );
    }
}