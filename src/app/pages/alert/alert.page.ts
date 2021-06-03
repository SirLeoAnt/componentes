import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  onClick(){
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      mode: 'ios',
      backdropDismiss: false,
      // contendio del alert
      header: 'Aqui va el titulo',
      subHeader: 'SubTitulo',
      message: 'Este es el mensaje del alerta.',
      // botones
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  onClick2(){
    this.presentAlertMultipleButtons();
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      mode: 'ios',
      backdropDismiss: false,
      header: 'Alerta',
      subHeader: 'SubTitulo',
      message: 'Este es el mensaje del Alerta',
      buttons: ['Cancelar', 'Abrir Modal', 'Eliminar']
    });

    await alert.present();
  }
  onClick3(){
    this.presentAlertConfirm();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      mode: 'ios',
      backdropDismiss: false,
      header: 'Confirmación!',
      message: 'Mensaje <strong>Texto adicional</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('fue cancelado', blah);
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Fue confirmado');
            this.onClick();
          }
        }
      ]
    });

    await alert.present();
  }
  onClick4(){
    this.presentAlertPrompt();
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      mode: 'ios',
      backdropDismiss: false,
      header: 'Prompt!',
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'Apellidos',
          type: 'text',
          id: 'name2-id',
          value: 'Aquino',
          placeholder: 'Apellidos'
        },
        // multiline input.
        {
          name: 'Descripcion',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'descripcion'
        },
        {
          name: 'url',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Sitio Favorito'
        },
        // input date with min & max
        {
          name: 'Fecha',
          type: 'date',
          min: '2021-05-01',
          max: '2021-05-31'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'Numero',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'Contraseña',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 8,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Guardar',
          handler: ( data: any ) => {
            console.log('Informacion=>', data);
          }
        }
      ]
    });

    await alert.present();
  }

  onClick5(){
    this.presentAlertRadio();
  }
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      mode: 'ios',
      backdropDismiss: false,
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3',
          handler: () => {
            console.log('Radio 3 selected');
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4',
          handler: () => {
            console.log('Radio 4 selected');
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5',
          handler: () => {
            console.log('Radio 5 selected');
          }
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6',
          handler: () => {
            console.log('Radio 6 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: ( d: any) => {
            console.log('Confirm Ok', d);
          }
        }
      ]
    });

    await alert.present();
  }
  onClick6(){
    this.presentAlertCheckbox();
  }
  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      mode: 'ios',
      backdropDismiss: false,
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          handler: () => {
            console.log('Checkbox 1 selected');
          },
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2',
          handler: () => {
            console.log('Checkbox 2 selected');
          }
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3',
          handler: () => {
            console.log('Checkbox 3 selected');
          }
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4',
          handler: () => {
            console.log('Checkbox 4 selected');
          }
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5',
          handler: () => {
            console.log('Checkbox 5 selected');
          }
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
