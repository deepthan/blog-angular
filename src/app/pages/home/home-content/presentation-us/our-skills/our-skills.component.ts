import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2, OnChanges } from '@angular/core';
import { autoWidth } from './../../../../../shared/animations/autoWidth';

@Component({
  selector: 'poetry-our-skills',
  templateUrl: './our-skills.component.html',
  styleUrls: ['./our-skills.component.scss'],
  animations: [
    autoWidth
  ]
})
export class OurSkillsComponent implements OnInit, OnChanges {

  @Input() public skillMeta: any;
  @Input() public skillsBarStart: any;
  // @ViewChild('processBar') processBar: ElementRef;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {  }

  ngOnChanges() {
    // if (this.skillsBarStart) {
    //   console.log("this.skillsBarStart1111", this.skillsBarStart)
    //   this.renderer2.setProperty(this.processBar.nativeElement, "width", this.skillMeta.percentage);
    //   this.renderer2.setStyle(this.processBar.nativeElement, "background-color", this.skillMeta.color ? this.skillMeta.color : "#0061ea");
    // }
  }



}
