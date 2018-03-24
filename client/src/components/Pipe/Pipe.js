import React from "react";

let bubbles = [];

const COLORS = [
    'red',
    'green',
    'blue',
    'yello',
    'black'
];
function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

const PipeBody = ({children}) => (
    <div className='pipe'>
     {children}
    </div>
);

class Bubble extends React.Component {
    
    constructor() {
        super();
        this.updateLeft = this.updateLeft.bind(this);
        this.state = {
            left: 0
        };
        
    }
    componentWillMount() {
        let interval = setInterval(() =>this.updateLeft(interval), 50
        );
    }
    componentDidUpdate() {
        //this.getDOMNode().addEventListener('transitionend', this.onTransitionEnd, false);
      }

    render() {
        const {size, color, speed} = this.props;
        const {left = 0} = this.state;
        const style = {
            backgroundColor: color,
            height: size,
            width: size,
            borderRadius: size,
            left: left + 'px'
        }
        return (
            <div onTransitionEnd={()=>this.onTransitionEnd()} style={style} className='bubble'>
            </div>
        );
    }

    onTransitionEnd() {
        console.log('iuyuyuyuy');
    }

    updateLeft(timerId) {
        //debugger;
        let {left} = this.state;
        const {speed, ind} =  this.props;                
        if (left<=400) {
            this.setState({
                left: left - (-speed)
            });
        } else {
            clearInterval(timerId);
            bubbles.splice(ind, 1);
            addBubleToBubles();
            console.log(bubbles);
        }
        
    }

}

export default class Pipe extends React.Component {

    constructor() {
        super();
        this.state = {
            bubbles: []
        };
    }
    componentWillMount() {
        for (var i=0; i<10; i++) {
            addBubleToBubles();
        }
    }
    render() {        
        return(
            <div className='pipe-div'>
                <PipeBody>
                    {
                        bubbles.map( (bub, index)=> <Bubble 
                            key={index}
                            ind={index}
                            size={bub.size} 
                            speed={bub.speed}
                            color={bub.color}/>
                         )
                    }                    
                </PipeBody>            
            </div>
        );
    }

    // addBubles() {
    //     let bubble = [];
    //     bubbles.push ({
    //         size: randomInteger(2,50),
    //         speed: randomInteger(2,5),
    //         color: COLORS[randomInteger(0,4)]
    //     });
    //     // this.setState({
    //     //     bubbles
    //     // })
    // }
}

var addBubleToBubles = () => {
    bubbles.push ({
        size: randomInteger(2,50),
        speed: randomInteger(2,5),
        color: COLORS[randomInteger(0,4)]
    });
}