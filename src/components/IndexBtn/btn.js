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
        var mcc={
            width:'100%'
        };
        if(ats!=20){
            mcc={transform:"translateX(1200px)"};
         }
    	var list=this.props.data.map((el,index)=>{
            var vs=(ats-0)+(index*80);
            var vhtml;
            if(ats==20){
                if(index==1){
                    vhtml='{"z": -40}'
                }else{
                    vhtml='{"z": 40}'
                }
                
            }else{
                vhtml='{"x": -1200, "from-scroll": '+vs+', "distance": 0, "smoothness": 10}';
            }
    		return (
    			<li className="li" key={index} data-parallax={vhtml}>
    				<i className={'icon icon'+index}></i>
    				<strong className="t">{el.title}</strong>
    				<div dangerouslySetInnerHTML={this.rawMarkup(el.sub)}></div>

    			</li>);
    	});
        return (

            <ul className="ls_list" style={mcc}>{list}</ul>
        );
    }
});
module.exports = Abtn;