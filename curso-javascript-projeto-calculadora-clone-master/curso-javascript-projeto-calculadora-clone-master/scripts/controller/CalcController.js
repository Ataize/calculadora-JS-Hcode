class CalcController {

    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl =document.querySelector("#hora");

        this._currentDate;
        this.initialize();
        this.initButtonEvents();
    }

    initialize(){

        this.setDisplayDateTime();

        //para executar algo de forma intermitente, no caso, mudar os segundos -> 1000 é a quantidade de milisegundos
        setInterval(()=>{

            this.setDisplayDateTime();
           
        }, 1000);

    }
    //Vou criar um método que pegue tanto o click como o drop
    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event =>{

            element.addEventListener(event, fn, false);
        })
    }

    initButtonEvents(){
        //para pegar todas as tags g filhas de buttons e as tags g folhas de parts
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');
        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn ,'click drag', e =>{

                console.log(btn.className.baseVal.replace("btn-", ""));

            });
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e =>{
                btn.style.cursor = 'pointer';
            });
        });
    }
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day:"2-digit",
            month:"short",
            year:"numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor) {
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this._currentDate = value;
    }
}