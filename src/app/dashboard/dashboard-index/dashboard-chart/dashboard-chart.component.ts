import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {

  //#region First Chart
  public lineChartData: ChartConfiguration<'bar'>['data'] = {
    
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      borderWidth: 0,
     
      
      backgroundColor: "rgba(255, 255, 255, .8)",
      data: [50, 20, 10, 22, 50, 10, 40],
     
    } ],
    
  };
  public lineChartOptions: ChartOptions<'bar'> = {
    
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          
          color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
          
         
         
          padding: 10,
          font: {
            size: 14,
            weight: "300",
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
          color: "#fff"
        },
      },
      x: {
        grid: {
          
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
        
          color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
          display: true,
          color: '#f8f9fa',
          padding: 10,
          font: {
            size: 14,
            weight: "300",
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  }
  public lineChartLegend = true;
  //#endregion
  
  //#region  Patient Visit
  public pateintChartData: ChartConfiguration<'line'>['data'] = {
    
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      borderWidth: 1,
      borderColor: 'black',
      label: 'Male',
      backgroundColor: "rgba(255, 255, 255, .8)",
      data: [50, 20, 10, 22, 50, 10, 40],
     
    },
    {
      borderWidth: 1,
      borderColor: 'black',
      label: 'Female',
      backgroundColor: "rgba(255, 255, 255, .8)",
      data: [21, 28, 34, 55, 76, 20, 40],
     
    }  ],
    
  };
  public pateintChartOptions: ChartOptions<'line'> = {
    
    responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              
              color: 'rgba(255, 255, 255, .2)'
            },
            ticks: {
              display: true,
              color: '#f8f9fa',
              padding: 10,
              font: {
                size: 14,
                weight: "300",
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
          x: {
            grid: {
              
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              
            },
            ticks: {
              display: true,
              color: '#f8f9fa',
              padding: 10,
              font: {
                size: 14,
                weight: "300",
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
        },
      }
  
  public pateintChartLegend = true;
  //#endregion

  
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
