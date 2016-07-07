var React = require('react');
import Tops from './../../components/top.js';
import {Row,Col,Select,Button} from 'antd';
import Lists from './../../components/List/list.js';
import Ajax from './../../services/Ajax.js';

const Option = Select.Option;
const pageSize=10;

var Cer = React.createClass({
    displayName: 'Cer',
    getInitialState(){
        return {
            loading:true,
            pageIndex:1,
            pageSize:pageSize,
            list:[]
        }
    },
    componentDidMount(){
        this.getAjax();
     },
    getAjax(...obj){
        var that=this;
        var opts={};
        opts.pageSize=pageSize;
        Object.assign(opts,...this.state,...obj);

        Ajax({
            url:'/api/cerlist',
            data:opts,
            success:function(data){
                var mdata=opts.pageIndex==1?(data.data):(that.state.list.concat(data.data));
                opts.loading=false;
                opts.list=mdata;
                that.setState(opts);
            }
        });
    },
    handleChange(value){
        this.getAjax({
            loading:true,
            pageIndex:1,
            type:value
        });
    },
    handleClick(){
       
        var qindex=(this.state.pageIndex-0)+1;
        var obj={
            pageIndex:qindex
        }
        obj.type=this.state.type;
        this.getAjax(obj);
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
            	<Lists data={this.state.list}></Lists>
                <Button size="large" loading={this.state.loading} style={{width:'100%'}} onClick={this.handleClick}>{this.state.loading?'加载中':'加载更多'}</Button>
            </div>
        );
    }
});

module.exports = Cer;