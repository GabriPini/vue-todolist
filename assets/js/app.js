const app = new Vue({
    el:'#app',
    data:{
        newTask: '',

        tasks:[
            { 
            text:'Learn Vuejs',
            done: false,
            },

            { 
            text:'Learn Css',
            done: false,
            },

            { 
            text:'Learn Html',
            done: false,
            },

            { 
            text:'Learn Javascript',
            done: false,
            },
            
        ]
    },

    methods:{
   
        addTask(){
            let newObj = {
                text : this.newTask,
                done : false,
            }
            if(newObj.text.length>0){
					
                this.tasks.push(newObj);
                
            }
            this.newTask = '';
        },
        
        
        removeTask(i){
            this.tasks.splice(i, 1)
        },
        
        changeDone(index){
                
            if ( this.tasks[index].done != true ){
                
                this.tasks[index].done = true;
                           
            } else{
        
                this.tasks[index].done = false
        
            }
        
        },
    },
})