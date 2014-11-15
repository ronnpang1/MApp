//user login validation
function login_validation(){
    $(document).ready(function(){
        $("#form_login_submit").click(function(){
            var username = $("#form_username_login").val();
            var password = $("#form_password_login").val();
            $.ajax({
                url: "http://192.168.1.17:8000",
                data: "username: "+username+", password: "+password,
                type: 'POST',
                success: function (resp) {
                    alert(resp);
                },
                error: function(e) {
                    alert('Error: '+e);
                }  
            });
        });
    });
}
//SAP 
function goTo_register(){
    document.getElementById("login_container").style.display = 'none';
	document.getElementById("register_container").style.display = 'block';
}
login_validation();