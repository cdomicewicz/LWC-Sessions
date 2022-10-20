import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {

    cardTitle = "BMI Calculator";
    weight;
    height;
    // @track bmi;
    // bmi;

    @track bmiData = {
        weight: 0,
        height: 0,
        result: 0
    }

    onWeightChange(event) {
        this.bmiData.weight = parseFloat(event.target.value);
        this.calculateBMI();
    }

    onHeightChange(event) {
        this.bmiData.height = parseFloat(event.target.value);
        this.calculateBMI();
    }

    calculateBMI() {
        try {
            this.bmiData.result = this.bmiData.weight / (this.bmiData.height^2);
        } catch (error) {
            this.bmiData.result = undefined;
        }
    }

    // getter example
    get bmiValue() {
        const bmi = this.bmiData.result;
        if (!bmi == undefined) {
            return "";
        }
        return `Your BMI is: ${bmi}`;
    }

}