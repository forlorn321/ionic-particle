import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ParticleProvider } from '../../providers/particle/particle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public var2: any;
  public green: any;
  public var1: any;
  public red: any;
  private subscription: any = null;
  
  constructor(public navCtrl: NavController, public particle: ParticleProvider) {
  }

  ionViewDidLoad() {
    this.login();
  }

  cancelSubscription() {
    if (this.subscription) {
        this.subscription.cancel();
    }
    this.subscription = null;
  }

  
  ionViewDidEnter() {
    if (this.particle.device) {
        this.cancelSubscription();
        this.particle.pollVariable("red").subscribe(
            (value) => { this.red = value; },
            (error) => { console.log("Error reading var1"); },
            () => { console.log("Stopped polling var1"); }
        );
 
  }        if (this.particle.device) {
        this.cancelSubscription();
        this.particle.pollVariable("green").subscribe(
            (value) => { this.green = value; },
            (error) => { console.log("Error reading var2"); },
            () => { console.log("Stopped polling var2"); }
        );
    }
    }

  login() {
    this.navCtrl.push( LoginPage );
  }
}
