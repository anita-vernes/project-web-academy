export const getSports = () => {
  let sportArray = [];
  const sports = document.querySelectorAll(`.section2 input`);
  for (let sport of sports) {
    if (sport.checked === true) {
      sportArray.push(sport.name);
    }
  }
  return sportArray;
};

export const getActivity = () => {
  const activities = document.querySelectorAll(`#labelActivity input`);
  for (let activity of activities) {
    if (activity.checked === true) return activity.id;
  }
  return "";
};

export const getSportsEdit = () => {
  let sportArray = [];
  const sports = document.querySelectorAll(`#formUpdate .section2 input`);
  for (let sport of sports) {
    if (sport.checked === true) {
      sportArray.push(sport.name);
    }
  }
  return sportArray;
};

export const getActivityEdit = () => {
  const activities = document.querySelectorAll(
    `#formUpdate #labelActivity input`
  );
  for (let activity of activities) {
    if (activity.checked === true) return activity.id;
  }
  return "";
};
