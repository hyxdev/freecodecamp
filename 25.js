function phoenticLookUp(val){
    var result="";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver",
        "echo": "Easy",
        "Foxtrot" : "Frank"
    };
    result = lookup[val];

    return result;
}

console.log(phoenticLookUp("charlie"));