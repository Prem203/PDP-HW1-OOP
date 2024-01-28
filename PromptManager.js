import pkg from "prelude-ls";
const{slice} = pkg;
import DalleInteraction from "./DalleInteraction.js";
import Interaction from "./Interaction.js";

class PromptManager {
   interactions = [];
  cache = [];

  showAllInteractions() {

    for( let interaction of this.interactions) {
      interaction.show();
      interaction.showInteractionType();
    }

  }

  recordPrompt(prompt, response) {

    const firstInteraction = new Interaction(prompt, response);
    this.interactions.push(firstInteraction);
    this.cache.push(firstInteraction);

  }

  recordDalleInteraction(prompt,response,url) {
    const dalle = new DalleInteraction(prompt,response,url);
    this.interactions.push(dalle);
    this.cache.push(dalle);

  }

  deletePrompt(promptToDelete){
    this.interactions.splice(promptToDelete, 1);
  }

  restorePrompt(){
    this.interactions = this.cache;
  }
  
}

export default PromptManager;


