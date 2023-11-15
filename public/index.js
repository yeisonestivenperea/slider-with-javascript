(function () {
    let contentImg = document.getElementById('contentImg');
    let containerTitle = document.getElementById('container_titulo');

    let nextImg = document.getElementById('next');
    let previosImg = document.getElementById('previos');

    let containerImg = document.getElementById('container_imagen');

    //variables
    let cont = 0;
    let lengthImg = 0;

    let ObjImages = [
        {
            img: 'https://sm.ign.com/t/ign_es/screenshot/default/mario-critica_a8nu.1024.jpg',
            title: 'Mario bros y sus amigos legendarios',
            animation: 'animate__bounceInRight'
        },
        {
            img: 'https://img.lalr.co/cms/2023/05/05192928/1-19.png?size=xl',
            title: 'Bienvenidos a roma',
            animation: 'animate__bounceInUp',
        },
        {
            img: 'https://www.eltiempo.com/files/article_main_1200/uploads/2023/09/01/64f231cb152fb.png',
            title: 'Bienvenidos a la nueva version de mario',
            animation: 'animate__fadeInDown'
        }
    ];

    lengthImg = ObjImages.length - 1;

    contentImg.src = ObjImages[cont].img;
    containerTitle.innerHTML = ObjImages[cont].title;
    containerImg.classList.add(ObjImages[cont].animation);

    nextImg.addEventListener('click', next);
    previosImg.addEventListener('click', previos);

    function next() {
        cont < lengthImg ? cont++ : alert("👉🏽 No hay más imágenes para mostrar 👈🏽");
        contentImg.src = ObjImages[cont].img;
        containerTitle.innerText = ObjImages[cont].title;
        containerImg.classList.remove(ObjImages[cont-1].animation);
        containerImg.classList.add(ObjImages[cont].animation);
    }

    function previos() {
        cont > 0 ? cont--:alert("👉🏽 No hay más imágenes para mostrar 👈🏽");
        contentImg.src = ObjImages[cont].img;
        containerTitle.innerText = ObjImages[cont].title;
        containerImg.classList.remove(ObjImages[cont+1].animation);
        containerImg.classList.add(ObjImages[cont].animation);
    }

})();