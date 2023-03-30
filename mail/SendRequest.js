function SendEmail(){
    Email.send({
       Host : "mail.itumadumo.co.za",
       Port: "465",
       Usernme: "info@itumadumo.co.za",
       Password: "+YP)T]j6n73B",
       To: "info@itumadumo.co.za",
      
        From: document.getElelmentByID("Email").value,
        subject: document.getElementById("Subject").value,
        Body: 'Name:'+document.getElementById("Name").value
        + '<br> Email:'+document.getElementById("Email").value
        +"<br> Phone:"+document.getElementById("Phone").value
        +"<br> Message:"+document.getElementById("Message").value
    }).then(
        messaage => alert('message sent successffully')
    );
}