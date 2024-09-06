import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import './App.css'
import { useState } from 'react';
function App() {
  
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'task', name: 'Task' },
    { key: 'priority', name: 'Priority' },
    { key: 'client', name: 'Client' },
    { key: 'area', name: 'Area' },
    { key: 'country', name: 'Country' },
    { key: 'contact', name: 'Contact' },
    { key: 'assignee', name: 'Assignee' },
    { key: 'startdate', name: 'Start Date' },
    { key: 'deadline', name: 'Deadline' },
    { key: 'budget', name: 'Budget' },
    { key: 'account', name: 'Account' },
  ];

  const rows = [
    { 
    id: 0,
    task: 'Task #1',
    priority: 'Low',
    client: 'Torp Group',
    area: 'Markets',
    country: 'Vanuatu',
    contact: 'Paolo85@example.com',
    assignee: 'April Kassulke',
    startdate: '7/4/2024',
    deadline: '10/8/2024',
    budget: '€3,965.93',
    account: 'GI87PWOV1206789T3P65074',
    },
    { 
      id: 0,
      task: 'Task #1',
      priority: 'Low',
      client: 'Torp Group',
      area: 'Markets',
      country: 'Vanuatu',
      contact: 'Paolo85@example.com',
      assignee: 'April Kassulke',
      startdate: '7/4/2024',
      deadline: '10/8/2024',
      budget: '€3,965.93',
      account: 'GI87PWOV1206789T3P65074',
      },
      { 
        id: 0,
        task: 'Task #1',
        priority: 'Low',
        client: 'Torp Group',
        area: 'Markets',
        country: 'Vanuatu',
        contact: 'Paolo85@example.com',
        assignee: 'April Kassulke',
        startdate: '7/4/2024',
        deadline: '10/8/2024',
        budget: '€3,965.93',
        account: 'GI87PWOV1206789T3P65074',
        },
        { 
          id: 0,
          task: 'Task #1',
          priority: 'Low',
          client: 'Torp Group',
          area: 'Markets',
          country: 'Vanuatu',
          contact: 'Paolo85@example.com',
          assignee: 'April Kassulke',
          startdate: '7/4/2024',
          deadline: '10/8/2024',
          budget: '€3,965.93',
          account: 'GI87PWOV1206789T3P65074',
          },
          { 
            id: 0,
            task: 'Task #1',
            priority: 'Low',
            client: 'Torp Group',
            area: 'Markets',
            country: 'Vanuatu',
            contact: 'Paolo85@example.com',
            assignee: 'April Kassulke',
            startdate: '7/4/2024',
            deadline: '10/8/2024',
            budget: '€3,965.93',
            account: 'GI87PWOV1206789T3P65074',
            },
            { 
              id: 0,
              task: 'Task #1',
              priority: 'Low',
              client: 'Torp Group',
              area: 'Markets',
              country: 'Vanuatu',
              contact: 'Paolo85@example.com',
              assignee: 'April Kassulke',
              startdate: '7/4/2024',
              deadline: '10/8/2024',
              budget: '€3,965.93',
              account: 'GI87PWOV1206789T3P65074',
              },
              { 
                id: 0,
                task: 'Task #1',
                priority: 'Low',
                client: 'Torp Group',
                area: 'Markets',
                country: 'Vanuatu',
                contact: 'Paolo85@example.com',
                assignee: 'April Kassulke',
                startdate: '7/4/2024',
                deadline: '10/8/2024',
                budget: '€3,965.93',
                account: 'GI87PWOV1206789T3P65074',
                },
                { 
                  id: 0,
                  task: 'Task #1',
                  priority: 'Low',
                  client: 'Torp Group',
                  area: 'Markets',
                  country: 'Vanuatu',
                  contact: 'Paolo85@example.com',
                  assignee: 'April Kassulke',
                  startdate: '7/4/2024',
                  deadline: '10/8/2024',
                  budget: '€3,965.93',
                  account: 'GI87PWOV1206789T3P65074',
                  },
                  
    
  ];
  
  return (
    <>
    <div className='continer'>
      <DataGrid columns={columns} rows={rows}/>
    </div>
    </>
  )
}

export default App
