 function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.rank = values[0];
    obj.name = values[1];
    obj.country = values[2];
    
    // Return the object directly, not the stringified JSON
    return obj;
}
