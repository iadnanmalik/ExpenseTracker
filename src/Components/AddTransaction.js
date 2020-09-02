import React,{useState} from 'react'

export const AddTransaction = () => {
    const [description, setDescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();
    
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type='text' id='description' placeholder="Detail of Transaction" value={description} onChange={(e)=>setDescription(e.target.value)}>
                    </input>
                </div>
                <div className="form-control">
                <label htmlFor='transactionamount'>
                        Description
               </label>
               <input type="number" id="transactionamount" placeholder="Enter Transaction Amount" value={transactionAmount} onChange={(e)=>setTransactionAmount(e.target.value)}>
               </input>
 
                </div>
                <button className="btn" >
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
