import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';
import {Addbeneficiary} from '../addbeneficiary';


@Component({
  selector: 'app-rtgstransaction',
  templateUrl: './rtgstransaction.component.html',
  styleUrls: ['./rtgstransaction.component.css']
})
export class RtgstransactionComponent implements OnInit {

  contact:contact;
  public beneficiarylist:Addbeneficiary[]=[];
  beneficiarylist1:any
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    this.contact = { 
      recipient_acct:null,
      trans_date:null,
      remarks:"",
      amount:null,
      account_no:JSON.parse(sessionStorage.getItem('account_no'))
    }
  //   this.bankingService.getAllBeneficiaries().subscribe((data: Addbeneficiary[])=>{
  //     //console.log("inside subscribe")
  //      //console.log(data);
  //     // console.log(this.beneficiarylist);
  //     for (let i = 0; i < data.length;i++) 
  //              {
  //               //  console.log("inside for")
  //               if (data[i].account_no==JSON.parse(sessionStorage.getItem('account_no')))
  //               {
  //                 //console.log("inside if")
  //                 //console.log(this.accountholder1[i].account_no)
  //                   this.beneficiarylist.push(data[i]);
  //               }
  //             }
  //             console.log(this.beneficiarylist)
  
  // })

  this.bankingService.getreleventbeneficiary(this.contact).subscribe(res => {
    //console.log(res)
    console.log(typeof(res))
    this.beneficiarylist1 = res
    console.log(this.beneficiarylist1)
  });
  }
  onSubmit(contactForm)
  {
    //console.log("Hello");
    console.log(contactForm.value);

    this.bankingService.rtgs(contactForm.value).subscribe(res=>
      {
        console.log("Transaction Successful!")
      })
}
}

export class contact{
  recipient_acct:number;
  trans_date:Date;
  remarks:string;
  amount:number;
  account_no:number;
}
