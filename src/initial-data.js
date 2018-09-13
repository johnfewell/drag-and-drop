const initialData = {
    tasks: {
      'task-1': {id: 'task-1', name: 'Iron Man'},
      'task-2': {id: 'task-2', name: 'Thor'},
      'task-3': {id: 'task-3', name: 'Hulk'},
      'task-4': {id: 'task-4', name: 'Captain America'},
      'task-5': {id: 'task-5', name: 'Black Widow'},
      'task-6': {id: 'task-6', name: 'Dr. Strange'},
      'task-7': {id: 'task-7', name: 'War Machine'},
      'task-8': {id: 'task-8', name: 'Spider Man'},
      'task-9': {id: 'task-9', name: 'Black Panther'},
      'task-10': {id: 'task-10', name: 'Vision'},
      'task-11': {id: 'task-11', name: 'Scarlet Witch'},
      'task-12': {id: 'task-12', name: 'Falcon'},
      'task-13': {id: 'task-13', name: 'Winter Soldier'},
      'task-14': {id: 'task-14', name: 'Loki'},
      'task-15': {id: 'task-15', name: 'Heimdall'},
      'task-16': {id: 'task-16', name: 'Eitri'},
      'task-17': {id: 'task-17', name: 'Wong'},
      'task-18': {id: 'task-18', name: 'Mantis'},
      'task-19': {id: 'task-19', name: 'Nebula'},
      'task-20': {id: 'task-20', name: 'Drax The Destroyer'},
      'task-21': {id: 'task-21', name: 'Gamora'},
      'task-22': {id: 'task-22', name: 'Groot'},
      'task-23': {id: 'task-23', name: 'Gamora'},
      'task-24': {id: 'task-24', name: 'Thanos'},
      'task-25': {id: 'task-25', name: 'Star-Lord'},
      'task-26': {id: 'task-26', name: 'Nick Fury'},
      'task-27': {id: 'task-27', name: 'Maria Hill'}
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: "tasks",
        taskIds: ['task-1','task-2','task-3','task-4','task-5','task-6','task-7','task-8','task-9','task-10','task-11','task-12','task-13','task-14','task-15','task-16','task-17','task-18','task-19','task-20','task-21','task-22','task-23','task-24','task-25','task-26','task-27']
      },
      'column-2': {
        id: 'column-2',
        title: 'Alive',
        taskIds: [],
      },
      'column-3': {
        id: 'column-3',
        title: 'Dead',
        taskIds: [],
      }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
  }
  export default initialData;