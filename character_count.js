/*
INPUT: string; string; string;

INPUT: abc;def;Aa

OUTPUT: [1, 0, 2] for each %2 == 0 => 'fizz', forEach %5 ==0 => 'buzz' */

function characterCount(string) {
  //Workaround: can't find the lenght of null (when there's 0 of [aA] so I'm adding here 'a' one and substracting after 1 from the length)
  var arr = string.split('; ').map(str => str + 'b').map(function (str) {
    if (str.match(/[bB]/g).length == 2) {
      return str + '?';
    } else {
      return str;
    }
  })
                        .map(str => str + "a")
                        .map(function(str){
                          if (str.match(/\?/g)){
                            return str.match(/[aA]/g).length - 1 + "?";
                          } else {
                            return str.match(/[aA]/g).length - 1;
                          }
                        });

  var res = arr.map(str => applyRules(str));
  var resq = []
  for (i = 0; i < res.length; i++){
    if (arr[i].toString().match(/\?/g)){
      resq.push(res[i] + '?');
    } else {
      resq.push(res[i]);
    }
  }
  //I had a hard time outputing arr in one line and then res in the next one so I put it into the array. Hope that You don't mind. BTW how do I return it not using an array? For example return arr and resq in two separate lines?
  return [arr, resq]
}

/*Why does the program show "ReferenceError: rules is not defined" when I change the order of rules and applyRules? Is it possible to declare
    and define vars in such a way so that the place where I do it isn't important? */

let rules = [
  {
    condition: str => parseInt(str) % 2 == 0,
    result: "Fizz"
  },
  {
    condition: str => parseInt(str) % 5 == 0,
    result: "Buzz"
  },
  {
    condition: str => true,
    result: ""
  }
];

function applyRules(str) {
  return rules
    .filter(rule => rule.condition(str))
    .map(rule => rule.result)
    .reduce((acc, cur) => acc + cur);
}

module.exports = characterCount;

console.log(characterCount("abc; aAde; AaB; aaaAA"));
