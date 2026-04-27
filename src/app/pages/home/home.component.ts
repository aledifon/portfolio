import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent{
  
  // Hero title signals
  showTitle = signal(false);
  
  // Hero Rol vars & signals
  private rolName1 = "Software Engineer";
  private rolName2 = "Industrial Systems Engineer";
  private rolName3 = "Frontend Engineer (Angular)";
  heroRol = signal(this.rolName1);
  showRol = signal(true);

  private showRolTime = 3000;
  private fadeInOutRolTime  = 800;
  private fadeWaitRolTime  = 300;
  private fadeCycleTime = this.showRolTime + this.fadeInOutRolTime*2 + this.fadeWaitRolTime;


  private switchHeroRol() :void {
    switch(this.heroRol()){
      case this.rolName1:
        this.heroRol.set(this.rolName2);
        break;
      case this.rolName2:
        this.heroRol.set(this.rolName3);
        break;
      case this.rolName3:
        this.heroRol.set(this.rolName1);
        break;
      default:
        this.heroRol.set(this.rolName1);
        break;        
    }  
  }  

  // Fading Fx (Total 5s)
  // Fading time set on the .css
  public fadingHeroRolCycle():void {

      // Show for 3s before fade-out
      setTimeout(() => {
        // Fade-out 1s + wait 0.5s = 1.5s)
        this.showRol.set(false);
        // console.log("Start fade-out");      

        // Fade-in after elapsed time
        setTimeout(() => {
          this.switchHeroRol();
          this.showRol.set(true);
          // console.log("Start fade-in");
        }, this.fadeInOutRolTime + this.fadeWaitRolTime);  
      }, this.showRolTime);
  }

  ngOnInit(): void {       
    // Runs before the next repaint to sync animations with updated DOM state. 
    requestAnimationFrame(() => {                  
      this.showTitle.set(true);          
    },);    

    //Only 1st exec.
    this.fadingHeroRolCycle();    

    setInterval(() => {
      this.fadingHeroRolCycle();
    }, this.fadeCycleTime);
  }

}
