import React, {Component} from 'react';

const cards = [
    'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
    // 'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
    // 'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
];

class SlideCard extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.x='';
    }

    onTouchStart = (e, index) => {
        // if(this.x){
        //     this.startX=this.x;
        //     this.startY=this.y;
        // }else {
        //     this.startX = e.targetTouches[0].pageX;
        //     this.startY = e.targetTouches[0].pageY;
        // }
        this.startX = e.targetTouches[0].pageX;
        this.startY = e.targetTouches[0].pageY;
        console.log('开始位置：',this.startX);
        // console.log(this.refs.img.style.transform);
        // this.refs.img.style.transform = `translate3d(${e.screenX}px,${e.screenY},0)`;
    };
    onTouchMove = (e) => {
        this.endX = e.targetTouches[0].pageX;
        this.endY = e.targetTouches[0].pageY;
        console.log('结束位置：',this.endX);

            this.x=this.endX-this.startX;
            this.y=this.endY-this.startY;
        console.log('移动：',this.x);
        e.target.style.transform = `translate3d(${this.x}px,${this.y}px,0)`;
        // this.refs.img.style.zIndex = '5';
    };
    onTouchEnd = (e) => {
        this.endX = e.pageX;
        this.endY = e.pageY;
        console.log(this.endX-this.startX);
        e.target.style.transform = `translate3d(${this.x}px,${this.y}px,0)`;
        // e.target.style.transform = `translate3d(0,0,-150px)`;
    };

    render() {
        return (
            <div className={'card_container flex-middle'}
                 // onMouseDown={this.onTouchStart}
                 // onMouseUp={this.onTouchEnd}
            >
                <div className={'card'}
                    onTouchStart={this.onTouchStart}
                    onTouchMove={this.onTouchMove}
                    // onTouchEnd={this.onTouchEnd}
                    //  onMouseDown={this.onTouchStart}
                    // onMouseMove={this.onTouchMove}
                    // onMouseUp={this.onTouchEnd}
                >
                    {
                        cards.map((item, index) => {
                            return (
                                <img key={index} src={item} className={'card_img'}
                                     style={{
                                         width: '225px',
                                         height: '400px',
                                         position: 'absolute',
                                         // zIndex: index,
                                         transform: `translate3d(0px, 0px, -${30 * index}px) rotate(0deg)`,
                                     }}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

class Card extends Component {

    render() {
        return (
            <div>
                <div className={'title'}>
                    ## 卡片
                </div>
                <div className={'card_card'}>
                    <SlideCard/>
                </div>
            </div>
        )
    }
}

export default Card;
