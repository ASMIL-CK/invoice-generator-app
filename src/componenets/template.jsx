import ReactToprint from "react-to-print";
import { Close } from "@mui/icons-material";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Barcode from "react-barcode";
import { useRef, useState } from "react";


function pdfTemplate(props){
    const ref = useRef();
    const [openAirPopup, setAirPopup] = useState(false);
    const [Item, setItem] = useState('');
    const [Amount, setAmount] =useState(0);
    const [list, setList] = useState([]);

    const addData = () =>{
        list.push({
            produnct:Item,
            amount:Amount,
        })

        setItem('')
        setAmount('')
        setAirPopup(false)    
        
    }

    let sum = 0;
    list.forEach(amount =>{
        sum+=parseInt(amount.amount)

    })

    return (
        <div className="container" ref={ref}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 barcode">
                                <Barcode value={`4n%${props.InvoiceNumber}+ut%`}
                                width={1} height={50} displayValue={false}/>

                            </div>
                            <div className="col-md-8 text-right bbc">
                                <h4 style={{color: '#325aa8'}}><strong>company name</strong></h4>
                                <p>(+91)12234567890</p>
                                <p>sample@gmail.com</p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 style={{color: '#325aa8'}}>INVOICE</h2>
                                <h5>id: {props.InvoiceNumber}</h5>
                            </div>
                        </div>
                        <br />
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th><h5>Products</h5></th>
                                <th><h5>Amount</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                List.length?
                                List.map((items, index)=>{
                                   return(
                                    <tr key={index}>
                                        <td className="col-md-9">{items.produnct}
                                        </td>
                                        <td className="col-md-3">${items.amount}</td>
                                    </tr>

                                   );
                                }):null
                            
                            }

                            <tr>
                                <td className="text-right">
                                    <p>
                                        <strong>Total Amount :</strong>
                                    </p>
                                    <p>
                                        <strong>payable Amount :</strong>
                                    </p>

                                </td>
                                <td>
                                    <p>
                                        <strong>$ {sum}</strong>
                                    </p>
                                    <p>
                                        <strong>$ {sum}</strong>
                                    </p>
                                </td>
                            </tr>
                            
                                <tr style={{color: 'F81d2d'}}>
                                    <td className="text-right"><h4><strong>Total:</strong></h4></td>
                                    <td className="text-left"><h4><strong>$:</strong></h4></td>

                                </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="col-md-12">
                        <p><b>data:</b>{props.data}</p>
                        <br />
                        <p><b>your name:</b></p>
                        <p><b>Contact:(+91) 1234567890</b></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
