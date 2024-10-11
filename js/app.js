let friends = [];

function add() {
    let friend = document.getElementById('friend-name');
    let friendsList = document.getElementById('friends_list');

    friends.push(friend.value);

    if (friendsList.textContent == ''){
        friendsList.textContent = friend.value;        

    } else {
        friendsList.textContent = friendsList.textContent + ','  + friend.value;
    }

    friend.value = '';
    
}

function draw() {

    shuffle(friends);
    let draw = document.getElementById('draw-list');

    for (let index = 0; index < friends.length; index++) {
        
        if (index == friends.length  - 1)
        {
            draw.innerHTML = draw.innerHTML + friends[index] + '=>' + friends[0] + '<br>';

        } else {
            draw.innerHTML = draw.innerHTML + friends[index] + '=>' + friends[index + 1] + '<br>';
        }
        
    }
    
    
}

function shuffle(friends) {

    for (let indice = friends.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [friends[indice - 1], friends[indiceAleatorio]] = 
            [friends[indiceAleatorio], friends[indice - 1]];
    }
}