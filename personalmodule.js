// *** task2 ***

function welcomeUser(username) {
    let today = new Date();
    let hour = today.getHours();
    let welcome;

    if (hour >= 5 && hour < 11) {
        welcome = 'Good morning';
    } else if (hour >= 11 && hour < 17) {
        welcome = 'Good afternoon';
    } else if (hour >= 17 && hour < 23) {
        welcome = 'Good evening';
    } else if (hour >= 23 || hour < 5) {
        welcome = 'Good night';
    }

    return `${welcome}, ${username}`;
}

module.exports = {
    welcomeUser: welcomeUser
};