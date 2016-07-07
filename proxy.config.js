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
            data:[{"accessorys":[],"certificateId":128824,"certificateModuleName":"","certificateName":101,"certificateNameValue":"一级建造师执业资格证","certificateNumber":"","certificateType":1,"certificateTypeName":"建造类","contractUnit":"","contractUnitId":0,"corpId":35645,"corpName":"","corpNameId":"","creator":210,"duty":"","headImg":"http://172-1-1-5.lightspeed.hstntx.sbcglobal.net:8080/null","id":0,"isAppear":true,"jobClass":"","location":"123456","majorId":"1","majorName":"水利水电,建筑工程","majors":[],"managementNumber":"","msignTime":"2016-07-06","mvalidity":"2016-07-26","openingDate":"","operationProject":"","personId":1,"personName":"张一","post":"","practisingCertificate":"123456","province":1,"provinceName":"北京市","records":[],"register":"123456","registeredCertificate":"123456","remarks":"","seal":"123456","state":1,"stateName":"库存","technicalTitles":"","termValidity":"","timeCreated":"2016-07-06 19:37:05","timeModified":"2016-07-07 09:46:46","unitsIssued":"123456","useOrgId":0,"useOrgName":"","validState":2,"validity":"2016-07-07","whoModified":210},{"accessorys":[],"certificateId":129136,"certificateModuleName":"","certificateName":102,"certificateNameValue":"一级建造师注册证","certificateNumber":"","certificateType":1,"certificateTypeName":"建造类","contractUnit":"","contractUnitId":0,"corpId":35645,"corpName":"","corpNameId":"","creator":210,"duty":"","headImg":"http://172-1-1-5.lightspeed.hstntx.sbcglobal.net:8080/null","id":0,"isAppear":true,"jobClass":"","location":"1234","majorId":"1","majorName":"水利水电","majors":[],"managementNumber":"","msignTime":"2016-07-14","mvalidity":"2016-07-30","openingDate":"","operationProject":"","personId":1,"personName":"张一","post":"","practisingCertificate":"1234","province":1,"provinceName":"北京市","records":[],"register":"1234","registeredCertificate":"1234","remarks":"","seal":"1234","state":1,"stateName":"库存","technicalTitles":"","termValidity":"","timeCreated":"2016-07-07 11:27:37","timeModified":"","unitsIssued":"","useOrgId":0,"useOrgName":"","validState":2,"validity":"2016-07-14","whoModified":0},{"accessorys":[],"certificateId":129143,"certificateModuleName":"","certificateName":129144,"certificateNameValue":"111111","certificateNumber":"","certificateType":127,"certificateTypeName":"特殊工种","contractUnit":"","contractUnitId":0,"corpId":35645,"corpName":"","corpNameId":"","creator":210,"duty":"","headImg":"http://172-1-1-5.lightspeed.hstntx.sbcglobal.net:8080/null","id":0,"isAppear":true,"jobClass":"111111","location":"","majorId":"","majorName":"","majors":[],"managementNumber":"","msignTime":"","mvalidity":"","openingDate":"","operationProject":"111111","personId":1,"personName":"张一","post":"","practisingCertificate":"111111","province":0,"provinceName":"","records":[],"register":"","registeredCertificate":"111111","remarks":"","seal":"","state":1,"stateName":"库存","technicalTitles":"","termValidity":"","timeCreated":"2016-07-07 11:30:08","timeModified":"","unitsIssued":"","useOrgId":0,"useOrgName":"","validState":2,"validity":"2016-07-30","whoModified":0}]
          });
    },500)
  }
};
