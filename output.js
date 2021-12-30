const correctAnswers = [
    /*0*/'16 years, total 5844 days', 
    /*1*/'7 months, total 213 days',
    /*2*/'1 year, 3 months, total 458 days',
    /*3*/'total 30 days',
    /*4*/'total 0 days',
    /*5*/'3 years, 1 month, total 1140 days',
    /*6*/'1 month, total 31 days',
    /*7*/'1 year, total 365 days',
    /*8*/'1 year, total 366 days'
];
let results = '';

for (let oneDate in dates) {
    const value = outputDate(dates[oneDate]);
    const num = parseInt(oneDate) + 1;

    const answer = (value === correctAnswers[oneDate] ? 
        '<span style="color: #090">Correct</span>' : 
        `<span style="color: #900">Incorrect</span>, 
        correct is "${correctAnswers[oneDate]}"`);

    results += `${num} value: ${value} is ${answer}<br>`;
     
}
document.querySelector('.results').innerHTML = results;