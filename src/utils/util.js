export const getDemisions = () => {
  const { innerWidth: width } = window;
  return width;
};
export const splitString = (string, length) => {
  const arr = string.split(' ');
  if (arr.length <= length) return arr.join(' ');
  else {
    let newArr = '';
    for (let i = 0; i <= length; i++) {
      if (!arr[i]) {
        newArr += '';
        break;
      } else newArr += ` ${arr[i]}`;
    }
    return `${newArr}...`;
  }
};
export const formatString = (string) => {
  let arr = string.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
};
export const shortString = (string, length) => {
  if (string.length < length) return string;
  else {
    let newString = string.substring(0, length);
    return `${newString}...`;
  }
};
export const formatTime = (time) => {
  let h = Math.floor(time / 60);
  h = h < 10 ? `0${h}` : h;
  let m = Math.floor(time % 60);
  m = m < 10 ? `0${m}` : m;
  return `${h}h : ${m}m`;
};
