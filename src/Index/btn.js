var React = require('react');
import marked from './marked.min.js';

var Abtn = React.createClass({
    displayName: 'Abtn',
    rawMarkup: function(str) {
      var rawMarkup = marked(str, {sanitize: true});
      return { __html: rawMarkup };
    },
    render() {
    	var list=this.props.data.map((el,index)=>{
    		return (
    			<li className="li" key={index}>
    				<i className={'icon icon'+index}></i>
    				<strong className="t">{el.title}</strong>
    				<div dangerouslySetInnerHTML={this.rawMarkup(el.sub)}></div>

    			</li>);
    	});
        return (
            <ul className="ls_list">{list}</ul>
        );
    }
});
module.exports = Abtn;