import React, { Component } from 'react';
import './App.less';

import Header from './components/Header/Header';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* 网站头部组件 通过props传递数据 */}
				<Header searchList={[
					'猫CATS',
					'咖啡因',
					'魔女宅急便',
					'摇滚红与黑',
					'第一次约会',
					'冰雪奇缘',
					'来自远方'
				]}></Header>
				<h1>hello world!</h1>
			</div>
		);
	}
}

export default App;
