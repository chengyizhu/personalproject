import React, { Component } from 'react';
import './Header.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileIsOpen: false
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    searchResult(e) {
        if (e.keyCode === 13) {
            this.setState({
                
            })
        }
    }
    handleMouseOver() {
        this.setState({
            mobileIsOpen: !this.state.mobileIsOpen,
        })
    }
    handleMouseOut() {
        this.setState({
            mobileIsOpen: !this.state.mobileIsOpen,
        })
    }
    render() {
        let { leftContent, myOrder, mobileOrder, searchList, children } = this.props;
        let { mobileIsOpen } = this.state;
        return (
            <div className="header">
                {/* 头部灰色横条 */}
                <div className="top">
                    <div className="top-inner">
                        <div className="leftContent">{leftContent}</div>
                        {/* 给mobile设置鼠标悬停事件 */}
                        <div>
                            <span>|</span><span>{myOrder}</span><span>|</span><span onMouseOver={this.handleMouseOver}
                            onMouseOut={this.handleMouseOut}><div className="mobileIcon"></div>{mobileOrder}</span>
                        </div>
                        {/* 手机二维码 */}
                        <div className="mobilePic" style={{ display: mobileIsOpen ? '' : 'none'}}>
                            <img src="/static/img/mobile.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="new-header">
                    <div className="header-inner">
                        {/* 网站logo */}
                        <a href="">
                            <div className="web-logo">

                            </div>
                        </a>
                        {/* 区域性选择 */}
                        <div className="city">
                            <a href="">
                                <b><i></i>推荐全国</b>
                            </a>
                        </div>
                        {/* 搜索框 */}
                        <div className="search">
                            <input type="text" placeholder={searchList[0]}/>
                            <div className="search-logo"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Header.defaultProps = {
    leftContent: '汇聚每一个感动',
    myOrder: '我的订单',
    mobileOrder: '手机购票',
    placeholder: '请输入搜索内容',
    clickTitle() {},
    search() {}
}