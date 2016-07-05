var React = require('react');
import {Row,Col,Select,Icon,Button} from 'antd';
import styles from './lists.less';

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
            list:{
                loading:false,
                data:[]
            }
        }
    },
    getAjax(){
        var data=this.state.list.data,
            that=this;
            
        var mlist=data.map(function(el,index){
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
        })
        return mlist;
    },
    render() {
        return (
            <div >
            	{this.getAjax()} 
                <Button size="large" loading={false} style={{width:'100%'}}>加载更多</Button>
            </div>
        );
    }
});

module.exports = Lists;