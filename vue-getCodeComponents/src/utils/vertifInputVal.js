let queryInputVal = {};

//:注明  以下的验证正则根据业务需求制定  故这里没有细化


/*
 * 登录界面的输入框验证api start
 * */
queryInputVal.toCheckLoginAccount = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckLoginPW = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckLoginPC = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckLoginSC = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

/*
 * 登录界面的输入框验证api end
 * */


/*
 * 找回密码界面的输入框验证api start
 * */
queryInputVal.toCheckGetBackAccount = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckGetBackNpW = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckNpWAgain = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckGetBackEC = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

/*
 * 找回密码界面的输入框验证api end
 * */


/*
 * 注册界面的输入框验证api start
 * */
queryInputVal.toCheckRegisterAccount = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckRegisterPw = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckRegisterQueryPw = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckRegisterPictureCode = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}


queryInputVal.toCheckRegisterPhoneNum = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckRegisterPhoneCode = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}

queryInputVal.toCheckRegisterInviteCode = function(p){
	if(!p||isNaN(p)){
		return false;
	}
		return true;
}
/*
 * 注册界面的输入框验证api end
 * */


module.exports  = queryInputVal;
