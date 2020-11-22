function addTokens(input, tokens){
    if(typeof input  === "string")
    {
        if(input.length >= 6)
        {
            
        }
        else
        {
            throw new Error("Input should have at least 6 characters")
        } 
    }
    else
    {
		throw new TypeError("Invalid input");
	}
}

const app = {
    addTokens: addTokens
}

module.exports = app;