export function getSports(){
    let sportarray=[];
    const sports = document.querySelectorAll(`.section2 input`);
  
    for (let sport of sports) {
      if(sport.checked === true){
        sportarray.push(sport.name);
      }
    }
    return sportarray;
  }
  
export function getActivity(){
    const activities = document.querySelectorAll(`#label-activity input`);
  
    for(let activity of activities){
      if(activity.checked === true)
        return activity.id;
    }
    return "";
  }
  