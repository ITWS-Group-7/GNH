$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
        var img = $(' <img id="logo"src="'+data.logo+'"width="60" height="60" class="d-inline-block align-top" alt="">')
        // var t = $('<h1 class="text-white" style="padding-buttom: 10px">'+ data.title +'</h1>')
        var a = $(' <a class="nav-link text-white" href="#">'+data.about+'</a>')
        var act = $(' <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">'
        +data.activity+ '</a>'
        +'<div class="dropdown-menu">'
        +'<a class="dropdown-item" href="#">'+data.act[0]+'</a>'
        +'<a class="dropdown-item" href="#">'+data.act[1]+'</a>'
        +'<a class="dropdown-item" href="#">'+data.act[2]+'</a>'+
        '</div>')
        // $('#title').append(t)
        $('#about').append(a)
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
     $('#topic').append(topic)
     $('#contact').append(contact)
     $('#copyright').append(copyright)
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});