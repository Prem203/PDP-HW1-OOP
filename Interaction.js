class Interaction {
    prompt = "";
    response = "";
    
    
    constructor(prompt, response){
      this.prompt = prompt;
      this.response = response;
    }
    
    show() {
      console.log();  
      console.log(`Prompt=> ${this.prompt.slice(0,30)}... had response=> ${this.response.slice(0,30)}...`);
    }

    showInteractionType(){
        console.log("....This interaction is GPT Interaction....");
    }
    
  }
    
  export default Interaction;
  
  