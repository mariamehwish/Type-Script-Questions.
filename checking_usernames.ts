let current_users :string [] = ['Hareem', 'Shaheena', 'Maya', 'Siaf', 'Arsal']

let newUsernames :string [] = ['Bilo', 'Marish', 'Maya', 'Azfar', 'Arsal']

let current_users_lower :string [] = current_users.map(user => user.toLowerCase())

for (let user of newUsernames) {
    if (current_users_lower.includes(user.toLowerCase())) {
        console.log(`Sorry ${user} that name is taken.`);
        
    } else {
        console.log(`Yes ${user}, this username is available.`);
        
    }
}