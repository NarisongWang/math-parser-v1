const nearley = require("nearley");
const grammar = require("./math.js");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

try {
    //parser.feed("1-2/3-2");
    parser.feed("12+3!=4/2+5");
    console.log("Success!", parser.results[0]);
} catch (e) {
    console.log("Failed!", e.message);
}
