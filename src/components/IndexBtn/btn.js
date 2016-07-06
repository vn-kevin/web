var React = require('react');
import marked from './marked.min.js';

var Abtn = React.createClass({
    displayName: 'Abtn',
    rawMarkup: function(str) {
      var rawMarkup = marked(str, {sanitize: false});
      return { __html: rawMarkup };
    },
    render() {
        var ats=this.props.title;
        console.log(ats)
    	var list=this.props.data.map((el,index)=>{
            var vs=(ats-0)+(index*80);
            var vhtml='{"x": -1200, "from-scroll": '+vs+', "distance": 0, "smoothness": 10}';
    		return (
    			<li className="li" key={index} data-parallax={vhtml}>
    				<i className={'icon icon'+index}></i>
    				<strong className="t">{el.title}</strong>
    				<div dangerouslySetInnerHTML={this.rawMarkup(el.sub)}></div>

    			</li>);
    	});
        return (
            <ul className="ls_list" style={{marginLeft:"1200px",width:'100%'}}>{list}</ul>
        );
    }
});
module.exports = Abtn;