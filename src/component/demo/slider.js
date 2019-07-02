import React, {Component} from 'react'
import './demo.css'

export class Picker extends Component {
    constructor(props) {
        super();
        this.state = {
            max: props.max,
            min: props.min,
            step: props.step
        };
        this.dis = 0;
        this.curX = 0;
        this.arr = [];
    }

    componentWillMount() {
        const {max, min, step} = this.state;
        this.pushArr(max,min,step);
    }

    componentDidMount() {
        this.setTra();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.max!==this.props.max || nextProps.min!==this.props.min || nextProps.step!==this.props.step){
            this.setState({
                max: nextProps.max,
                min: nextProps.min,
                step: nextProps.step
            });
            this.pushArr(nextProps.max,nextProps.min,nextProps.step);
            this.setTra();
        }
    }

    // 获取选中数据
    getValue = () => {
        const {value} = this.state;
        return value
    };

    // 位置设置
    setTra = () => {
        if (this.arr.length % 2 === 0) {
            this.refs.picker.style.transform = `translate3d(${-25}px,0,0)`;
            this.setState({value:this.arr[(this.arr.length)/2]})
        }else {
            this.refs.picker.style.transform = `translate3d(0,0,0)`;
            this.setState({value:this.arr[(this.arr.length-1)/2]})
        }
    };

    // 数据写入数组Arr
    pushArr=(max,min,step)=>{
        this.arr=[];
        const num = (max - min) / step + 1;
        for (let i = 0; i < num; i++) {
            let a = i * step + min;
            this.arr.push(a)
        }
    };

    // 滑动三连
    onTouchStart(e) {
        this.startX = e.targetTouches[0].pageX;
        this.refs.picker.style.transform = `translate3d(${this.curX}px,0,0)`;
    }
    onTouchMove(e) {
        let endX = e.targetTouches[0].pageX;
        this.dis = endX - this.startX;
        this.refs.picker.style.transform = `translate3d(${this.curX + this.dis}px,0,0)`;
    }
    onTouchEnd(e) {
        let mid = this.curX + this.dis;
        if (mid > 0) {
            mid = Math.floor(mid / 50) * 50;
        } else {
            mid = Math.ceil(mid / 50) * 50;
        }
        this.curX = mid;
        let wid = (this.refs.picker.clientWidth - 50) / 2;
        if (this.curX < -wid) {
            this.curX = -wid;
            this.dis = 0
        } else if (this.curX > wid) {
            this.curX = wid;
            this.dis = 0
        }
        let curXif = this.arr.length % 2 === 0 && this.curX % 50 === 0 ? this.curX + 25 : this.curX;
        this.refs.picker.style.transform = `translate3d(${curXif}px,0,0)`;
        if( this.arr.length % 2 === 0 ){
            this.setState({
                value:this.arr[(this.arr.length/2-1)-((curXif-25) / 50)]
            });
        }else {
            this.setState({
                value:this.arr[((this.arr.length-1)/2)-(curXif / 50)]
            });
        }
    }

    render() {
        return (
            <div>
                <div style={{textAlign:'center',paddingBottom:'10px',color:'#f66'}}>
                    {this.state.value}
                </div>
                <div
                    style={style.container}
                    onTouchStart={this.onTouchStart.bind(this)}
                    onTouchMove={this.onTouchMove.bind(this)}
                    onTouchEnd={this.onTouchEnd.bind(this)}
                >
                    <div style={style.mask}/>
                    <div style={style.frame}/>
                    <div
                        style={style.content}
                        ref="picker"
                    >
                        {this.arr.map((item, index) => {
                            return (
                                <div style={style.item} key={index}>{item}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    container: {
        width: "350px",  height: "40px",
        overflow: "hidden",
        position: 'relative',
        display: "flex", justifyContent: "center", alignItems: "center",
        margin: "0 auto",
        backgroundColor: "#fff"
    },
    mask: {
        width: "350px", height: "40px",
        background: "linear-gradient(90deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,.2)),linear-gradient(-90deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,.2))",
        backgroundPosition: "left,right",
        backgroundSize: "150px 100%",
        backgroundRepeat: "no-repeat",
        position: "absolute", zIndex: "3"
    },
    frame: {
        position: "absolute",
        left: 150,
        width: "50px", height: "40px",
        borderRadius: "10px",
        boxShadow: `0 0 10px 0 rgba(0,0,0,0.1)`,
        border: `1px solid rgba(0,0,0,0.5)`
    },
    content: {
        display: "flex",
        lineHeight: "38px",
        transition: "all 0.2s ease 0s",
    },
    item: {
        width: "50px",
        textAlign: "center"
    }
};

class Slider extends Component {
    render() {
        return (
            <div>
                <div className={'title'}>
                    ## 移动端滑块（F12查看）
                </div>
                <div className={'slider'}>
                    <Picker ref={com=>this.pic=com} min={0} max={15} step={1}/>
                </div>
            </div>
        )
    }
}

export default Slider;



