export const columns = [
    { field: 'id', headerName: 'iD', width: 100 },
    { field: 'Ism', headerName: 'Ism', width: 200 },
    { field: 'email', headerName: 'email', width: 250 },
    
    {
      field: 'Yosh',
      headerName: 'Yosh',
      width: 120,
    },
    {
      field: 'Status',
      headerName: 'Status',
      width: 160,
      renderCell: (params)=> {
        return <div className={`sellRenderStatus ${params.row.Status}`}>{params.row.Status}</div>
        
      }
    },
    ]

export  const rows = [
    { id: 1, Ism: 'Asliddin', email: "asliddinwiutstudent@gmail.com", Yosh:20, Status:"Aktiv" },
    { id: 2, Ism: 'Abbosxon', email: "asliddinwiutstudent@gmail.com", Yosh:40, Status:"Passiv" },
    { id: 3, Ism: 'Avazxon', email: "asliddinwiutstudent@gmail.com", Yosh:43, Status:"Aktiv" },
    { id: 4, Ism: 'Salmon', email: "asliddinwiutstudent@gmail.com", Yosh:35, Status:"Aktiv" },
    { id: 5, Ism: 'Maykl', email: "asliddinwiutstudent@gmail.com", Yosh:21, Status:"Aktiv" },
    { id: 6, Ism: "Jack", email: "asliddinwiutstudent@gmail.com", Yosh:49, Status:"Passiv" },
    { id: 7, Ism: 'Mustafo', email: "asliddinwiutstudent@gmail.com", Yosh:18, Status:"Aktiv" },
    { id: 8, Ism: 'Axmat', email: "asliddinwiutstudent@gmail.com", Yosh:19, Status:"Aktiv" },
    { id: 9, Ism: 'Muslim', email: "asliddinwiutstudent@gmail.com", Yosh:62, Status:"Aktiv" },
    { id: 10, Ism: 'Mo`mina', email: "asliddinwiutstudent@gmail.com", Yosh:20, Status:"Passiv" },
    
    
  ];