
document.body.style.fontSize = ((window.innerHeight/100)*12.25)+"%"

setTimeout(function(){
    $('.chargin').hide()
    let categorie
    let curso
    let cssStyle = ""
    let baseURI = localStorage.getItem("baseuri");

    if(document.baseURI.match(/pages/) == null){
        let baseURI = document.baseURI;
        localStorage.setItem("baseuri",baseURI)
    }

    $('.submenu li').click(function(){
        localStorage.setItem("categorieName",$(this).text())
    })
    categorie = localStorage.getItem("categorieName")

    if(document.baseURI.match(/categories/) == 'categories'){
        $('.categName').append('<h2>' + categorie + '</h2>')

        $(".curso li").each(function(){

            if($(this).attr('value') != categorie){
                $(this).addClass('hideli')
            }
        })
    }
    
    $('.title').click(function(){
        localStorage.setItem("cursoName",$(this).text())
    })
    curso = localStorage.getItem("cursoName")

    if(document.baseURI.match(/curso/) == 'curso'){
        console.log("im here")
        console.log(curso)
        $(".cursoli").each(function(){

            if($(this).find('h1').text() != curso){
                $(this).addClass('hideli')
            }
        })
    }
    
    
    $('.submenu li').each(function(i){
        if(document.baseURI.match(/pages/) != null){
            cssStyle += ".smli" + i + "::before { background-image: url(../" + $(this).attr('value') + ");}"
        }else{
            cssStyle += ".smli" + i + "::before { background-image: url(" + $(this).attr('value') + ");}"
        }

    })
    $('.footerList li').each(function(i){
        if(document.baseURI.match(/pages/) != null){
            cssStyle += ".footerli" + i + "::before { background-image: url(../" + $(this).attr('value') + ");}"
        }else{
            cssStyle += ".footerli" + i + "::before { background-image: url(" + $(this).attr('value') + ");}"
        }

    })
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssStyle;
    document.getElementsByTagName('head')[0].appendChild(style);

    $('.submenu li').each(function(i){
        $(this).addClass("smli" + i)
    })
    $('.footerList li').each(function(i){
        $(this).addClass("footerli" + i)
    })


    let loged = false
    let user = localStorage.getItem('userLogin')

    
        $('.closeSession').click(function(){
            $('.login,.registrate').show()
            $('.saludoHead,.closeSession').hide()
            localStorage.setItem('userLogin','null')
            user = localStorage.getItem('userLogin')
            console.log(typeof(user))
        })

        $('#loggin').click(function(){
            localStorage.setItem('userLogin',document.getElementById("user").value)
            user = localStorage.getItem('userLogin')
            document.getElementById('saludo').innerHTML = "Hola, " + user
            document.getElementsByClassName('saludoHead')[0].innerHTML = "Hola, " + user
            $('.saludoHead,.closeSession').show()
            $('.login,.registrate').hide()
            location.href = baseURI + '';
            console.log(user.type)
        })


        console.log(user)
    if(user == 'null' || user == null){
        loged = false
        $('.login,.registrate').show()
        $('.saludoHead,.closeSession').hide()

    }else{


        loged = true;
        $('.login,.registrate').hide()
        $('.saludoHead,.closeSession').show()
        document.getElementsByClassName('saludoHead')[0].innerHTML = "Hola, " + user
        
        if(document.baseURI.match(/login/) == 'login'){
            
            document.getElementById('saludo').innerHTML = "Hola, " + user
        }
        
    }
    console.log(loged)
    
},300)
$('.chargin').show()