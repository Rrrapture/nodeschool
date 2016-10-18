'use strict';
// exercise 10 tagged template strings, aka tagged template literals

//fn`Hello ${you}! You're looking ${adverb} rested today!`

// special type of function call
// desugars to:
//fn( ["Hello ", "! You're looking ", " rested today!"], you, adverb );

// always one more entry in the string array than there are substitutions (n + 1)
// equates to automatic escaping of interpolated variables. i.e.,
//html`<p title="${title}">Hello ${you}!</p>`
//html( ['<p title="', '">Hello ', '!</p>'], title, you ); 

// Challenge
// log a safely-escaped HTML rendering of a comment. args username, comment. Should look like:
//<b>domenic says</b>: "&lt;dl&gt; is a fun tag"

// http://www.datchley.name/working-with-collections/
// http://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings

// html`...` is actually a special function call
// my original solution. good, but return statement hard to read
/*
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(strings, ...args) {
    const replacements = {
        '<': '&lt;',
        '>': '&gt;',
        '\'': '&apos;',
        '\"': '&quot;',
        '&': '&amp;'
    };
    let cleanedArgs = args.map( (unclean ) => unclean.replace(/<|>|\'|\"|&/g, matched => replacements[matched]) );
    return `${strings[0]}${cleanedArgs[0]}${strings[1]}${cleanedArgs[1]}${strings[2]}`;
}
*/

// the official solution:
/*
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
    var result = pieces[0];
    console.log(result);
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}
*/

// my revised solution. longer. separate functionality. suspect something else could be used instead of for loop
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(strings, ...args) {
    let cleanedArgs = args.map( (unclean ) => cleanUp(unclean) );
    let result = strings[0];
    for (let i = 0; i < cleanedArgs.length; ++i) {
        result += cleanedArgs[i] + strings[i+1];
    }
    return result;
}

function cleanUp(messyString) {
    const replacements = {
        '<': '&lt;',
        '>': '&gt;',
        '\'': '&apos;',
        '\"': '&quot;',
        '&': '&amp;'
    };
    return messyString.replace(/<|>|\'|\"|&/g, matched => replacements[matched]);
}
