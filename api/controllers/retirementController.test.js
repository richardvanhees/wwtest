import {calcDate} from './retirementController';
import {rules} from '../data';
import moment from 'moment';

describe('Getting the dates...', () => {
    it('1989-03-08 should return 2057-03-08', () => {
        return expect(calcDate({rules: rules.rules, dob: moment('1989-03-08'), gender: 'M'})).toBe("2057-03-08");
    });
    it('1957-12-20 should return 2023-12-20', () => {
        return expect(calcDate({rules: rules.rules, dob: moment('1957-12-20'), gender: 'M'})).toBe("2023-12-20");
    });
    it('1972-06-18 should return 2039-06-18', () => {
        return expect(calcDate({rules: rules.rules, dob: moment('1972-06-18'), gender: 'M'})).toBe("2039-06-18");
    });
});


