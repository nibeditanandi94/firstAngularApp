import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector:'home-child',
    templateUrl:'./home-child.component.html'
})
export class HomeChildComponent implements OnChanges{
    ngOnChanges(changes: SimpleChanges): void {
       console.log(this.ReceivedInput);
    }

    @Input('ReceivefromParent') ReceivedInput:string="";
    @Output('OutputfromChild') OutputtedValue = new EventEmitter<string>();

    OutPutValue(){
        this.OutputtedValue.emit("Sending Data from child to Parent");
    }
}