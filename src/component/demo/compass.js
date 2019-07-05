import React, {Component} from 'react';
import {Button} from 'element-react';

const circle1=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const circle2=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const circle3=['☰','☱','☲','☳','☴','☵','☶','☷','☰','☱','☲','☳','☴','☵','☶','☷'];

class Compass extends Component {

    state={
        time: 0,
        fun: 'linear'
    };

    pos(p,i,c,w){
        const angle=(2*Math.PI)/c.length * i;
        if(p==='left'){
            return Math.round(w/2 + (w/2.5)*Math.cos(angle) - 25)
        }
        if(p==='top'){
            return Math.round(w/2 + (w/2.5)*Math.sin(angle) - 25)
        }
    }

    time=(v)=>{
        if(v===1){
            this.setState({
                time: 12,
                fun: 'linear'
            })
        }
        if(v===2){
            this.setState({
                time: 6,
                fun: 'linear'
            })
        }
        if(v===3){
            this.setState({
                time: 3,
                fun: 'linear'
            })
        }
        if(v===4){
            this.setState({
                time: 1,
                fun: 'ease'
            })
        }
        if(v===5){
            this.setState({
                time: 0,
                fun: 'linear'
            })
        }
    };

    render() {
        return (
            <div style={{padding:'30px'}}>
                <div className={'title'}>
                    ## 罗盘
                </div>
                <div>
                    <Button type="info" plain={true} onClick={()=>this.time(1)}>开</Button>
                    <Button type="info" plain={true} onClick={()=>this.time(2)}>快</Button>
                    <Button type="info" plain={true} onClick={()=>this.time(3)}>贼快</Button>
                    <Button type="info" plain={true} onClick={()=>this.time(4)}>禁忌</Button>
                    <Button type="danger" plain={true} onClick={()=>this.time(5)}>关</Button>
                    {this.renderContent()}
                </div>
            </div>
        )
    }

    renderContent(){
        const {time,fun}=this.state;
        console.log((360 / circle1.length));
        return(
            <div className={'flex-middle'} style={{position:'relative',width:'550px',height:'600px'}}>
                <div className={'tai_ji rotate'}/>
                <div  className={'compass_c1 rotate1'} style={{animation:`rotate1 ${time}s ${fun} infinite`}}>
                    {
                        circle1.map((item,i)=>{
                            return(
                                <div key={i} className={'flex-middle'} style={{
                                    width:'50px',height:'50px',
                                    transform:`rotate(${90+i*(360/circle1.length)}deg)`,
                                    position:'absolute',
                                    left:this.pos('left',i,circle1,260),
                                    top:this.pos('top',i,circle1,260),
                                }}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <div  className={'compass_c2 rotate2'} style={{animation:`rotate2 ${time}s ${fun} infinite`}}>
                    {
                        circle2.map((item,i)=>{
                            return(
                                <div key={i} className={'flex-middle'} style={{
                                    width:'50px',height:'50px',
                                    transform:`rotate(${90+i*(360/circle2.length)}deg)`,
                                    position:'absolute',
                                    left:this.pos('left',i,circle2,400),
                                    top:this.pos('top',i,circle2,400),
                                }}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <div  className={'compass_c3 rotate3'} style={{animation:`rotate3 ${time}s ${fun} infinite`}}>
                    {
                        circle3.map((item,i)=>{
                            return(
                                <div key={i} className={'flex-middle'} style={{
                                    width:'50px',height:'50px',
                                    transform:`rotate(${90+i*(360/circle3.length)}deg)`,
                                    position:'absolute',
                                    left:this.pos('left',i,circle3,540),
                                    top:this.pos('top',i,circle3,540),
                                }}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default Compass;