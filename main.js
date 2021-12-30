/*
30 Dec 2021

Total time: 3hours 40 minintues. 

To improve readability, I used expressive variable names,
ternary conditionals when possible, succinct notation, and tried to avoid repetition.

“Any fool can write code that a computer can understand. 
Good programmers write code that humans can understand.” 
--Martin Fowler, 2008.

Thank you!

Jamie O'Beirne
jamieobeirne123@gmail.com
(34)667.23.90.63
*/


const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];


// Receive string of dates one after each other
function outputDate(dates) {

    let final = "";//declare & intialize variable to be returned

    //first date = smaller number
    let splitFirstDate = dates[0].split(".");
    let reorderFirstDate = splitFirstDate[1]+ " " + splitFirstDate[0] + 
        " " + splitFirstDate[2];
    let millisecondsFirstDate = Date.parse(reorderFirstDate);
    //parses a string and returns total milliseconds since 1970

    //second date = larger number
    let splitSecondDate = dates[1].split(".");
    let reorderSecondDate = splitSecondDate[1]+ " " + splitSecondDate[0] + 
        " " + splitSecondDate[2];
    let millisecondsSecondDate = Date.parse(reorderSecondDate);

    //differnce in milliseconds between the 2 dates
    let difference = (millisecondsSecondDate - millisecondsFirstDate);

    let totalDays = Math.round((( difference / 60000)/60)/24) ;
    let years = Math.floor(totalDays / 365); 
    let months = Math.round(difference / 2678400000 ) - (years*12); 
        //milliseconds for 31 days
    if (totalDays < 31){ //30 days is not a month in answers
        months = 0;
    }

    let yearsInterpolation = `${years} year`; /*literal template 
            allows variables in strings*/
    let monthsInterpolation =  `${months} month`; 
    let daysInterpolation =  `total ${totalDays} days`;

   
    if (years < 1 && months < 1) {
        return final = daysInterpolation;
        /*'total 30 days' 'total 0 days',*/
    }

    //spacing, plurals, commas are critica
    if (years < 1 && months >= 1) {
        final = (months == 1)? //ternary condiational
        monthsInterpolation + ", " + daysInterpolation:
        monthsInterpolation + "s, " + daysInterpolation;
            /*'1 month, total 31 days'  '7 months, total 213 days',*/
    }

    
    if (years >= 1 && months < 1) {
        final = (years == 1) ?//ternary condiational
        yearsInterpolation + ", " + daysInterpolation:
        yearsInterpolation + "s, " + daysInterpolation;
            /*'16 years, total 5844 days'   '1 year, total 365 days',*/
    } 
    
    else {
        if (years ==1 && months > 1) { 
            final = yearsInterpolation + ", " +  monthsInterpolation + 
                "s, " + daysInterpolation;
            /*'1 year, 3 months, total 458 days'   '3 years, 1 month, total 1140 days',*/
        }

        if (years > 1 && months == 1) { 
            final = yearsInterpolation + "s, " +  monthsInterpolation + 
                ", " + daysInterpolation;
            /*'3 years, 1 month, total 1140 days',*/
        }

        if (years >1 && months > 1) { 
            final = yearsInterpolation + "2, " +  monthsInterpolation + 
                "s, " + daysInterpolation;
            /*'1 year, 3 months, total 458 days'   '3 years, 1 month, total 1140 days',*/
        }

        if (years == 1 && months == 1) { 
            final = yearsInterpolation + " " +  monthsInterpolation + 
                " " + daysInterpolation;
            /*'3 years, 1 month, total 1140 days',*/
        }

    }
           
    return final;
}




/*
Working Notes:

3pm
The first thing I did was spend about 30 minutes reading through the task. 
Aspects I understood:
	
	main.js:
	1 The use of “const” for unchanging/ non-mutating information and “let”, 
    which has a limited scope to maintain itself inside it’s home function. “Var” 
    is discouraged these days because of its broad scope. 
	2 For const dates, the use of an array or array, which itself contains two 
    strings (the dates)
	3 The function outputDate() is where we should write our code. I don’t 
    understand how it exports/imports to output.js. 

	output.js
	This part validates that my answers are correct and alters the DOM 
    with a query selector. Although I don’t alter it, here are some aspects 
    that I noticed:
	1 the constant “correctAnswewrs” (using camel case) which is an array of strings
	2 let “result” declares an empty variable (type of string)
	3 the use of a for loop, for (individual item of group)
	5 I looked up the parseInt() method (using We3Schools) and realized that it 
    reads a string and returns the first integer. 
	6 the use of tripe equal signs ( “ ===” ) to look for strict equality (value and type)
	7 in the constant “answer”, the use of a ternary conditional, which is a type of 	
    if conditional.  condition ? first-action : second-action;
	8 the use of the JS addition operature,  +=, to concatenate “result”
	9 the use of interpolation ${} to assign the value of a variable  
	10 the use of querySelector which grabs a class and uses innerHtml to set 
    the value of results in the DOM.
	

3:30
I think the basic idea is to convert each date into millaseconds 
(since 1970)a using getTime(), subtract the older / smller date 
from the more recent / larger date, and then reconstruct the days, months and years.
 
I realized the date needs to be altered from dd.mm.yyyy to mm.dd.yyyy


4:15	
I had the basic calculations working. I adjusted using Math.round 
vs Math.floor and altered the various conditionals and believe 
I am getting the correct output, checking using console log.


6:40
I adjusted my function and the conditional statements to allow 
for spacing. This is a sort of puzzle to get all of this working. 
It seems to be working.


Jamie O'Beirne
jamieobeirne123@gmail.com
(34)667.23.90.63
*/

















