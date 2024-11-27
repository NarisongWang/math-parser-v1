// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "input", "symbols": ["compare"], "postprocess": id},
    {"name": "compare", "symbols": ["additive", /[<>=]/, "additive"], "postprocess": 
        (data)=>{
            switch (data[1]){
                case ">":
                    return data[0] > data[2];
                case "<":
                    return data[0] < data[2];
                case "=":
                    return data[0] === data[2];
            }
        }
                    },
    {"name": "compare$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compare", "symbols": ["additive", "compare$string$1", "additive"], "postprocess": 
        (data) => data[0] !== data[2]
                    },
    {"name": "compare$string$2", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compare", "symbols": ["additive", "compare$string$2", "additive"], "postprocess": 
        (data) => data[0] >= data[2]
                    },
    {"name": "compare$string$3", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "compare", "symbols": ["additive", "compare$string$3", "additive"], "postprocess": 
        (data) => data[0] <= data[2]
                    },
    {"name": "additive", "symbols": ["multiplicative", /[+-]/, "additive"], "postprocess": 
        (data)=>{
            switch (data[1]){
                case "+":
                    return data[0] + data[2];
                case "-":
                    return data[0] - data[2];
            }
        }
                    },
    {"name": "additive", "symbols": ["multiplicative"], "postprocess": id},
    {"name": "multiplicative", "symbols": ["unary_expression", /[*/]/, "multiplicative"], "postprocess": 
        (data)=>{
            switch (data[1]){
                case "*":
                    return data[0] * data[2];
                case "/":
                    return data[0] / data[2];
            }
        }
                    },
    {"name": "multiplicative", "symbols": ["unary_expression"], "postprocess": id},
    {"name": "unary_expression", "symbols": ["number"], "postprocess": id},
    {"name": "unary_expression", "symbols": [{"literal":"("}, "additive", {"literal":")"}], "postprocess": 
        (data) =>{
            return data[1];
        }
                },
    {"name": "number", "symbols": ["digits", {"literal":"."}, "digits"], "postprocess":  
        (data) => Number(data[0] + "." + data[2])
                    },
    {"name": "number", "symbols": ["digits"], "postprocess":  
        (data) => Number(data[0])
                    },
    {"name": "digits", "symbols": ["digit", "digits"], "postprocess": (data) => data.join("")},
    {"name": "digits", "symbols": ["digit"], "postprocess": id},
    {"name": "digit", "symbols": [/[0-9]/], "postprocess": id}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
