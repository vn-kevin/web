import React, { Component, PropTypes } from 'react';
import {Link } from 'react-router';
import {Row,Col,Icon} from 'antd';
import styles from './home.less';
import bannerimg from './../images/dbanner.jpg';
const App = ({ location }) => {

  var setBanner=function(){
     return (<div className={styles.banner}><img src={bannerimg} style={{width:'100%'}}/></div>);
  };
  var setMenu=function(){
  	var data=[{
  		title:"证书管理",
  		hash:"/cer",
  		ico:"picture"
  	},{
  		title:"我的证书",
  		hash:"/cer",
  		ico:"picture"
  	},{
  		title:"舆情管理",
  		hash:"/cer",
  		ico:"picture"
  	},{
  		title:"我的舆情",
  		hash:"/cer",
  		ico:"picture"
  	},{
  		title:"项目管理",
  		hash:"/cer",
  		ico:"picture"
  	},{
  		title:"项目荣誉栏",
  		hash:"/cer",
  		ico:"picture"
  	}];

  	var menus=data.map(function(el,index){
  		return ( 
  			<Col span="6" key={index} className={styles.t_c}>
  			<Link to={el.hash} >
  				<Icon type={el.ico} className={styles.ficons}></Icon>
  				<span className={styles.fname}>{el.title}</span>
  			</Link>
  			</Col>
  		)
  	})
  	return (<div className={styles.menusB}>
  			{menus}
  		</div>)
  };
  return (
   	<div className={styles.normal}>
   		<Row>
   			<Col span="24" className={styles.subtitl}>
   				day建造
   			</Col>
   		</Row>
   		<Row>
   			<Col span="24">
   				{setBanner()}
   			</Col>
   		</Row>
   		<Row>
   			<Col span="24">
   				{setMenu()}
   			</Col>
   		</Row>
   		
   	</div>
  );
};

App.propTypes = {
};

export default App;
