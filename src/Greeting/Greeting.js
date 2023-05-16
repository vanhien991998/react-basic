
const user = {
    firstName: 'Hien',
    lastName: 'Nguyen Van'
}

function formatName(user) {
    return user.lastName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

export default getGreeting;