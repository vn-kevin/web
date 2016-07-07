var React = require('react');
import {Row,Col,Select,Icon} from 'antd';
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
    render() {
        var data=this.props.data,
            that=this;
        
        var mlist=data.map((el,index) => {
            return (
                <Row className={styles.list_li} key={index} >
                    <Col span="6">
                        {that.ckState(el.state)}
                    </Col>
                    <Col span="12">
                        <h3>{el.certificateNameValue}</h3>
                        <p>迁入时间：{el.timeCreated}</p>
                        <p>到期时间：{el.validity}</p>
                    </Col>
                    <Col span="6" style={{position: "relative",height:60}}>
                       <p className={styles.user}>
                         <Icon type="github" /> {el.personName}
                       </p>
                       <span className={styles.ff}></span>
                    </Col>
                </Row>
            );
        });
        return (
            <div>
                {mlist}
            </div>
        );
    }
});

module.exports = Lists;