function buttonClickById(id){
    document.getElementById('donation').classList.add('hidden')
    document.getElementById('show-history').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
    document.getElementById(id).classList.remove
}

function buttonColor(id){
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]')
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]')
    
    
    document.getElementById(id).classList.add('bg-[#B4F461]')
};

function inputId(id){
    const donation = document.getElementById(id).value
    const donationNumber = parseFloat(donation)
    return donationNumber;
}

function balanceId(id){
    const donation = document.getElementById(id).innerText
    const donationNumber = parseFloat(donation)
    return donationNumber;
}