const guess_number = require('../main/main');
let system = '1234'
describe('guess_number', () => {
    it('all correct',function(){
        let user = '1234'
        let result = guess_number(system,user)
        expect(result).toEqual('4A0B')
    });
    it('numer correst but location wrong',function(){
        let user = '4321'
        let result = guess_number(system,user)
        expect(result).toEqual('0A4B')
    });
    it('some correct but other wrong',function(){
        let user = '1526'
        let result = guess_number(system,user)
        expect(result).toEqual('1A1B')
    });
    it('all wrong',function(){
        let user = '0000'
        let result = guess_number(system,user)
        expect(result).toEqual('0A0B')
    });


});