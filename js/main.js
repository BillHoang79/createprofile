// get users data
function getUserData() {
		// create var to display results 
		var userPhone = document.getElementById('results')

		 //stores user input into these variables
		 var userFirst = document.getElementById('userfname').value
		 var userLast  = document.getElementById('userlname').value
		 var userEmail = document.getElementById('userEmail').value
		 var userPhone = document.getElementById('userPhone').value

		 //stores elements by class for radios and select
		 var storeGender = document.getElementsByClassName('userGender')
		 var storeColor  = document.getElementsByClassName('userColor')
		 var storeBirth  = document.getElementsByClassName('userBirth')

		 //creates var to store gender, color, and birth
		 var userGender, userColor, userBirth

		 /*
		 First Name
		 */
		 if(userFirst == "") {
		 		//add a class of failure to results if no user first name value
		 		results.className = "failure"
		 		//update the text content of results
		 		results.textContent = "you forgot to add your first name"
		 		//stops the funciton of no answer
		 		return
		 }

		 /*
		 Last Name
		 */
		 if(userLast == "") {
		 		//add class of failure to results if no user last name value
		 		results.className = "failure"
		 		//updates the text content of results
		 		results.textContent = "you forgot to add your last name"
		 		//stops the function of no answer
		 		return
		 }

		 /*
		 Gender
		 */
		 // loop through all elements with class="userGender"
		 for(var i = 0; i < storeGender.length; i++) {
		 		// if the radio was selected by the user, do this
		 		if(storeGender[i].checked) {
		 				//set value pf answer 3 to the value in the radio item
		 				userGender = storeGender[i].value
		 				console.log(userGender)
		 		}
		 }
		 //stop function of no data is there for gender
		 if(userGender == undefined) {
		 		//add a class of failure to results if no user gender value
		 		results.className = "failure"
		 		// updates the text content of results
		 		results.textContent = "you forgot to select a gender"
		 		// stops the function if no value
		 		return
		 }

		 /*
		 Email
		 */
		 if (userEmail == "") {
			 	//add a class of failure if no email value
			 	results.className = "failure"
			 	// updates the text content of results
			 	results.textContent = "you forgot to add your email"
			 	//stop function if no answer
			 	return
		 }

		 /*
		 Phone Number
		 */
		 if (userPhone == "") {
		 		//add a class of failure to results if no user phone value
		 		results.className = "failure"
		 		// updates the text content of results
		 		results.textContent = "you forgot to add your phone number"
		 		//stops function if no answer
		 		return
		 }

		 /*
		 Favorite Color
		 */
		 //loops through all elements with a class="userColor"
		 for(var i = 0; i < storeColor.length; i++) {

		 		// checks which color was selected
		 		if(storeColor[i].selected) {
		 				// set value of answer 2 to the vaule in the selected item
		 				userColor = storeColor[i].value
		 		}
		 }
		 // stops funciton if no data for question 2
		 if(userColor == "") {
		 		// add a class of failure to results if no user info
		 		results.className = "failure"
		 		// update the text content of results
		 		results.textContent = "you forgot to select your favorite color"
		 		// stops the function if no answer
		 		return
		 }
		 
		 /*
		 Birth Place
		 */
		 // loop through all elements with a class of "userBirth"
		 for(var i = 0; i < storeBirth.length; i++) {
		 		//if radio is checked by user do this
		 		if(storeBirth[i].checked) {
		 			// sets value of answer 3 to the value in the radio item
		 			userBirth = storeBirth[i].value
		 			console.log(userBirth)
		 		}
		 }
		 //stops the function if no data is there for birth
		 if(userBirth == undefined) {
			 	//adds a class of failure to results if no value
			 	results.className="failure"
			 	//updates the text content of results
			 	results.textContent = "you forgot to select a place of birth"
			 	//stops the function if no value
			 	return
		 }

		 /*
		 On Success
		 */
		 // if everything passes add a class of success to results
		 results.className = "success"
		 // updates the next content of results
		 results.textContent = "thanks! updating now"

		 // create object for user profile data
		 var userProfile = {
		 		name   : userFirst + " " + userLast,
		 		gender : userGender,
		 		email  : userEmail,
		 		phone  : userPhone,
		 		color  : userColor,
		 		birth  : userBirth
		 }

		 // confirm existance of al user profile data
		 console.log(userProfile)

		 // run displayProfile after 1 second passing in new profile data to be displayed 
		 setTimeout(function() {displayProfile(userProfile) }, 1000)
}

// display profile information 
function displayProfile(userProfile) {
		// make sure the user data is being passed through
		console.log(userProfile)

		//select some HTML elements by Id
		var userName   = document.getElementById('newUserName')
		var userGender = document.getElementById('newUserGender')
		var userEmail  = document.getElementById('newUserEmail')
		var userPhone  = document.getElementById('newUserPhone')
		var userColor  = document.getElementById('newUserColor')
		var userBirth  = document.getElementById('newUserBirth')

		// change the text of these variables using the userProfile object
		userName.innerText   = "Welcome "   + userProfile.name
		userGender.innerText = "Gender: "   + userProfile.gender
		userEmail.innerText  = "Email: "    + userProfile.email
		userPhone.innerText  = "Phone: "    + userProfile.phone
		userColor.innerText  = "Color:"     + userProfile.color
		userBirth.innerText  = "Continent:" + userProfile.birth

		// hide new profile form
		document.getElementById('newProfile').style.display = "none"
		// display update profile data
		document.getElementById('updatedProfile').style.display = "block"
}

// add click function to button
document.getElementById('sendDataButton').addEventListener('click', getUserData, false)