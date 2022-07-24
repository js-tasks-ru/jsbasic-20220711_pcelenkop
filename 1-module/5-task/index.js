function truncate(str, maxlength) {
  const newStr = str.slice(0, maxlength).slice(0, -1) +`…`; 
  return (str.length > maxlength) ? newStr : str;  
}   
