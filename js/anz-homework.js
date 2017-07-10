/**
 * Created by DON on 2017/7/10.
 */
$(document).ready(function(){
    var userid = "";
    $("#login-submit-button").click(function(){
        userid = $("#anz-user").val();
        var password = md5($("#anz-password").val());
        var loginFlag = false;
        $.getJSON("models/users.json","",function(data){
            //check userid and password
            $.each(data, function(index,item){
                if(userid == item.UserId){
                    if(password == item.Password){
                        loginFlag = true;
                    }
                }
            });
            if(loginFlag){
                $(".login-info").removeClass("error");
                $(".login-info").addClass("success");
                $(".login-info").text("Login success!");
                $(".login-info").fadeIn();
                setTimeout(function(){
                    window.location.href = "homepage.html?userid=" + userid;
                }, 1000);
            }else{
                $(".login-info").removeClass("success");
                $(".login-info").addClass("error");
                $(".login-info").text("User ID or Password is invalid!");
                $(".login-info").fadeIn();
            }
        });
    });
});