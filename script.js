var studentsArray = [] 

if(localStorage.user){
    studentsArray = JSON.parse(localStorage.user)
}

function submit() {
    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    var emailPhone = document.getElementById("email").value
    var password =  document.getElementById("password").value

    if (firstName === '' || lastName ===  '' || email === '' || password === '') {
        emptyField.style.display =  "block"
        // alert("Input fields mustn't be left empty")
    } else {
        var confirmation = confirm('Are you sure you want to submit the provided information?')
            if (confirmation) {
                emptyField.style.display = "none"
                var inputObj = {firstName,lastName,email,password}
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
        
