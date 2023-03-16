import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-del-producto',
  templateUrl: './detalle-del-producto.component.html',
  styleUrls: ['./detalle-del-producto.component.scss']
})
export class DetalleDelProductoComponent {

  diviceXs!: boolean;
  
  constructor(
    public dialogRef: MatDialogRef<DetalleDelProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  close(){
    this.dialogRef.close();
  }

}
