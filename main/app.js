function addTokens(input, tokens){
    if(typeof input  === "string")
    {
        if(input.length >= 6)
        {
            var format = true;
            tokens.forEach(item => typeof(item['tokenName']) !== 'string' ? format = false : null);

            if(tokens != Array.isArray() && format == false)
            {
                throw new Error("Invalid array format");
            }
            else
            {
                if(input.includes('...'))
                {
                    return input.replace('...', "${"+ tokens[0].tokenName +"}");
                }
                else
                {
                    return input;
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