function addTokens(input, tokens){
    if(typeof input  === "string")
    {
        if(input.length >= 6)
        {
            for(var token in tokens) 
            {
                if(typeof token.tokenName === String)
                {
                    if(input.includes("..."))
                    {

                    }
                    else
                    {
                        return input;
                    }
                }
                else
                {
                    throw new Error("Invalid array format");
                }
            }           
        }
        else
        {
            throw new Error("Input should have at least 6 characters");
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