function checkSpam(str) {
  const newStr = str.toLowerCase();
    const spam = "1xbet";
    const spam1 = "xxx";
    if (newStr.includes(spam) || (newStr.includes(spam1))) { 
      return true;
  }   
  else {
      return false;
  }
}
