let baseURI = localStorage.getItem("baseuri");

setTimeout(function(){
    $('.logo').click(function(){
        location.href = baseURI + '';
    })
    $('.title').click(function(){
        location.href = baseURI + 'pages/curso.html';
    })
    $('.submenu li').click(function(){
        console.log(baseURI + 'pages/categories.html')
        location.href = baseURI + 'pages/categories.html';
    })
    $('.registrate,.aLog').click(function(){
        location.href = baseURI + 'pages/register.html';
    })
    $('.login,.aReg').click(function(){
        location.href = baseURI + 'pages/login.html';
    })
},150)
