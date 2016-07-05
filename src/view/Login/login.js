var React = require('react');
import $ from 'Jquery';
import styles from './login.less';
import imgs from './../images/login_lg.png';

import xFetch from './../../services/xFetch';

var Login = React.createClass({
    displayName: 'Login',
    isLogin(){
    	if(false){
    		this.props.history.replaceState(null,'/home');
    	}
    },
    handleClick(){
    	var us=this.refs.user; 
    	var ps=this.refs.psw;
    	$(us).val('369zxc');
    	$(ps).val('123456');

		xFetch('/api/login').then(({
			jsonResult
		}) => {
			console.log(jsonResult)
			if(jsonResult.success){
				this.props.history.replaceState(null,'/home');
			}
		});
    },
    render() {
    	this.isLogin();
        return (
            <div className={styles.login}>
				 <div className={styles.pos}>
					<div className={styles.main}>
						<div className={styles.lg_css}>
							<img src={imgs} style={{width:'50%'}} />
						</div>
						<div className={styles.lg_cp}><input type="text" className="weui_input" placeholder="帐号" ref="user" /></div>
						<div className={styles.lg_cp}><input type="password" className="weui_input" placeholder="密码" ref="psw"/></div>
						<div className={styles.lg_bp}>
							<input type="submit" value="登录" className={styles.weui_btn +' weui_btn'} id="loginBtn" onClick={this.handleClick}/>
							<p className={styles.lg_fg}><a href="#" className={styles.login_a}>忘记密码？</a></p>
						</div>
					</div>
				</div>
            </div>
        );
    }
});

module.exports = Login;