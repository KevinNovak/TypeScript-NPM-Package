import { expect } from 'chai';
import { MyClass } from '../src/my-class';

describe('add unit tests', (): void => {
    it('adding two positive numbers', (): void => {
        let myClass = new MyClass();
        let actual = myClass.add(1, 2);
        expect(actual).is.equal(3);
    });
    it('adding two negative numbers', (): void => {
        let myClass = new MyClass();
        let actual = myClass.add(-5, -2);
        expect(actual).is.equal(-7);
    });
    it('adding one positive and one negative number', (): void => {
        let myClass = new MyClass();
        let actual = myClass.add(7, -2);
        expect(actual).is.equal(5);
    });
});
