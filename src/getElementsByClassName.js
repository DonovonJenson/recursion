// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
 var results = []
  function getElements(node){
   if (node.children){
     for (var i = 0; i < node.children.length; i++){
       getElements(node.children[i]);
     }
   }
   if (node.classList.contains(className)){
     results.unshift(node);
   }
  }
getElements(document.body)
return results
};
