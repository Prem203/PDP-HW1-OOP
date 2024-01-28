import PromptManager from "./PromptManager.js";
import readline from 'readline';

const myPromptManager = new PromptManager();

myPromptManager.recordPrompt(
  "Q1: What are some key strategies drivers employ during a Formula 1 race, and how do these tactics contribute to their overall performance?",
  "A: In Formula 1, drivers employ various strategies to gain a competitive edge. One crucial tactic is tire management, where drivers balance speed and degradation to optimize pit stops. Additionally, mastering the art of overtaking, understanding aerodynamics for efficient fuel consumption, and strategic pit-stop decisions are key elements. These strategies collectively contribute to a driver's overall performance and play a vital role in race outcomes."
);

myPromptManager.recordPrompt(
  "Q2: How do Formula 1 teams utilize data analytics and technology to enhance performance and make strategic decisions during races?",
  "A: Formula 1 teams leverage advanced data analytics and technology for a competitive edge. High-tech sensors on cars collect real-time data on factors like tire pressure, fuel consumption, and aerodynamics. Teams use sophisticated analytics to analyze this data, enabling them to make informed decisions on race strategies, pit stops, and adjustments to optimize performance. The integration of technology has become integral to achieving success in the fast-paced world of Formula 1."
  );

myPromptManager.recordPrompt(
  "Q3: How does the aerodynamic design of Formula 1 cars impact their performance on the racetrack, and what key factors do engineers consider in optimizing aerodynamics?",
  "A: The aerodynamic design of Formula 1 cars plays a crucial role in their on-track performance. Engineers focus on minimizing drag and maximizing downforce to enhance speed and cornering capabilities. Key factors include the shape of the front and rear wings, the design of the diffuser, and the management of airflow around the car. Achieving the right balance is essential for optimal performance, as it directly influences a car's stability, grip, and overall efficiency during a race."
  );

myPromptManager.recordDalleInteraction(
    "Q4: Can you provide insights into the aerodynamic features of the Mercedes-AMG Petronas Formula One Team's W11 car, and how do these features contribute to its performance on the track?",
    "A: DalleThe Mercedes-AMG Petronas Formula One Team's W11 boasts advanced aerodynamic features designed for peak performance. Notable elements include the intricate front wing design, carefully sculpted side pods, and the distinctive air intake above the driver's head. These features collectively optimize airflow, reduce drag, and enhance downforce, contributing to the car's exceptional speed and maneuverability on the track.",
    "https://www.formula1.com/en/latest/article.wolff-confirms-mercedes-have-stopped-developing-the-w11-as-silver-arrows.GjLQ4onDmmKWOcKMpEIlQ.html"
  );

myPromptManager.showAllInteractions();

console.log();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter the index of the prompt to Delete: ", (promptToDelete) => {
    // Delete the specified prompt
    myPromptManager.deletePrompt(promptToDelete);

    console.log();
    console.log("The updated list of the prompts and responses are--------->");
    console.log();     
    myPromptManager.showAllInteractions();


  rl.question("Do you want to restore the deleted prompt?(Y/N)", (restore) => {

    switch(restore.toLowerCase()){

      case 'y': {
        myPromptManager.restorePrompt();
        console.log();
        console.log("The restored list of the prompts and responses are--------->");
        console.log();     
        myPromptManager.showAllInteractions();}
        break;

      case 'n':{
        console.log();
        console.log("List is not restored.");
        console.log();     
        myPromptManager.showAllInteractions();
      }
        break;

      default:
        break;
    }
    rl.close();

  });
});

  
    