// Lexical scope (Static scope)
// Global scope - defined outside of all code blocks
// LOgical Scope - Defined inside code block

// In a scope you can access variables defined in that scope, or any parent/ancester scope

// Global Scope (vaeOne)
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varThree)

let varOne = 'varOne';

if(true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);

    if(true) {
        let varFour = 'varFour';
    }
}

if(true) {
    let varThree = 'varThree';
}

console.log(varTwo);