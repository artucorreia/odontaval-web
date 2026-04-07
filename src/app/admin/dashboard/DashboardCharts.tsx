"use client";

import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const monthlyData = [
  { name: 'Jan', avaliacoes: 400 },
  { name: 'Fev', avaliacoes: 300 },
  { name: 'Mar', avaliacoes: 550 },
  { name: 'Abr', avaliacoes: 450 },
  { name: 'Mai', avaliacoes: 600 },
  { name: 'Jun', avaliacoes: 800 },
];

const patientData = [
  { name: 'Seg', pacientes: 20 },
  { name: 'Ter', pacientes: 35 },
  { name: 'Qua', pacientes: 40 },
  { name: 'Qui', pacientes: 30 },
  { name: 'Sex', pacientes: 50 },
  { name: 'Sab', pacientes: 15 },
];

const statusData = [
  { name: 'Concluídas', value: 400 },
  { name: 'Pendentes', value: 300 },
  { name: 'Canceladas', value: 100 },
];
const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 dark:bg-zinc-900 dark:border-zinc-800">
        <h2 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-100">Exames por mês</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Line type="monotone" dataKey="avaliacoes" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 dark:bg-zinc-900 dark:border-zinc-800">
        <h2 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-100">Média de notas por mês</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={patientData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
              <Tooltip 
                cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="pacientes" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 dark:bg-zinc-900 dark:border-zinc-800 lg:col-span-2">
        <h2 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-100">Status das Avaliações</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
