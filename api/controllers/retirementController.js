import Rule from '../models/retirementModel';
import moment from 'moment';

export const allRules = (req, res) => {
    Rule.find().exec((err, rules) => res.json(rules));
};

export const getRetirementDate = (req, res) => {
    let dob = req.body.dob ? moment(req.body.dob) : null,
        gender = req.body.gender,
        date;

    if(!req.body.gender || !req.body.dob) return res.status(500).send({statusCode: 500, message: 'Please provide both date of birth and gender.'});
    if(!dob.isValid()) return res.status(500).send({statusCode: 500, message: 'Please provide a valid date of birth.'});
    if(dob < moment('1899-12-31')) return res.status(500).send({statusCode: 500, message: 'There is no data available for dates before 31 December 1899.'});


    Rule.find().exec((err, rules) => {
        return res.json({date: calcDate({rules, dob, gender})});
    });

};

export const calcDate = ({rules, dob, gender}) => {
    let result = rules.find(rule => {
        let from = moment(rule.from),
            to = rule.to ? moment(rule.to) : null;

        if((to && (from <= dob && dob <= to) && (rule.gender === 'U' || rule.gender === gender)) || (!to && from < dob)) {
            return true;
        }
    });


    let {spa, spa_years, spa_months} = result,
        rDate;

    if(spa) rDate = moment(spa);
    if(spa_years) {
        rDate = dob;
        rDate.add(spa_years, 'year');
        if(spa_months) {
            rDate.add(spa_months, 'month');
        }
    }

    return rDate.format('YYYY-MM-DD');
};