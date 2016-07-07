import $ from 'Jquery';
function Ajax(option){
	var that = this;
	//请求数据防xss攻击处理
	if (option.data) {
		var newData = "";
		var sType = typeof option.data;
		if (sType === "string") {
			newData = option.data;
		} else {
			newData = JSON.stringify(option.data);
		}
		newData = newData.replace(/<script/igm, "&lt;script").replace(/<\/script>/igm, "&lt;script&gt;");
		if (sType === "string") {
			option.data = newData;
		} else {
			option.data = JSON.parse(newData);
		}
	}
	//默认参数
	var data = {
		type: "post",
		dataType: "json",
		//contentType: "application/json;charset=UTF-8",
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			if (XMLHttpRequest.readyState == 4) {
				that.Msg('请求出错，请重试');
			}
		}
	}
	$.extend(data, option);
	//重写success，如果传回的data.result值为true,才产生回调，供模块使用
	data.success = function(obj) {
		//返回数据防xss攻击处理
		if (obj) {
			var newData = "";
			var sType = typeof obj;
			if (sType === "string") {
				newData = obj;
			} else {
				newData = JSON.stringify(obj);
			}
			newData = newData.replace(/<script/igm, "&lt;script").replace(/<\/script>/igm, "&lt;script&gt;");
			if (sType === "string") {
				obj = newData;
			} else {
				obj = JSON.parse(newData);
			}
		}
		if (data.dataType == "html") {
			obj = JSON.parse(obj);
		}
		//这里的status不为1000表示不在顶部做提示的抛错特殊情况
		if (obj.returnCode && obj.returnCode != 0) {

			//给个错误提示
			that.Msg(obj.returnMessage);

			//如果登陆会话已过期，就弹出登陆框
			if (obj.returnCode == "999994") {
				setTimeout(function() {
					window.location.href = obj.returnData;
				}, 2000);
			}
		}
		typeof option.success == "function" && option.success(obj);
	}
	return $.ajax(data);
}
export default Ajax;