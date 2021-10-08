$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
        var img = $('<a href="index.html"> <img id="logo"src="'+data.logo+'"width="60" height="60" class="d-inline-block align-top" alt=""></a>')
        var a = $(' <a class="nav-link text-white" href="index.html">'+data.about+'</a>')
        var act = $(' <a class="nav-link dropdown-toggle text-white" href="activites.html" id="navbardrop" data-toggle="dropdown">'
        +data.activity+ '</a>'
        +'<div class="dropdown-menu">'
        +'<a class="dropdown-item" href="activites.html#careersnetworking">'+data.act[0]+'</a>'
        +'<a class="dropdown-item" href="activites.html#newsletterajax">'+data.act[1]+'</a>'
        +'<a class="dropdown-item" href="activites.html#academict">'+data.act[2]+'</a>'+
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
$.ajax({
    url:'data.json',
    dataType: 'json',
    success: function(data){
        var careers = $('  <p class = "category">'+data.activities.category[0]+'</p>'+
        '<h2 class="card-title">'+data.activities.title[0]+'</h2>'+
        '<p class="card-text" >'+data.activities.text[0]+'</p>')
        var news = $('  <p class = "category">'+data.activities.category[1]+'</p>'+
        '<h2 class="card-title">'+data.activities.title[1]+'</h2>'+
        '<p class="card-text" >'+data.activities.text[1]+'</p>')
        var tutor = $('  <p class = "category">'+data.activities.category[2]+'</p>'+
        '<h2 class="card-title">'+data.activities.title[2]+'</h2>'+
        '<p class="card-text" >'+data.activities.tutor[0]+'<a href="tutorap.html"> Here </a>'+data.activities.tutor[1]+'</p>')
       $('#careersnetworking').append(careers)
       $('#newsletterajax').append(news)
       $('#academict').append(tutor)
    }
})

const body = document.body,
    scrolling = document.getElementsByClassName("smooth")[0],
    height = scrolling.getBoundingClientRect().height,
    speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smooth() {
    offset += (window.pageYOffset - offset) * speed;
    var scroll = "translateY(-" + offset + "px)";
    scrolling.style.transform = scroll;
    callScroll = requestAnimationFrame(smooth);
}

smooth();
