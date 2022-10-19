
/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.*/


const arr = [75 , 99, 120, 33, 56, 56, 20, 32];
const roundedMean = (arr = []) => {
   const { sum, count } = arr.reduce((acc, val) => {
      let { sum, count } = acc;
      count++;
      sum += val;
      return { sum, count };
   }, {
      sum: 0, count: 0
   });
   const mean = sum / (count || 1);
   return Math.round(mean);
};
console.log(roundedMean(arr));