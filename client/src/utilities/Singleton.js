let Singleton = (function() {
  let instance = null;

  class Singleton {
    constructor() {
      if(!instance) {
        instance = this;
      }

      return instance;
    }
  }

  return Singleton;
}());

export default Singleton;