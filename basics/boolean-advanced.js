let isAccountLocked = false;
let userRole = 'admin';



if(isAccountLocked){
    console.log('Is account locked');
} else if(userRole === 'admin') {
    console.log('Welcome admin!');
} else {
    console.log('Welcome!')
}

// Challenge

let temp = 0;

if(temp <= 0) {
    console.log('It is freezing outside! \n');
} else if(temp >= 28) {
    console.log('It is way too hot outside!');
} else {
    console.log('Go for it. It is pretty nice outside!');
}