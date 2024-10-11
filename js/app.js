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
    console.log(friends)
    
    
}

function shuffle(friends) {

    for (let indice = friends.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [friends[indice - 1], friends[indiceAleatorio]] = 
            [friends[indiceAleatorio], friends[indice - 1]];
    }
}