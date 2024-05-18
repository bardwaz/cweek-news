fetch('https://coding-week-2024-api.onrender.com/api/data')
    // fetch('data.json')
    .then(prom => { return prom.json(); })
    .then(data => {

        Array.from(data).forEach(hmm => {

            if (hmm.author.indexOf(' ') >= 0) {
                hmm.authfirstname = hmm.author.split(' ')[0];
            }

        });

        let i = 0;
        let str = ``;

        while (data[i] != undefined) {
            if (i < 4) {
                let d = document.querySelector(`#big${i + 1}`);
                d.innerHTML = `<div class="proTags" id="proT1">Featured</div>
                            <div class="proTags" id="proT2">${data[i].type}</div>
                            
                            <div class="NewsTitle">${data[i].headline}</div>
                            
                            <div class="auth">${data[i].authfirstname}</div>
                            
                            <div><img src='images/user.png' class='objimg'></div>
                            
                            <div class="datepub">${data[i].date}</div>`;

                d.style.display = "block";
                d.style.backgroundImage = `url("${data[i].image}")`;
                i++;

            }
            else {

                str += `<a href="">
                <div class="art" id="small${i + 1}">
                    <div class="imagesmall" style="background-image: url('${data[i].image}');"></div>
                    <div style="width: 1vw; height: 2vw; display: block; float: right;"></div>
                    <div class="titlesmall">${data[i].headline}</div>
                    <div class="datesmall"><i class="fa-regular fa-calendar"></i> ${data[i].date}</div>
                </div>
            </a>`;

                i++;

            }

        }

        document.querySelector("#test").innerHTML += str;

        let con = document.querySelector('#contentin');

        let arts = document.querySelectorAll('.art');

        let wrp = document.querySelector('#wrap');

        Array.from(arts).forEach(art => {

            art.addEventListener('click', e => {
                e.preventDefault();
                console.log(art.id);

                let j = art.id.replace("small", "") - 1;

                con.innerHTML = `<div id="contentTit">${data[j].headline}</div>

                    <div id="close">x</div>

                    <div id="contentimg" style="background-image: url('${data[j].image}')";></div>

                    <div id="content">${data[j].content}</div>

                    <hr style="position: absolute; top: 5vw; height: 7px; width: 100%; background-color: black;">

                    <div id="authndate">${data[j].author}<br>${data[j].date}</div>`;

                con.parentElement.style.display = 'block';
                con.parentElement.style.animation = 'blurout';
                con.parentElement.style.animationDuration = '0.4s';
                wrp.style.filter = 'blur(12px)';

                document.querySelector('#close').addEventListener('click', f => {

                    con.parentElement.style.animation = 'tonone';
                    con.parentElement.style.animationDuration = '0.6s';
                    setTimeout(() => { con.parentElement.style.display = 'none'; }, 500);
                    wrp.style.filter = 'blur(0px)';


                });



            });

        });

        let imgnews = document.querySelectorAll('.imageNews');
        Array.from(imgnews).forEach(imgnew => {

            imgnew.addEventListener('click', e => {
                e.preventDefault();
                console.log(imgnew);

                let j = imgnew.id.replace("big", "") - 1;

                con.innerHTML = `<div id="contentTit">${data[j].headline}</div>

                    <div id="close">x</div>

                    <div id="contentimg" style="background-image: url('${data[j].image}')";></div>

                    <div id="content">${data[j].content}</div>

                    <hr style="position: absolute; top: 5vw; height: 7px; width: 100%; background-color: black;">

                    <div id="authndate">${data[j].author}<br>${data[j].date}</div>`;

                con.parentElement.style.display = 'block';
                con.parentElement.style.animation = 'blurout';
                con.parentElement.style.animationDuration = '0.4s';
                wrp.style.filter = 'blur(12px)';

                document.querySelector('#close').addEventListener('click', f => {

                    con.parentElement.style.animation = 'tonone';
                    con.parentElement.style.animationDuration = '0.6s';
                    setTimeout(() => { con.parentElement.style.display = 'none'; }, 500);
                    wrp.style.filter = 'blur(0px)';

                });
            });

        });

    });