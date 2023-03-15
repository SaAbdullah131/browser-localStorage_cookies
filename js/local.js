const hello = localStorage.getItem('hello');
console.log(hello);

const setAge = () => {
    const inputField = document.getElementById("input");
   const inputVal = parseInt(inputField.value);
   console.log(inputVal);
   window.localStorage.setItem("age",inputVal);
}