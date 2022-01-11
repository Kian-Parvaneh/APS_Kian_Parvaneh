/*https://www.codewars.com/kata/52742f58faf5485cae000b9a
codewars*/

function formatDuration(seconds) {
  let date = {
    year: "",
    day: "",
    houres: "",
    minutes: "",
    time: function () {
      let alltime = "";
      alltime += this.year
        ? this.year > 1
          ? this.year + " years"
          : ", " + this.year + " year"
        : "";
      alltime += this.day
        ? this.day > 1
          ? ", " + this.day + " days"
          : ", " + this.day + " day"
        : "";
      alltime += this.houres
        ? this.houres > 1
          ? ", " + this.houres + " hours"
          : ", " + this.houres + " hour"
        : "";
      alltime += this.minutes
        ? this.minutes > 1
          ? ", " + this.minutes + " minutes"
          : ", " + this.minutes + " minute"
        : "";
      alltime += this.seconds
        ? this.seconds > 1
          ? " and " + this.seconds + " seconds"
          : " and " + this.seconds + " second"
        : "";
      if (alltime.charAt(0) == ",") return alltime.slice(2);
      if (this.seconds == 1 && alltime.length < 15) return seconds + " second";
      if (!alltime) return "now";
      if (alltime.slice(-7) == "minutes" && this.houres)
        return alltime.replace(
          `, ${this.minutes} minutes`,
          ` and ${this.minutes} minutes`
        );
      return alltime;
    },
  };
  date.seconds = seconds;

  if (date.seconds >= 60) {
    date.minutes = Math.floor(date.seconds / 60);
    date.seconds = Math.floor(date.seconds % 60);
  }
  if (date.minutes >= 60) {
    date.houres = Math.floor(date.minutes / 60);
    date.minutes = Math.floor(date.minutes % 60);
  }
  if (date.houres >= 24) {
    date.day = Math.floor(date.houres / 24);
    date.houres = Math.floor(date.houres % 24);
  }
  if (date.day >= 365) {
    date.year = Math.floor(date.day / 365);
    date.day = Math.floor(date.day % 365);
  }
  return date.time();
}
