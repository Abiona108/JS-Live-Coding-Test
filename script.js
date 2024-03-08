var studentsArray = [] 

if(localStorage.user){
    studentsArray = JSON.parse(localStorage.user)
}

function submit() {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const password =  document.getElementById("password").value

    if (firstName === '' || lastName ===  '' || email === '' || password === '') {
        console.log("you no fit submit anything with an input left empty, alaye");
        emptyField.style.display =  "block"
    } else {
        var confirmation = confirm('Are you sure you want to submit the provided information?')
            if (confirmation) {
                emptyField.style.display = "none"
                let inputObj = {firstName,lastName,email,password}
                studentsArray.push(inputObj)
                let user = localStorage.setItem('user', JSON.stringify(studentsArray))
                console.log(studentsArray);
                console.log(user);
                window.location.href = "./portal.html"
                show.innerHTML = ""
                document.getElementById("firstName").value =''
                document.getElementById("lastName").value =''
                document.getElementById("email").value = ''
                document.getElementById("password").value =''
            }   else {
                alert("Failed to submit, retry again...")
                document.getElementById("firstName").value
                document.getElementById("lastName").value 
                document.getElementById("email").value
                document.getElementById("password").value
            }            
        }
    }
        
