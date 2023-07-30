import React, { useEffect, useRef } from 'react';

import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

function AnalyticsChart({ completedTasks, pomodoroSessions,completeTask }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
   
  useEffect(() => {
    if (chartInstanceRef.current) {
      const chartData = chartInstanceRef.current.data.datasets[0].data;
      chartData[0] = completedTasks;
      chartData[1] = pomodoroSessions;
      chartInstanceRef.current.update();
    } else {
      const ctx = chartRef.current.getContext('2d');
      const chartData = {
        labels: ['Completed Tasks', 'Pomodoro Sessions'],
        datasets: [
          {
            label: 'Count',
            data: [completedTasks, pomodoroSessions],
            backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
          },
        ],
      };
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              stepSize: 1,
            },
          },
        },
      });
    }
  }, [completedTasks, pomodoroSessions]);

  return (
    <>
     <div>
      <h1>Analytics</h1>
      <div className="button-container"> {/* Apply the CSS class */}
        <button className="button" onClick={completeTask}>Complete Task</button> {/* Apply the CSS classes */}
      </div>
     
    </div>
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
    </>
  );
}

export default AnalyticsChart;

        