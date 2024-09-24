function buttonClickById(id){
    document.getElementById('donation').classList.add('hidden')
    document.getElementById('show-history').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
    document.getElementById(id).classList.remove
}

function buttonColor(id){
    document.getElementById('btn-donation').classList.add('bg-white')
    document.getElementById('btn-history').classList.add('bg-white')
    
    
    document.getElementById(id).classList.remove('bg-white')
    document.getElementById(id).classList.remove('bg-white')
};

function inputId(id){
    const donation = document.getElementById(id).value
    const donationNum = parseFloat(donation)
    return donationNum;
}

function balanceId(id){
    const donation = document.getElementById(id).innerText
    const donationNum = parseFloat(donation)
    return donationNum;
}