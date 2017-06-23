import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ParticleProvider } from '../../providers/particle/particle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public var1: any;
  public red: any;
  private subscription: any = null;
  
  constructor(public navCtrl: NavController, public particle: ParticleProvider) {
  }

  ionViewDidLoad() {
    this.login()
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
    }
  }

  login() {
    this.navCtrl.push( LoginPage );
  }
}
