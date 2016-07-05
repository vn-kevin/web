// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/api/todos': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: [
          {
            id: 1,
            text: 'Learn antd',
            isComplete: true,
          },
          {
            id: 2,
            text: 'Learn ant-tool',
          },
          {
            id: 3,
            text: 'Learn dora',
          },
        ],
      });
    }, 500);
  },
  '/api/login':function(req,res){
    setTimeout(function(){
     res.json({
            success: true
          });
    },500)
  },
  '/api/cerlist':function(req,res){
    setTimeout(function(){
     res.json({
            success: true,
            data:[{
            type:1,
            title:'一级建造师执业资格证',
            stime:'2016-06-13',
            etime:'2016-06-19',
            passt:1,
            username:'申森'
        },{
            type:2,
            title:'一级建造师执业资格证',
            stime:'2016-06-13',
            etime:'2016-06-19',
            passt:1,
            username:'申森'
        },{
            type:2,
            title:'一级建造师执业资格证',
            stime:'2016-06-13',
            etime:'2016-06-19',
            passt:1,
            username:'申森'
        }]
          });
    },500)
  }
};
