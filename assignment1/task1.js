const rever = (str) => {
    //split the string then reverse  is used to reverse the string and then joined together
    const strRev= str.split("").reverse().join("");
    console.log(strRev);
}
rever("hello everyone");