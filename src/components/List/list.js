var React = require('react');
import {Row,Col,Select,Icon,Button} from 'antd';
import styles from './lists.less';
import xFetch from './../../services/xFetch';

var Lists = React.createClass({
    displayName: 'Lists',
    ckState(i){
        var mcss={},
            tit='';
        switch(i){
            case 1:
                mcss.color='#259b24';
                tit="库存";
            break;
            default:
                mcss.color="#333";
                tit="暂无";
            break;
        }
        return (<div style={{color:mcss.color}} className={styles.borders}>{tit}</div>);
    },
    getInitialState(){
        return {
            loading:true,
            pageSize:10,
            pageIndex:1,
            list:[]       
        }
    },
    componentDidMount(){
        console.log(this.prorps)
        this.getAjax();
    },
    getAjax(){
        var that=this;
        var opts={
            pageSize:this.state.pageSize,
            pageIndex:this.state.pageIndex
        }
        xFetch('/api/cerlist',opts).then(({jsonResult})=>{
            if(jsonResult.success){
                var mdata=this.state.list.concat(jsonResult.data);
                that.setState({
                    loading:false,
                    list:mdata
                })
            }
        })
    },
    handleClick(){
        this.setState({
            loading:true,
            list:this.state.list
        })
        this.getAjax();
    },
    render() {
        var data=this.state.list,
            that=this;
        var mlist=data.map((el,index) => {
            return (
                <Row className={styles.list_li} key={index} >
                    <Col span="6">
                        {that.ckState(el.type)}
                    </Col>
                    <Col span="12">
                        <h3>{el.title}</h3>
                        <p>迁入时间：{el.stime}</p>
                        <p>到期时间：{el.etime}</p>
                    </Col>
                    <Col span="6" style={{position: "relative",height:60}}>
                       <p className={styles.user}>
                         <Icon type="github" />{el.username}
                       </p>
                       <span className={styles.ff}></span>
                    </Col>
                </Row>
            );
        });
        return (
            <div>
                {mlist}
                <Button size="large" loading={this.state.loading} style={{width:'100%'}} onClick={this.handleClick}>加载更多</Button>
            </div>
        );
    }
});

module.exports = Lists;