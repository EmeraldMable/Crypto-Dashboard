import FullCalendar  from '@fullcalendar/react'

import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { StateContext } from '../context/contextProvider';
import { useContext } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { useEffect } from 'react';


const Schedule = () => {
    const scheduleContext = useContext(StateContext)
    useEffect(() => {
        window.scrollTo(0,0)
      },[])

    const handleClick = (selected:any) => {
        const title = prompt('Please enter the title of the event.')
        const calendarAPi = selected.view.calendar;
        calendarAPi.unselect()

        if(title){
            calendarAPi.addEvent({
                id:`${selected.dateStr}-${title}`,
                title,
                start:selected.startStr,
                end:selected.endStr,
                allDay:selected.allDay
            })
        }
    }  

    const handleEventClick = (selected:any) => {
        if(window.confirm(`Do you want to delete ${selected.event.title}?`)){
            selected.event.remove()
        }
    }

   
 
  return (
    <div className='mx-2 md:mx-10 my-4'>
        <Breadcrumb/>
        <div className='calendar mx-0 md:mx-10 my-4'>
        <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin,listPlugin,interactionPlugin, multiMonthPlugin]}
        initialView={'timeGridDay'}
        headerToolbar={{
            start:'timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listMonth',
            center:'title',
            end:'today,prev,next'
        }}
        selectable={true}
        height={'100vh'}
        select={handleClick}
        selectMirror={true}
        editable={true}
        dayMaxEvents={true}
        eventClick={handleEventClick}
        eventsSet={(events) => scheduleContext?.setEvents(events)}
        initialEvents={[
            {id:'1', title:'Morning Meeting', start:'2024-04-30'},
            {id:'2', title:'Report', start:'2024-04-28'}
        ]}
        />
    </div>
    </div>
  )
}

export default Schedule