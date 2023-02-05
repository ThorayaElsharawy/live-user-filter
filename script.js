const userList = document.getElementById('userList');
const filter = document.getElementById('filter');
let listItems = [];

setTimeout( getData, 100);

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
  
    const respone = await fetch('https://randomuser.me/api/?results=20');
    const { results: users } = await respone.json();

    userList.innerHTML = ''

    users.forEach(user => {
        const li = document.createElement('li');
        listItems.push(li);
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.firsr}" />
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city} ${user.location.country}</p>
            </div>
        `
        userList.appendChild(li)
    });
}


function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}