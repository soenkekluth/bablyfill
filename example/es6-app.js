class App {

  static test = {
    foo: 'ufoo'
  };

  constructor(...args){

    const {hans, wurst, ...rest} = args;
    console.log('\n\n console.logs: Hello World');
  }
}

new App();
