$(document).ready(function(){
    $("#enquirenow").submit(function(){
        var email = $("#email").val();
        var name = $("#myname").val();
        if(email=='' || name=='')
        {
            $("#error").html("Please fill up all required fields")
            setTimeout(function(){$('#error').fadeOut();},3000);
        }
        else
        {
            $('#loadingimage').show();
            $.ajax({
                type: "POST",
                url: "https://www.exceltradinguae.com/dataforms/enquiry.php",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData:false,
                success: function (result) {
                                                $('#loadingimage').hide();
                                                $("#enquirenow")[0].reset();
                                                if(result=='1'){ 
                                                    $("#success").html("Thank you for your interest we will get back to you soon.")
                                                    setTimeout(function(){$('#success').fadeOut();},3000);
                                                }
                                                else
                                                {
                                                    $("#error").html("Failed to send your message.")
                                                    setTimeout(function(){$('#error').fadeOut();},3000);
                                                }
                                            },
                error: function(){
                                    $("#enquirenow")[0].reset();
                                    $("#error").html("Failed to send your message")
                                 }
                });
        }
    return false;
    });

});