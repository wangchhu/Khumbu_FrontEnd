class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello Traveller.");
      this.addMessageToState(message);
    };
  
    greet1 = () => {
        const message = this.createChatBotMessage("Tell us your budget range");
        this.addMessageToState(message);
      };

    greet2 = () => {
        const message = this.createChatBotMessage("1.Hotel Tibet 2. Hotel Everest 3. Hyatt");
        this.addMessageToState(message);
      };

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;