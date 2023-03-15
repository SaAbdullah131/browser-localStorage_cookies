// alert("How are you?")

const showAlert =() => {
    alert('Dosto,take ase dhar dite parbi , just 500taka');
}


// confirm
const lendMoney = ()=> {
  const result =   confirm('Will you lend me 5000 taka');
  console.log(result);
  if(result) {
    alert('Tui Amar Janer dosto');
}else {
    console.log('DGM...... toke ajke e block marira dimu');
}

}

const getInfo =() => {
    // alert
    //confirm (true,false)
    const name = prompt('Tell me Your Name');
    console.log(name);
    if(name === null) {
        alert("Name na dile kam nai!! Ja Fooot");
    }else {
        console.log(name, "Welcome to this world");
    }
    
}
