document.getElementById('homens').classList.remove('desativar');

    function showManTeam(id){
        let obj = document.getElementById(id);
        let all = document.querySelectorAll('div[name="altera"]'); //pega todos os divs

        for(let i = 0; i < all.length; i++){
            all[i].classList.add('desativar');
        };

        obj.classList.remove('desativar');
    }