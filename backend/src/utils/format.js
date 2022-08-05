export const getDateWithFormat = (date) => {

    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let hours = ("0" + date.getHours()).slice(-2);
    let minutes = ("0" + date.getMinutes()).slice(-2);

    let date_yyyy_mm_dd = day + "/" + month + "/" + year ;
    let time_hh_mm_ss = hours + ":" + minutes;

    return { date: date_yyyy_mm_dd, time: time_hh_mm_ss };
}