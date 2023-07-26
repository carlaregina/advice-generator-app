import { adviceService } from "../service/advice-service.js";

const adviceId = document.getElementById("advice-id");
const adviceMessage = document.getElementById("advice-message");
const generateButton = document.getElementById("advice-btn")


function generateNewAdvice() {
   adviceService.getAdvice().then((data) => {
        adviceId.innerHTML = data.adviceId
        adviceMessage.innerHTML = data.adviceMessage
    })
}

generateButton.addEventListener('click', () => generateNewAdvice())


generateNewAdvice();
