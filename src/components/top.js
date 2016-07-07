var React = require('react');
import {Row,Col,Icon} from 'antd';

var Tops = React.createClass({
    displayName: 'Tops',
    goBack(){
    	this.props.history.goBack();
    },
    render() {
    	var subtitle={
			height: "45px",
			background:"#292929",
			textAlign: "center", 
			lineHeight: "45px",
			fontSize: "16px",
			color:"#edd337"
    	};
    	var icoLeftCss={
    		width:'40px',
    		height:'45px',
    		lineHeight:'45px',
    		textAlign: "center",
    		position: "absolute",
    		top:0,
    		left:0
    	}
    	var icoRightCss={
    		width:'40px',
    		height:'45px',
    		lineHeight:'45px',
    		textAlign: "center",
    		fontWeight:"bold",
			position: "absolute",
			top:0,
    		right:0
    	};
    	var icoRightAddCss={
    		width:'40px',
    		height:'45px',
    		lineHeight:'45px',
    		textAlign: "center",
    		fontWeight:"bold",
			position: "absolute",
			top:0,
    		right:"40px"
    	}
    	var isGoBank=this.props.isGoBank?<Icon type="left" style={icoLeftCss} onClick={this.goBack}/>:'';
    	var isSearch=this.props.isSearch?<Icon type="search" style={icoRightCss}/>:'';
    	var isAdd=this.props.isAdd?<Icon type="plus" style={icoRightAddCss} />:'';
        return (
                <Row>
    	   			<Col span="24" style={subtitle}>
    	   				{isGoBank}
    	   				{this.props.title}
    	   				{isSearch}
    	   				{isAdd}
    	   			</Col>
       			</Row>
        );
    }
});

module.exports = Tops;