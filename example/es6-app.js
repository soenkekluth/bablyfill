import ES6Module from './es6-module';

class App {

  static test = {
    foo: 'ufoo'
  };

  constructor(...args){
    const {hans, wurst, ...rest} = args;
    console.log('\n\nHello World - App started');

    const fun = () => {
      console.log('arrow function here');
    }

    fun();
    new ES6Module();
  }
}

new App();
