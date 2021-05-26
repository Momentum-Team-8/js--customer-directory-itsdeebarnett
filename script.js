
const customer = customers[0]

//make sure to match with class to return first element
insertionRoot = document.querySelector("#output")

// const customerprofile = document.createElement("div")
// customerprofile.classList.add("customer-profile")
// insertionRoot.appendChild(customerprofile)


// const customerName = customer.name.first + " " + customer.name.last

// //use template string and make it dynamic use `${}` inside h2
// customerprofile.innerHTML = `<h3>${customerName}</h3>`

// const customerImg = document.createElement("img")
// customerImg.src = customer.picture.large
// customerprofile.appendChild(customerImg)

// const email = document.createElement("p")
// customerprofile.appendChild(email)

// const address = document.createElement("h5")
// customerprofile.appendChild(address)

// const DOB = document.createElement("h5")
// customerprofile.appendChild(DOB)



for (let customer of customers) {
    const customerProfile = document.createElement('div')
    customerProfile.classList.add('customer-profile')
    insertionRoot.appendChild(customerProfile)
    
    const customerName = customer.name.first + " " + customer.name.last
    customerProfile.innerHTML = `<h3>${customerName}</h3>`
    const customerImg = document.createElement('img')
    customerImg.src = customer.picture.large
    customerProfile.appendChild(customerImg)
    
    const customerEmail = document.createElement('p')
    customerEmail.innerText = customer.email
    customerProfile.appendChild(customerEmail)
    
    const customerAddress = customer.location.street + " " + customer.location.city + " " + customer.location.state + " " + customer.location.postcode
    customerAddress.innerHTML = `<h5>${customerAddress}</h5>`
    // const address = document.createElement('h5')
    // customerProfile.appendChild(address)
    
    const customerDOB = document.createElement('h5')
    customerDOB.innerText = customer.dob.date
    customerProfile.appendChild(customerDOB)
    console.log(customerDOB)

    const customerRegistry = document.createElement('h5')
    customerRegistry.innerText = customer.registered.date
    customerProfile.appendChild(customerRegistry)
}
