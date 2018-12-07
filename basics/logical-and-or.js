let temp = 55;

if(temp >= 65 && temp <= 90) {
    console.log('It is pretty nice outside!');
} else if(temp <= 0 || temp >= 120) {
    console.log('Do not go outside!');
} else {
    console.log('What do you want');
}


// Challenge area

let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan  dishes!');
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer some offer vegan  dishes!');
} else {
    console.log('Offer everything from the menu!');
}