const formatTime = (dateString) => {
  const date = new Date(dateString);
  const timeString = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
  return timeString;
};

export default {
  formatTime,
};