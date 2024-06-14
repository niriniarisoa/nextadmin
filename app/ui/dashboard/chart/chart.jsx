"use client";
import { useEffect, useState } from 'react';
import styles from "@/app/ui/dashboard/chart/chart.module.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const fetchWeeklyTransactionSummary = async () => {
  const res = await fetch('/api/transactions/weekly-summary');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  const data = await res.json();
  return data;
};

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const summary = await fetchWeeklyTransactionSummary();
      const formattedData = Object.keys(summary).map(day => ({
        name: day,
        sortie: summary[day].sortie,
        retour: summary[day].retour,
      }));
      setData(formattedData);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sortie"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="retour" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
