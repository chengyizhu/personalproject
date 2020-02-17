// 引入模块
import React, { Component } from 'react';

// 引入样式
import './App.less';

// 引入header组件
import Header from './components/Header/Header';
// 引入home页面组件
import Home from './pages/Home/Home';

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
				<Home></Home>
			</div>
		);
	}
}

export default App;
