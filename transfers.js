var myHeaders = new Headers();

fetch("https://fsi.ng/api/v1/flutterwave/v3/transfers", {
    method: 'POST',
    headers: {
        "Content-type": "application/json",
        "sandbox-key": "EJHSstlTSs5ZqXh3s2jVbcttZMANxSVq1661689640",
        "Authorization": "dskjds",
    },

    body: JSON.stringify({
        "account_bank": "044",
        "account_number": "0690000040",
        "amount": 5500,
        "narration": "Akhlm Pstmn Trnsfr xx007",
        "currency": "NGN",
        "reference": "akhlm-pstmnpyt-rfxx007_PMCKDU_1",

        "debit_currency": "NGN"
    })

}).then(res => {
    return res.json()
})
    .then(data => 
        {
            let successMessage = data.message;
            console.log(successMessage)
            console.log(data);
        })
    .catch(error => console.log("error"))