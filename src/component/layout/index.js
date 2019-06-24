import React from 'react';
import {Layout, Menu, Breadcrumb} from 'element-react';
import {Link} from "react-router-dom";
import 'element-theme-default';
import '../css/layout.css'
import Routes from '../../route';
import {menus} from '../../route/config';

class Layouts extends React.Component {
    state = {
        selectIndex: "/index"
    };

    componentWillMount() {
        let url = window.location.href;
        let num = url.indexOf("/index");
        let k = url.substr(num);
        this.setState({
            selectIndex: k
        })
    }

    onSelect = (v) => {
        if (v !== this.state.selectIndex) {
            this.setState({
                selectIndex: v
            })
        }
    };

    render() {
        console.log('============渲染次数============');
        const {selectIndex} = this.state;
        return (
            <Layout.Row className='layout'>
                <nav className={'nav'}>
                    <Menu className={'menu'} uniqueOpened defaultActive={selectIndex} onSelect={this.onSelect}>
                        {
                            menus.map(item => {
                                return (
                                    <Menu.SubMenu key={item.key} index={item.key}
                                                  title={<span><i className={item.icon}/>{item.title}</span>}>
                                        {item.child.map(items => {
                                            return (
                                                <Link key={items.key} to={items.key}>
                                                    <Menu.Item index={items.key}>{items.title}</Menu.Item>
                                                </Link>
                                            )
                                        })}
                                    </Menu.SubMenu>
                                )
                            })
                        }
                    </Menu>
                </nav>
                <div className={'section'}>
                    <div className={'header'}>
                        <Breadcrumb separator="/">
                            {menus.map(item => {
                                return (
                                    item.child.map((items, index) => {
                                        return (
                                            items.key === selectIndex ?
                                                <React.Fragment key={index}>
                                                    <Breadcrumb.Item>{item.title}</Breadcrumb.Item>
                                                    <Breadcrumb.Item>{items.title}</Breadcrumb.Item>
                                                </React.Fragment>
                                                : null
                                        )
                                    })
                                )
                            })}
                        </Breadcrumb>
                    </div>
                    <div className={'content'}>
                        <Routes/>
                    </div>
                </div>
            </Layout.Row>
        )
    }
}

export default Layouts;