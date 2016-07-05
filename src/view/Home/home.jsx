import React, { Component, PropTypes } from 'react';
import {Link } from 'react-router';
import {Row,Col,Carousel,Icon} from 'antd';
import styles from './home.less';
const App = ({ location }) => {

  var setBanner=function(){
  	 var ds=['http://img.zcool.cn/community/focus/d7d45779dda200000163558adea2.jpg','http://img.zcool.cn/community/focus/d40d5779dbf700000163555503d7.jpg','http://img.zcool.cn/community/focus/84205779cb88000001635592f038.jpg'];
  	 var imgs=ds.map(function(el,index){
  	 		var style={
  	 			"backgroundImage":"url("+el+")"
  	 		};
  	 	 	return (<div key={index} style={style} className={styles.banner_img}></div>)
  	 	 });
  	 return (<Carousel autoplay className={styles.banner}>{imgs}</Carousel>)
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
   				Day建造
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
