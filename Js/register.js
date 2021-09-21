let pas,passnode,errnode3,cpassnode,errnode4;
$(function(){
    pas=$("#showpass");
    passnode=$("#pass");
    errnode3=$("#error3");
    cpassnode=$("#cpass");
    errnode4=$("#error4");
    pas.change(()=>showPass());
});

function showPass(){
    
    
    if(pas.prop('checked'))
    {
        passnode.attr('type',"text");
        cpassnode.attr('type',"text");    
        console.log("chceked box is checked");
    } 
    else{
        passnode.attr('type',"password");
        cpassnode.attr('type',"password");
        console.log("chceked box is unchecked");
    }

}


function vali(){
    var name=document.getElementById("uname").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var cpass=document.getElementById("cpass").value;

    var errnode1=document.getElementById("error1");
    var errnode2=document.getElementById("error2");
    var errnode3=document.getElementById("error3");
    var errnode4=document.getElementById("error4");
    var success=document.getElementById("success");

    var expName=/^[a-zA-Z ]{2,100}$/;
    var expMail=/^[a-zA-Z0-9-_]+@+[a-z]+.+[a-z]$/;
    var expPass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])/;
    

    if(!(expName.test(name)))
    {
        document.getElementById("uname").focus();
        errnode1.innerHTML="Only alphabets Allowed";
        errnode1.className="alert alert-danger";
    }
    else if(!(expMail.test(email))){
        errnode1.className="col-md-12 mt-3 text-left";
        errnode1.innerHTML=("");
        document.getElementById("pass").focus();
        errnode2.innerHTML="Enter Valid Email";
        errnode2.className="alert alert-danger";
       
    }
    else if(!(expPass.test(pass))){
        errnode2.className="col-md-12 mt-3 text-left";
        errnode2.innerHTML=("");
        document.getElementById("pass").focus();
        errnode3.innerHTML="Enter Valid password";
        errnode3.className="alert alert-danger";
       
    }
    else if((pass!=cpass)){
        errnode3.className="col-md-12 mt-3 text-left";
        errnode3.innerHTML=("");
        document.getElementById("pass").focus();
        errnode4.innerHTML="Enter Valid password";
        errnode4.className="alert alert-danger";
       
    }
    else 
    {
	    errnode1.className="col-md-12 mt-3 text-left";
        errnode1.innerHTML=("");
	    errnode2.className="col-md-12 mt-3 text-left";
        errnode2.innerHTML=("");
        errnode3.className="col-md-12 mt-3 text-left";
        errnode3.innerHTML=("");
        errnode4.className="col-md-12 mt-3 text-left";
        errnode4.innerHTML=("");
        success.innerHTML="Registration Successfully";
        success.className="alert alert-success";
    }
}