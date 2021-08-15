import { LightningElement } from 'lwc';
import chartJS from '@salesforce/resourceUrl/chartJS';
import { loadScript } from 'lightning/platformResourceLoader';

import { api } from 'lwc';

export default class BarChartLwc extends LightningElement {
    @api chartConfig;
 
    isChartJsInitialized;
    renderedCallback() {
        // debugger;
        // if (this.isChartJsInitialized) {
        //     return;
        // }
        // load chartjs from the static resource
        Promise.all([loadScript(this, chartJS)])
            .then(() => {
                this.isChartJsInitialized = true;
                const ctx = this.template.querySelector('canvas.barChart').getContext('2d');
                this.chart = new window.Chart(ctx, JSON.parse(JSON.stringify(this.chartConfig)));
            })
            .catch(error => {
                console.log(error);
            });
    }
}