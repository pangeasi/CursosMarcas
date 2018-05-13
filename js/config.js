
document.body.style.fontSize = ((window.innerHeight/100)*12.25)+"%"

setTimeout(function(){

    let categorie
    let curso
    let cssStyle = ""
    let baseURI = localStorage.getItem("baseuri");

    console.log(categorie)
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
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssStyle;
    document.getElementsByTagName('head')[0].appendChild(style);

    $('.submenu li').each(function(i){
        $(this).addClass("smli" + i)
    })

    
},150)