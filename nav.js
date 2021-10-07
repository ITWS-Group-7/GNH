$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
        var img = $(' <img id="logo"src="'+data.logo+'"width="60" height="60" class="d-inline-block align-top" alt="">')
        var a = $(' <a class="nav-link text-white" href="#">'+data.about+'</a>')
        var act = $(' <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">'
        +data.activity+ '</a>'
        +'<div class="dropdown-menu">'
        +'<a class="dropdown-item" href="#">'+data.act[0]+'</a>'
        +'<a class="dropdown-item" href="#">'+data.act[1]+'</a>'
        +'<a class="dropdown-item" href="#">'+data.act[2]+'</a>'+
        '</div>')
        $('#nabout').append(a)
        $('#activity').append(act)
        $('#logo').append(img)
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});
$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
     var topic = $(' <h6 class="text-uppercase mb-4 font-weight-bold">'+data.footer.topic+'</h6>'+'<p>'+data.footer.context+'</p>')
     var contact=$('<h6 class="text-uppercase mb-4 font-weight-bold">'+data.footer.contact+'</h6>'+
     '<p><i class="fas fa-home mr-3"></i>'+data.footer.address+'</p>'+
     '<p><i class="fas fa-id-card-alt mr-3"></i>' +data.footer.president_email+'</p>'+
      '<p><i class="fas fa-envelope mr-3"></i>'+ data.footer.email+'</p>')  
     var copyright = $('<p class="text-center text-md-left">'+data.footer.copyright+'<strong>'+data.footer.group+'</strong> </p>')
     var facebook = $('<a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook-f"></i></a>')
     var twitter = $('<a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-twitter"></i></a>')
     var tiktok = $('<a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fas fa-play-circle"></i></a>')
     var linkedin = $('<a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin-in"></i></a>')
     var instagram = $('<a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-instagram"></i></a>')
     $('#topic').append(topic)
     $('#contact').append(contact)
     $('#copyright').append(copyright)
     $('#facebook').append(facebook)
     $('#twitter').append(twitter)
     $('#tiktok').append(tiktok)
     $('#linkedin').append(linkedin)
     $('#instagram').append(instagram)

    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});