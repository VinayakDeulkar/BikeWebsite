let pas,passnode,errnode2,formnode;
$(function(){
    pas=$("#showpass");
    passnode=$("#pass");
    errnode2=$("#error2");
    pas.change(()=>showPass());
});

function showPass(){
    
    
    if(pas.prop('checked'))
    {
        passnode.attr('type',"text");   
        console.log("chceked box is checked");
    }
    else{
        passnode.attr('type',"password");
    console.log("chceked box is unchecked");
    }

}


function vali(){
    var name=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value;

    var errnode1=document.getElementById("error1");
    var errnode2=document.getElementById("error2");
    var success=document.getElementById("success");

    var expName=/^[a-zA-Z ]{2,100}$/;
    var expPass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])/;
    

    if(!(expName.test(name)))
    {
        document.getElementById("uname").focus();
        errnode1.innerHTML="Only alphabets Allowed";
        errnode1.className="alert alert-danger";
    }
    else if(!(expPass.test(pass))){
        errnode1.className="col-md-12 mt-3 text-left";
        errnode1.innerHTML=("");
        document.getElementById("pass").focus();
        errnode2.innerHTML="Enter Valid password";
        errnode2.className="alert alert-danger";
       
    }
    else 
    {
	    errnode1.className="col-md-12 mt-3 text-left";
        errnode1.innerHTML=("");
	    errnode2.className="col-md-12 mt-3 text-left";
        errnode2.innerHTML=("");
        success.innerHTML="Loging in";
        success.className="alert alert-success";
    }
}