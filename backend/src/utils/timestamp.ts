const timeStamp = new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
  hour12: true,
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});

export default timeStamp;
