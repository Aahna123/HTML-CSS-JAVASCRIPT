function printName(options){
    const defaults = {
        firstname: "bob",
        lastname: "dwivedi"

    };
    options= Object.assign(defaults,options);
    console.log(options.firstname, options.lastname);
    

}

printName({
    firstname:"dom"
})