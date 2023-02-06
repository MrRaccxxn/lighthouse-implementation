require("dotenv").config();

const lighthouse = require('@lighthouse-web3/sdk');

const deploy = async () => {
    try {
        const path = "pdf.pdf"; //Give path to the file 
        const apiKey = process.env.API_KEY; //generate from https://files.lighthouse.storage/ or cli (lighthouse-web3 api-key --new)

        const response = await lighthouse.upload(path, apiKey);
        console.log('response', response)

        console.log("Visit at: https://gateway.lighthouse.storage/ipfs/" + response.data.Hash);
    } catch (error) {
        console.log(`error : ${error}`)
    }

}

deploy()