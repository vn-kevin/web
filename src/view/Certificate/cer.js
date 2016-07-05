var React = require('react');
import Tops from './../../components/top.js';
import {Row,Col,Select} from 'antd';
import Lists from './../../components/List/list.js';
const Option = Select.Option;

var Cer = React.createClass({
    displayName: 'Cer',
    handleChange(value){
    	console.log(`selected ${value}`);
    },
    render() {
        return (
            <div style={{overflowX:"hidden"}}>
            	<Tops title="证书管理" {...this.props} isSearch="true" isGoBank="true" />
            	<Row gutter={2} style={{padding:"3px 0"}}>
            		<Col span="12">
            			<Select size="large" defaultValue="状态" style={{ width: "100%" }} onChange={this.handleChange}>
					      <Option value="0">状态</Option>
					      <Option value="1">不限</Option>
					      <Option value="2">库存</Option>
					      <Option value="3">已借出</Option>
					      <Option value="4">押证</Option>
					      <Option value="5">年审中</Option>
					      <Option value="6">已退休</Option>
					      <Option value="7">备案</Option>
					    </Select>
            		</Col>
            		<Col span="12">
            			<Select size="large" defaultValue="期限" style={{ width: "100%" }} onChange={this.handleChange}>
					      <Option value="0">期限</Option>
					      <Option value="1">不限</Option>
					      <Option value="2">正常</Option>
					      <Option value="3">即将过期</Option>
					      <Option value="4">已过期</Option>
					    </Select>
            		</Col>
            	</Row>
            	<Lists></Lists>
            </div>
        );
    }
});

module.exports = Cer;