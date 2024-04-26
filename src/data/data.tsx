import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";

const monitorData = [
    {
        id:'1',
        title:'Sales',
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SGbgfjpz1qWq5a_bPap9R6Zrx-g7sOTVDWmEcIN3hw&s',
        price:'293330'
    },
    {
        id:'2',
        title:'ETH/USDT',
        icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcU_qzRwwC3ZgIs0Jh0jgtIts6qloxaAjytgLqdA3mxw&s',
        price:'201091',
        WebSocket:'wss://stream.binance.com:9443/ws/btceur@trade'
    }, {
        id:'3',
        title:'DOGE/USDT',
        icon:'https://cdn.icon-icons.com/icons2/3376/PNG/512/dogecoin_currency_icon_211986.png ',
        price:'29749',
        WebSocket:'wss://stream.binance.com:9443/ws/btceur@trade'
    },{
        id:'4',
        title:'XRP/USDT',
        icon:'https://www.svgrepo.com/show/428642/ripple-xrp-cryptocurrency.svg',
        price:'09388',
        WebSocket:'wss://stream.binance.com:9443/ws/btceur@trade'
    }
]
const links = [
    {
        id:'1',
        name:'Dashboard',
        route:'/'
    },
    {
        id:'2',
        name:'Schedule',
        route:'/Schedule'
    },
    {
        id:'3',
        name:'Data',
        route:'/data'
    },
    {
      id:'4',
      name:'Notifications',
      route:'/noti'
    }
    ,
   
    {
        id:'5',
        name:'Messages',
        route:'/messages'
    },
    ,
    {
        id:'6',
        name:'Members',
        route:'/members'
    },
    {
        id:'7',
        name:'Update',
        route:'/update'
    },
    {
        id:'8',
        name:'Help me!',
        route:'/help'
    }
]
 
