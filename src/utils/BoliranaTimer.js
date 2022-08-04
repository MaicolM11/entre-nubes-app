export const convertTimeToTemp = (initTime, time) => {
    const nowTime = new Date().getTime();
    let boliranaTime = time - (nowTime - initTime);

    if (boliranaTime < 0) {
      return false;
    }

    boliranaTime = boliranaTime / 1000;
    let hours = addZero(Math.floor(boliranaTime / (60 * 60)));
    boliranaTime = boliranaTime % (60 * 60);
    let minutes = addZero(Math.floor(boliranaTime / 60));
    let seconds = addZero(Math.floor(boliranaTime % 60));

    const currentTime = { hours: hours, minutes: minutes, second: seconds };
    return currentTime;
};

export const convertTimeToMs = (hours, minutes) => {
    const convertHoursToSeg = hours * 3600;
    const convertMinutesToSeg = minutes * 60;
    const convertTotalSegToMS = convertHoursToSeg + convertMinutesToSeg;
    return convertTotalSegToMS * 1000;
};

const addZero = (number) => {
  let format = "" + number;
  if(format.length != 2) {
    format = "0" + number;
  }
  return format;
}