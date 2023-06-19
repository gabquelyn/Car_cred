'use client'
import React, { useEffect, useRef } from 'react';
import { Chart, LinearScale, CategoryScale, TimeScale, PointElement, LineElement, Title, Tooltip, Legend, SubTitle } from 'chart.js';

const InspectionPerformanceChart = () => {
  const chartRef = useRef(null);
  Chart.register(LinearScale, CategoryScale, TimeScale, PointElement, LineElement, Title, Tooltip, Legend, SubTitle);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Dummy data for demonstration purposes
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Inspection Time (minutes)',
          data: [45, 50, 48, 55, 52, 50],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Customer Ratings',
          data: [4.5, 4.7, 4.8, 4.6, 4.5, 4.9],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        },
      ],
    };
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              type: 'linear',
              beginAtZero: true,
            },
          },
        },
      });
  }, []);

  return <canvas ref={chartRef} />;
};

export default InspectionPerformanceChart;
