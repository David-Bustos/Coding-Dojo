$(document).ready(function(){
//Style PKMs & Type
    function pkm_style() {
        $('img').css('background-color', 'darkgray')
        $('img').addClass('m-2')
    }
    function type_style(x, id) {
        const type_color = {
            grass: 'forestgreen',
            fire:'orangered',
            water: 'royalblue',
            bug: 'yellowgreen',
            normal: 'olive',
            poison: 'rebeccapurple',
            flying: 'mediumpurple',
            ground: 'saddlebrown',
            fairy: 'palevioletred',
            fighting: 'firebrick',
            psychic: 'violet',
            electric: 'orange',
            rock: 'gray',
            ghost: 'darkslateblue',
            dragon: 'slateblue',
            ice: 'skyblue',
            steel: 'silver'
        }
        $('#'+id).css('display', 'inline-block')
        $('#'+id).css('background-color', type_color[x])
        $('#'+id).css('border-radius', '10%')
        $('#'+id).css('min-width', '80px')
        $('#'+id).addClass('mx-1 px-2')
    }
// Display 151 PKMs
    for (let i = 1; i <= 151; i++) {
        
        $('.pokemons').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" id="${i}">`);
        pkm_style();
    }
// Front & Back PKMs
    $('img').hover(
        function(){
            let pkm_id= $(this).attr('id');
            $(this).attr('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pkm_id}.png`)
        }, 
        function(){
            let pkm_id= $(this).attr('id');
            $(this).attr('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkm_id}.png`)
        }
    );
// Pokedex Info
    $('img').on('click', function(){
        
        let pkm_id= $(this).attr('id');

        $.get(`https://pokeapi.co/api/v2/pokemon/${pkm_id}/`, function(res) {
            console.log(`https://pokeapi.co/api/v2/pokemon/${pkm_id}/`);

            $('#name').html(`<h3 style="text-transform: capitalize">${res.name}</h3>`);
            $('#gif').html(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pkm_id}.gif">`);
            
            $('#type').empty();
            for(let i=0; i < res.types.length; i++){
                $('#type').append(`<p id="type${i}" style="text-transform: capitalize">${res.types[i].type.name} </p>`);
                type_style(res.types[i].type.name, 'type'+i);
            }
            
            $('#bstat').html('<h6>BStat</h6>')
            $('#bstat').append(res.stats[0].base_stat + ' pts');
            $('#height').html('<h6>Height</h6>')
            $('#height').append(res.height*10 + ' cm');
            $('#weight').html('<h6>Weight</h6>')
            $('#weight').append(res.weight/10 +' kg');

        }, "json");

    });

});