const GraphData = [
    {
      "id": "Traffic",
      "color": "hsl(248, 70%, 50%)",
      "data": [
        {
            "x": "1 AM",
            "y": 800
          },
          {
            "x": "3 AM",
            "y": 850
          },
          {
            "x": "5 AM",
            "y": 700
          },
          {
            "x": "7 AM",
            "y": 650
          },
          {
            "x": "9 AM",
            "y": 700
          },
          {
            "x": "11 AM",
            "y": 950
          },
          {
            "x": "1 PM",
            "y": 900
          },
          {
            "x": "3 PM",
            "y": 950
          },
          {
            "x": "5 PM",
            "y": 1000
          },
          {
            "x": "7 PM",
            "y": 900
          },
          {
            "x": "9 PM",
            "y": 1000
          },
          {
            "x": "12 AM",
            "y": 1500
          }
      ]
    },
    {
      "id": "Customers",
      "color": "hsl(293, 70%, 50%)",
      "data": [
        {
            "x": "1 AM",
            "y": 2000
          },
          {
            "x": "3 AM",
            "y": 1005
          },
          {
            "x": "5 AM",
            "y": 1000
          },
          {
            "x": "7 AM",
            "y": 900
          },
          {
            "x": "9 AM",
            "y": 2000
          },
          {
            "x": "11 AM",
            "y": 500
          },
          {
            "x": "1 PM",
            "y": 3000
          },
          {
            "x": "3 PM",
            "y": 2000
          },
          {
            "x": "5 PM",
            "y": 1000
          },
          {
            "x": "7 PM",
            "y": 1500
          },
          {
            "x": "9 PM",
            "y": 1000
          },
          {
            "x": "12 AM",
            "y": 400
          }
      ]
    },
   
    {
      "id": "Revenue",
      "color": "hsl(307, 70%, 50%)",
      "data": [
        {
            "x": "1 AM",
            "y": 500
          },
          {
            "x": "3 AM",
            "y": 230
          },
          {
            "x": "5 AM",
            "y": 400
          },
          {
            "x": "7 AM",
            "y": 450
          },
          {
            "x": "9 AM",
            "y": 500
          },
          {
            "x": "11 AM",
            "y": 850
          },
          {
            "x": "1 PM",
            "y": 900
          },
          {
            "x": "3 PM",
            "y": 1050
          },
          {
            "x": "5 PM",
            "y": 2000
          },
          {
            "x": "7 PM",
            "y": 1500
          },
          {
            "x": "9 PM",
            "y": 2000
          },
          {
            "x": "12 AM",
            "y": 5000
          }
      ]
    },
    {
      "id": "Sales",
      "color": "hsl(229, 70%, 50%)",
      "data": [
        {
            "x": "1 AM",
            "y": 150
          },
          {
            "x": "3 AM",
            "y": 5
          },
          {
            "x": "5 AM",
            "y": 0
          },
          {
            "x": "7 AM",
            "y": 50
          },
          {
            "x": "9 AM",
            "y": 4
          },
          {
            "x": "11 AM",
            "y": 35
          },
          {
            "x": "1 PM",
            "y": 3
          },
          {
            "x": "3 PM",
            "y": 25
          },
          {
            "x": "5 PM",
            "y": 20
          },
          {
            "x": "7 PM",
            "y": 150
          },
          {
            "x": "9 PM",
            "y": 10
          },
          {
            "x": "12 AM",
            "y": 200
          }
      ]
    }
  ]
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jone', age: 14 , status:'Sale Manager' , Email:'Snowy2398@gmail.com' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 , status:'Executive Assistant' , Email:'cersei@gmail.com' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 ,status:'Administrative Assistant' , Email:'jaime@gmail.com' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 , status:'Events Administrator' , Email:'arya@gmail.com' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 32 , status:'Operations Manager' , Email:'daenerys@gmail.com' },
    { id: 6, lastName: 'Melisandre', firstName: 'Susan', age: 150 ,status:'Office Administrator' , Email:'susan@gmail.com' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , status:'Receptionist' , Email:'ferrara@gmail.com' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 , status:'Data Entry Clerk' , Email:'rossini@gmail.com' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , status:'Office Assistant' , Email:'harvey@gmail.com' },
  ];


  const columns:any= [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
      headerAlign:'center',
      align:'center'
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
      headerAlign:'center',
      align:'center'
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 150,
      editable: true,
      headerAlign:'center',
      align:'center'
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This shows the status of the staff',
      sortable: false,
      width: 300,
      headerAlign:'center',
      align:'center'
    },
    {
      field:'Email',
      headerName:'Email',
      description:'You can send email to the memebers',
      sortable:false,
      width:200,
      headerAlign:'center',
      align:'center',
      renderCell:({row:{Email}}) => {
        return (
          <ListItem>
            <Link className="hover:underline" to={`mailto:${Email}`}>{Email}</Link>
          </ListItem>
        )
      }
    }
  ];

  const messages = [
    {
      id:'1',
      from : 'Susan Jone',
      message:'Please prepare refreshment for tomorrow meeting.',
      date:'2024-04-27',
      time:'1:00 PM',
      seen:true
    },
    {
      id:'2',
      from :'Lannister Cersei',
      message:'Kindly reminding you to post Friday report.',
      date:'2024-04-26',
      time:'3:00 PM',
      seen:false
    },
    {
      id:'3',
      from :'Frances Rossini',
      message:'Kindly reminding you to post Friday report.',
      date:'2024-04-26',
      time:'12:00 PM',
      seen:false
    },
    {
      id:'4',
      from :'Clifford Ferrara',
      message:'Kindly reminding you to post Friday report.',
      date:'2024-04-26',
      time:'10:00 AM',
      seen:false
    }
  ]

  const mails = [
    {
      id:'1',
      from:'Stark Arya',
      time:'1:00 AM',
      date:'2024-06-12',
      checked:false
    },
    {
      id:'2',
      from:'Targaryen Daenerys',
      time:'1:00 AM',
      date:'2024-06-12',
      checked:true
    },
    {
      id:'3',
      from:'Roxie Hervey',
      time:'1:00 AM',
      date:'2024-06-12',
      checked:true
    }
  ]
  const updates = [
    {
      id:'1',
      title:'WE ARE HIRING!',
      subject:'Life has many aspects and one of the most important sides of it is having a good job. But what is a good job? That is a hard question to answer with one or two words because every person has his or her own perspective in answering this question. Some people see a good job as having a good income, others look at it as low working hours, while others just look to job as they are meant to do it. A job that is with high payment and brings the happiness, passion to workers are the factors which are appreciated the most by most of people.',
      time:'10:00 AM',
      date:'2024-04-12'
    },
    {
      id:'2',
      title:'CLEANING IS IMPORTANT!',
      subject:'Life has many aspects and one of the most important sides of it is having a good job. But what is a good job? That is a hard question to answer with one or two words because every person has his or her own perspective in answering this question. Some people see a good job as having a good income, others look at it as low working hours, while others just look to job as they are meant to do it. A job that is with high payment and brings the happiness, passion to workers are the factors which are appreciated the most by most of people.',
      time:'12:00 AM',
      date:'2024-01-20'
    },
    {
      id:'3',
      title:'OUR COMPANY IS INVITING NEW INVESTORS!',
      subject:'Life has many aspects and one of the most important sides of it is having a good job. But what is a good job? That is a hard question to answer with one or two words because every person has his or her own perspective in answering this question. Some people see a good job as having a good income, others look at it as low working hours, while others just look to job as they are meant to do it. A job that is with high payment and brings the happiness, passion to workers are the factors which are appreciated the most by most of people.',
      time:'5:00 AM',
      date:'2024-02-30'
    }
  ]

export {monitorData , links , GraphData , rows , columns , messages , mails , updates}