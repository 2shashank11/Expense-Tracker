import React from 'react';
import { Bar } from 'react-chartjs-2';

function MonthlyGraph({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Expense',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: data.expense
      }
    ]
  };

  return (
    <Bar
      data={chartData}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      }}
    />
  );
}

export default MonthlyGraph;
