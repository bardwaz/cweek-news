const getData = async () => {

    const response = await fetch('data.json');
    const data = await response.json();
    return data;

};

getData()
    .then(data => {

    console.log(data[2]);

    Array.from(data).forEach(hmm => {

        if(hmm.author.indexOf(' ') >= 0){
            hmm.authfirstname=hmm.author.split(' ')[0];
        }
        
    });

    let i = 0;
    let str = ``;
    let viewcords = ["-25 -454 500 500","-23 -439 250 500","-26 -194 250 250","-26 -195 250 250"];

    while (data[i]!=undefined) {
        if(i<4){
            let d = document.querySelector(`#big${i+1}`);
            d.innerHTML = `<div class="proTags" id="proT1">Featured</div>
                            <div class="proTags" id="proT2">${data[i].type}</div>
                            
                            
                            <div class="NewsTitle">${data[i].headline}</div>
                            
                            <div class="auth">${data[i].authfirstname}</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="${viewcords[i]}"
                                    stroke-width="1.5" stroke="white" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg></div>
                            
                            <div class="datepub">${data[i].date}</div>`;
            
            d.style.display = "block";
            d.style.backgroundImage = `url("${data[i].image}")`;
            i++;
        
        }
        else{

        str+=`<a href="">
                <div class="art" id="small1">
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


});