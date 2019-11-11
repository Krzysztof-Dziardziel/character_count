/*
INPUT: string; string; string;

INPUT: abc;def;Aa

OUTPUT: [1, 0, 2] for each %2 == 0 => 'fizz', forEach %5 ==0 => 'buzz' */

function characterCount(string) {
  //Workaround: can't find the lenght of null (when there's 0 of [aA] so I'm adding here 'a' one and substracting after 1 from the length)
  var arr = string.split('; ').map(function (str) {
    if (str.match(/[bB]/g)) { //First I did != null but then I figured out I can take advantage of falsy expressions. Is that fine?
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
  //I had a hard time outputing arr in one line and then res in the next one so I put it into the array. Hope that You don't mind. BTW how do I return it not using an array?
  return [arr, res]
}

/*Why does the program show "ReferenceError: rules is not defined" when I change the order of rules and applyRules? Is it possible to declare
    and define vars in such a way so that the place where I do it isn't important? */

let rules = [
  {
    condition: str => str % 2 == 0,
    result: "Fizz"
  },
  {
    condition: str => str % 5 == 0,
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

console.log(characterCount("abc; def; AaB; aaaAA"));
