// 引入模块
import React, { Component } from 'react';

// 引入样式
import './KindList.less';

export default class KindList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    createKindList() {
        return this.props.kindList.map((item, index) => <li key={index}><a href=""><i className={ 'kind-icon ' + 'kind-icon-position' + index }></i><span>{item}</span><i className={ 'arrow-icon ' + 'arrow-icon-position'}></i></a></li>)
    }
    createKindDetail() {
        return this.props.detailList.map((item, index) => item.map((value, idx) => <div key={index}>{value}</div>))
    }
    render() {
        return (
            <div>
                <ul className="kindlist">
                    { this.createKindList() }
                </ul>
                <div className="kind-detail-box">
                    { this.createKindDetail() }
                </div>
            </div>
        )
    }
}

// 设置默认属性
KindList.defaultProps = {
    kindList: [ '演唱会', '音乐会', '话剧歌剧', '儿童亲子', '音乐剧', '戏曲综艺', '展览' ],
    detailList: [['流行', '摇滚', '民谣', '民族', '其它'], ['交响', '独奏', '其它'], ['话剧', '歌剧', '歌舞剧', '其它'], ['儿童剧', '亲子活动', '其它'], ['音乐剧'], ['京剧', '昆剧', '越剧', '相声小品'], ['展览']]
}