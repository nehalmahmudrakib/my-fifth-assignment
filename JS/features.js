document.getElementById('btn-history').addEventListener('click', function(){
    buttonClickById('show-history')
});

document.getElementById('btn-donation').addEventListener('click', function (){
    buttonClickById('donation')
});

document.getElementById('btn-donation').addEventListener('click', function(){
    buttonColor('btn-donation')
});

document.getElementById('btn-history').addEventListener('click', function(){
    buttonColor('btn-history')
});

// Nowakhali Donation Section
document.getElementById('btn-donate-nowakhali').addEventListener('click', function(event){
    event.preventDefault

    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance)
    console.log(accountBalanceNumber)

    const inputField = inputId('donation-amount')
    const donationBalance = balanceId('donation-balance')
    const nowakhaliDonation = inputField + donationBalance
    const totalBalance = accountBalanceNumber - inputField

    // if(inputField >= 0 && typeof inputField === 'number' && isNaN){
    if(!isNaN(inputField) && inputField > 0 && totalBalance > inputField){
        document.getElementById('donation-balance').innerText = nowakhaliDonation
        document.getElementById('account-balance').innerText = totalBalance

        // Transaction History
        const div = document.createElement('div')
        div.classList.add('rounded-3xl')
        div.innerHTML = `
            <div class="p-10 border-2 mt-5 rounded-2xl font-semibold">
                <p class="text-3xl">${inputField} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>
                <p class="text-xl mt-5"> Date: ${new Date().toLocaleDateString()} </p>
            </div>
            
        `

        document.getElementById('transaction-container').appendChild(div)
    }
    else{
        alert('Wrong Amount')
    }
});

// Donate for Flood Relief in Feni Bangladesh
document.getElementById('relief-btn-donation').addEventListener('click', function(event){
    event.preventDefault

    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance)

    const inputField = inputId('donation-amount-2')
    const donationBalance = balanceId('donation-balance-2')
    const ReliefDonation = inputField + donationBalance
    const totalBalance = accountBalanceNumber - inputField

    if(!isNaN(inputField) && inputField > 0 && totalBalance > inputField){
        document.getElementById('donation-balance-2').innerText = ReliefDonation
        document.getElementById('account-balance').innerText = totalBalance

         // Transaction History
         const div = document.createElement('div')
         div.classList.add('rounded-3xl')
         div.innerHTML = `
             <div class="p-10 border-2 mt-5 rounded-2xl font-semibold">
                 <p class="text-3xl">${inputField} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</p>
                 <p class="text-xl mt-5"> Date: ${new Date().toLocaleDateString()} </p>
             </div>
             
         `
 
         document.getElementById('transaction-container').appendChild(div)
    }
    else{
        alert('Wrong Amount')
    }
});

// Aid for Injured in the Quota Movement

document.getElementById('quota-donation-btn').addEventListener('click', function(event){
    event.preventDefault

    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance)

    const inputField = inputId('donation-amount-3')
    const donationBalance = balanceId('donation-balance-3')
    const quotaDonation = inputField + donationBalance
    const totalBalance = accountBalanceNumber - inputField

    if(!isNaN(inputField) && inputField > 0 && totalBalance > inputField){
        document.getElementById('donation-balance-3').innerText = quotaDonation
        document.getElementById('account-balance').innerText = totalBalance

         // Transaction History
         const div = document.createElement('div')
         div.classList.add('rounded-3xl')
         div.innerHTML = `
             <div class="p-10 border-2 mt-5 rounded-2xl font-semibold">
                 <p class="text-3xl">${inputField} Taka is Donated for Aid for Injured in the Quota Movement</p>
                 <p class="text-xl mt-5"> Date: ${new Date().toLocaleDateString()} </p>
             </div>
             
         `
 
         document.getElementById('transaction-container').appendChild(div)
    }
    else{
        alert('Wrong Amount')
    }
});