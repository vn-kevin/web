import './index.html';
import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import Abtn from './../components/IndexBtn/btn.js';

import {Row,Col,QueueAnim} from 'antd';
import banner from './images/banner_05.jpg';
import logo from './images/lg.png';
import ad4img from './images/ad4_03.jpg';
import ad5img from './images/ad5.jpg';
import ad3img from './images/ad3_53.jpg';
let mad;

var Index = React.createClass({
    displayName: 'Index',
    setContent(){
    	let ad1_data=[{
    		title:"安全",
    		sub:"数据加密，安全专护航"
    	},{
    		title:"专业",
    		sub:"帮助建筑企业实现互联网+"
    	},{
    		title:"高效",
    		sub:"今天，从使用day建筑开始"
    	}];
    	let ad2_data=[{
    		title:"证书管理",
    		sub:"证书太多难维护？借入借出不好管理？<br />让证书管理更加可视化！"
    	},{
    		title:"舆情监控",
    		sub:"企业舆情难监控？招标信息实时跟踪难度大？<br />    让舆情推送更加及时！"
    	},{
    		title:"项目管理",
    		sub:"计划安排乱，项目延期多，反馈不及时？<br /> 确保项目进度，降低延期风险！"
    	},{
    		title:"招标管理",
    		sub:"招投标流程难规范？信息同步费时费力？<br />让企业招投标流程更加标准化！"
    	},{
    		title:"组织架构",
    		sub:"企业员工角色不同，分工难明确？<br />可个性配置的组织架构，根据不同角色进行权限控制！"
    	},{
    		title:"更多......",
    		sub:"敬请期待"
    	}];
    	return (
    		<QueueAnim leaveReverse={true} type={['top','bottom']}>
	    		<Row className="header" key="1">
	    			<Col span="24">
	    				<div className="ow">
	    					<img src={logo} className="fl"/>
	    					<div className="fl menu">
	    						<a href="#" className="active">首页</a>
	    						<a href="#">解决方案</a>
	    						<a href="#">价格</a>
	    						<a href="#">帮助中心</a>
	    						<a href="#">关于我们</a>
	    					</div>
	    					<div className="fr lg_btn">
	    						<a href="https://pclogin.test.daydao.com/login?source=dayjz">登录</a>
	    						<a href="https://pclogin.test.daydao.com/reg/company?source=dayjz&amp;regtype=true">注册</a>
	    					</div>
	    				</div>
	    			</Col>
	    		</Row>
	    		<Row key="2">
	    			<Col span="24">
						<div className="banner">
							<div className="txt_cont">
								<h2 data-parallax='{"z": -80}'>中康信息</h2>
								<h1 data-parallax='{"z": 80}'>互联网+建筑 云平台管理正式上线</h1>
								<a href="#mobile" className="gom" data-parallax='{"z": 160}'>手机端下载</a>
							</div>
							<img src={banner} />
						</div>
					</Col>
	    		</Row>
	    		<Row className="ad1" key="3">
	    			<Col span="24">
	    				<div className="ow" style={{overflow:"hidden"}}>
	    					<Abtn data={ad1_data} title="50"></Abtn>
	    				</div>
	    			</Col>
	    		</Row>
	    		<Row className="ad2" key="4">
	    			<Col span="24">
	    				<div className="ow" style={{overflow:"hidden"}}>
	    					<h1 data-parallax='{"z": 40}'>建筑行业信息化管理一站式平台</h1>
	    					<Abtn data={ad2_data} title="450"></Abtn>
	    				</div>
	    			</Col>
	    		</Row>
	    		<Row className="ad3" key="5">
	    					<div className="txt_cont">
		    					<h2 data-parallax='{"z": -80}'>现在，就开始使用day建筑</h2>
		    					<a href="#mobile" className="gom" data-parallax='{"z": 80}'>立即注册</a>
	    					</div>
	    					<img src={ad3img} data-parallax='{"y": -100}'/>
	    		</Row>
	    		<Row className="ad4" key="6">
	    			<Col span="24">
	    				<div className="ow">
	    					<h1 data-parallax='{"z": 80}'>下载day建筑，实现电脑、手机多平台一体化办公</h1>
	    					<p data-parallax='{"z": -80}'>多端同步，随时随地，省时省心</p>
	    					<img src={ad4img} className="img" data-parallax='{"z": 40}'/>
	    				</div>
	    				
	    			</Col>
	    		</Row>
	    		<Row className="ad5" key="7">
	    			<Col span="24">
	    				<div className="ow">
	    					<h1 data-parallax='{"z": 40}'>他们都选择了day建筑</h1>
	    					<img src={ad5img} data-parallax='{"z": 50}'/>
	    				</div>
	    				
	    			</Col>
	    		</Row>
	    		<Row className="ad6" key="8">
	    			<Col span="24">
	    				<div className="ow">
	    					<h3>
	    						<a href="#">解决方案</a>
	    						<a href="#">新闻动态</a>
	    						<a href="#">升级日志</a>
	    						<a href="#">关于我们</a>
	    					</h3>
	    					<div className="tell">
	    						<span className="fl">400-862-9966</span>
	    						<div className="fl">
	    							<p>工作日：9：00-19：00</p>
	    							<p>节假日：9：00-18：00</p>
	    						</div>
	    					</div>
	    					<p className="ft">Copyright 2013-2018 数据库 All Rights Reserved.版权所有 中康建设信息有限公司</p>
	    				</div>
	    			</Col>
	    		</Row>
	    		
    		</QueueAnim>
    	);
    },
    render() {
        return (
            <div>{this.setContent()}</div>
        );
    }
});

ReactDOM.render(<Index/>, document.getElementById('root'));

