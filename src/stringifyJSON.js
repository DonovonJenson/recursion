// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  return createString(obj);

  function createString(item){
    if (item == undefined){
      return 'null';
    }
  if (typeof item === 'number'){
    return item.toString();
  }
  if (typeof item === 'boolean'){
    return Boolean(item).toString();
  }
  if (typeof item === 'string'){
    return "\"" + item + "\"";
  }
  if (Array.isArray(item)){
    var answer = '['
    for (var i = 0; i < item.length; i++){
      answer += createString(item[i]);
      if(i < item.length-1){
        answer+=','
      }
    }
    return answer+']';
  }
  if (typeof item === 'object'){
   var answer = '{'
   var keys = Object.keys(item);
   for (var i = 0; i < keys.length; i++){
     if (item[keys[i]] !== undefined && createString(item[keys[i]]) !== undefined){
     answer += createString(keys[i])+':'
     answer += createString(item[keys[i]]);
     if (i < keys.length-1){
       answer +=','
     }
   }
 }
   return answer += '}'
  }
}


};
