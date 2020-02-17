//  引入模块
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// 引入样式
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
    // 分别设置鼠标移入和移出事件
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
    // 创建搜索关键词的列表
    createSearchWords() {
        return this.props.searchList.map((item, index) => <li key={index} className="search-word"><a href="">{item}</a></li>)
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
                            <ul className="search-word-box">{ this.createSearchWords() }</ul>
                        </div>
                    </div>
                </div>
                {/* 导航栏 */}
                <div className="nav-head">
                    <ul className="nav-head-inner">
                        <li><span>全部商品分类</span></li>
                        <li><a href="">流行音乐</a></li>
                        <li><a href="">古典音乐</a></li>
                        <li><a href="">舞台剧</a></li>
                        <li><a href="">儿童亲子</a></li>
                        <li><a href="">音乐剧</a></li>
                        <li><a href="">VIP+专区</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

// 设置默认属性
Header.defaultProps = {
    leftContent: '汇聚每一个感动',
    myOrder: '我的订单',
    mobileOrder: '手机购票',
    placeholder: '请输入搜索内容',
    clickTitle() {},
    search() {}
}