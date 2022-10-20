import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv = false;
    @track cityList = ['Myślibórz', 'Szczecin', 'Gorzów Wielkopolski', 'Warszawa', 'Gajewo'];

    showDivHandler(event) {
        this.displayDiv = event.target.checked;
    }
}