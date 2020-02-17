// 引入需要的模块
import React, { Component } from 'react';
import axios from 'axios';

// 引入样式
import './Home.less';

// 引入种类列表
import KindList from '../../components/KindList/KindList';

export default class Home extends Component {
    constructor(props) {
        super(props);
        // 状态
        this.state = {
            data: []
        }
    }
    
    render() {
        return (
            <div>
                <div className="home">
                    <KindList></KindList>
                </div>
            </div>
        )
    }
}