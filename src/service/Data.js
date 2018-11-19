export const TimeSlotData = {
  timeSlots: [
    { id: 1, time: '9:00am', data: null },
    { id: 2, time: '10:00am', data: null },
    { id: 3, time: '11:00am', data: null },
    { id: 4, time: '12:00pm', data: null },
    { id: 5, time: '1:00pm', data: null },
    { id: 6, time: '2:00pm', data: null },
    { id: 7, time: '3:00pm', data: null },
    { id: 8, time: '4:00pm', data: null },
    { id: 9, time: '5:00pm', data: null }
  ],
  all: () => TimeSlotData.timeSlots,
  get: (id) => TimeSlotData.timeSlots.filter(slot => slot.id === id)[0],
  post: (data, id) => {
    console.log(data, id);
    const index = TimeSlotData.timeSlots.findIndex(slot => slot.id === id)
    console.log(index);
    
    if(index !== -1) {
      TimeSlotData.timeSlots[index].data = data.data
      return true
    }
    return false
  }
}