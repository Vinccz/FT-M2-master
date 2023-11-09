//  03
var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  if (matchFunc(startEl)) resultSet.push(startEl);
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
for (const child of children) {
  resultSet.push(...traverseDomAndCollectElements(matchFunc, child));
}

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

// 01
var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if  (selector[0] === '#'){
    return "id";
      }else if (selector[0] === '.'){
        return "class";
      }else if (selector.includes('.')){
        return "tag.class";
      }
        return "tag"
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

// 02
var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (element){
    return selector === `#${element.id}`;
    }
  } else if (selectorType === "class") {
    matchFunction = function(element){
      let classes = element.classList;
      for (let i = 0; i < classes.length; i++) {
       if (`.${classes[i]}` === selector) {
        return true
       }
      }
      return false
    }

  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      let [ tagName, className ] = selector.split('.')
      return matchFunctionMaker(tagName)(element) && matchFunctionMaker(`.${className}`)(element);
    }

  } else if (selectorType === "tag") {
    matchFunction = (element) => {
      return element.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
