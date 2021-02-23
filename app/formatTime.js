// export function formatTime(time){
//   if(time && !isNaN(time) && time >= 0){
//     const date = new Date(0);
//     date.setSeconds(time);
//     return date.toISOString().substr(14, 5);
//   }
//   else return null;
// }


exports.formatTime = function(time){
  if(time && !isNaN(time) && time >= 0){
    const date = new Date(0);
    date.setSeconds(time);
    return date.toISOString().substr(14, 5);
  }
  else return null;
};