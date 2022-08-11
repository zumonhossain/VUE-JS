let app = new Vue ({
    el: '#app',
    data: {
        name: 'Zumon Hossain',
        dagination: 'Web Developer',
    },
    
    methods: {
        myName(){
            return 'Ft Shanto'
        },

        myAge(age){
            return ` My name is ${this.name} I'm a ${this.dagination} My age is ${age} `
        }
    }
});