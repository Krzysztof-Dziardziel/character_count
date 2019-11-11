
  describe("characterCount", function() {
    var characterCount = require('../character_count.js');
  
    it("empty string", function(){
      expect(characterCount('')).toEqual([[0], ['FizzBuzz']])
    });

    it("no A, no B", function() {
      expect(characterCount('cde')).toEqual([[0], ['FizzBuzz']]);
    });

    it("A, no B", function() {
      expect(characterCount('ade')).toEqual([[1], ['']]);
    });

    it("2x A, no B", function(){
      expect(characterCount('aAde')).toEqual([[2], ['Fizz']])
    });

    it("1x A, 1x B", function(){
      expect(characterCount('ABed')).toEqual([['1?'], ['?']])
    });

    it("2x A, 1x B", function(){
      expect(characterCount('aAbe')).toEqual([['2?'], ['Fizz?']])
    });

    it("2x A, 2x B", function(){
      expect(characterCount('aAbBe')).toEqual([[2], ['Fizz']])
    });

    it("2x A, 3x B", function(){
      expect(characterCount('aAbBeb')).toEqual([[2], ['Fizz']])
    });
});
