const app = new Vue({
    el:'#app',
    data:{
        newTask: '',

        tasks:[
            { 
            text:'Learn Vuejs',
            done: false,
            trashed: false,
            },

            { 
            text:'Learn Css',
            done: false,
            trashed: false,
            },

            { 
            text:'Learn Html',
            done: false,
            trashed: false,
            },

            { 
            text:'Learn Javascript',
            done: false,
            trashed: false,
            },
            
        ],
    },
    methods:{
        
        addTask(){
            let newObj = {
                text : this.newTask,
                done : false,
                trashed: false,
            }
            if(newObj.text.length>0){
                
                this.tasks.push(newObj);
                
            }
            this.newTask = '';
        },
        
        
        
        removeTask(i){
                this.tasks.splice(i, 1)    
            
        },

        trashedTask(index){
            
            if ( this.tasks[index].trashed != true ){
            
                
                this.tasks[index].trashed = true;
                this.tasks[index].done = false;
                           
            } else{
        
                this.tasks[index].trashed = false
        
            }
        },
        
        changeDone(index){
                
            if ( this.tasks[index].done != true ){
                
                this.tasks[index].done = true;
                this.tasks[index].trashed = false;
                           
            } else{
        
                this.tasks[index].done = false
        
            }
        
        },
    },
})

