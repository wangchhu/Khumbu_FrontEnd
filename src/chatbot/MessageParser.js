class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
    
  
      if (lowercase.includes("hello")) {
        this.actionProvider.greet();
      }

      if (lowercase.includes("suggest a hotel")) {
        this.actionProvider.greet1();
      }

      if (lowercase.includes("hotel near boudha")) {
        this.actionProvider.greet2();
      }
  
    }
  }
  
  export default MessageParser;