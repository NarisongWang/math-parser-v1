input 
    ->  compare {% id %}

compare
    ->  additive [<>=] additive
            {%
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
            %}
    |   additive "!=" additive
            {%
                (data) => data[0] !== data[2]
            %}
    |   additive ">=" additive
            {%
                (data) => data[0] >= data[2]
            %}
    |   additive "<=" additive
            {%
                (data) => data[0] <= data[2]
            %}

additive
    ->  multiplicative [+-] additive
            {%
                (data)=>{
                    switch (data[1]){
                        case "+":
                            return data[0] + data[2];
                        case "-":
                            return data[0] - data[2];
                    }
                }
            %}
    |   multiplicative {% id %}

multiplicative 
    ->  unary_expression [*/] multiplicative
            {%
                (data)=>{
                    switch (data[1]){
                        case "*":
                            return data[0] * data[2];
                        case "/":
                            return data[0] / data[2];
                    }
                }
            %}
    |   unary_expression {% id %}

unary_expression
    ->  "(" additive ")"
            {%
                (data) =>{
                    return data[1];
                }
            %}
    |   number {% id %}

number 
    ->  digits "." digits
            {% 
                (data) => Number(data[0] + "." + data[2])
            %}
    |   digits
            {% 
                (data) => Number(data[0])
            %}

digits
    ->  digit digits
            {% (data) => data.join("") %}
    |   digit {% id %}

digit 
    ->  [0-9] {% id %}