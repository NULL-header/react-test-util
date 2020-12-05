# features

There are the features of the library.

## renderDomFactory

This is to use in test. Usually, you must define function to render the components; But you can use this to make it simpler than without this.

## getElementsFrom

This is to use to get elements. So, you run it after function to render. it is taken factory pattern; If you pass the element as argument to this, this return instance of the class to search element. It has a method which can search elements by name of tag. And the method return instance of the class which extends Array; So, the method is factory pattern, too. There is the search result in the instance.  
Add, the instance like Array has asSingle as method. It is return value if the length of the array is one. you should be careful to throw error in the other case.
