import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    firstNumber;
    secondNumber;

    @track previousResults = [];
    @track showPreviousResults = false;

    numberChangeHandler(event) {
        const newValue = event.target.value;
        const inputBoxName = event.target.name; 
        if (inputBoxName === "firstNumber") {
            this.firstNumber = newValue;
        } else if (inputBoxName === "secondNumber"){
            this.secondNumber = newValue;
        }
        
    }

    clearResultsHandler() {
        this.previousResults = [];
    }

    addHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'Result of ' + firstN + ' + ' + secondN + ' is ' + (firstN + secondN);
        this.currentResult = `Result of ${firstN}+${secondN} is ${firstN + secondN}`;
        // updateResultList(this.currentResult);
        this.previousResults.push(this.currentResult);
    }

    subHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'Result of ' + firstN + ' - ' + secondN + ' is ' + (firstN - secondN);
        this.currentResult = `Result of ${firstN}-${secondN} is ${firstN - secondN}`;
        // updateResultList();
        this.previousResults.push(this.currentResult);
    }
    multiplyHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'Result of ' + firstN + ' * ' + secondN + ' is ' + (firstN * secondN);
        this.currentResult = `Result of ${firstN}*${secondN} is ${firstN * secondN}`;
        // updateResultList();
        this.previousResults.push(this.currentResult);
    }
    divisionHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'Result of ' + firstN + ' / ' + secondN + ' is ' + (firstN / secondN);
        this.currentResult = `Result of ${firstN}/${secondN} is ${firstN / secondN}`;
        // updateResultList();
        this.previousResults.push(this.currentResult);
    }

    updateResultList(result) {
        this.previousResults.push(result);
    }

    showPreviousResultsToggle(event) {
        this.showPreviousResults = event.target.checked;
    }

}