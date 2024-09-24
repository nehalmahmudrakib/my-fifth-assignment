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

    if(inputField >= 0 && typeof inputField === 'number'){
        document.getElementById('donation-balance').innerText = nowakhaliDonation
        document.getElementById('account-balance').innerText = totalBalance
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

    if(inputField >= 0 && typeof inputField === 'number'){
        document.getElementById('donation-balance-2').innerText = ReliefDonation
        document.getElementById('account-balance').innerText = totalBalance
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

    if(inputField >= 0 && typeof inputField === 'number'){
        document.getElementById('donation-balance-3').innerText = quotaDonation
        document.getElementById('account-balance').innerText = totalBalance
    }
    else{
        alert('Wrong Amount')
    }
});